export const fetchMarkdownPosts = async (source: string) => {
  
  let allPostFiles;

  switch (source) {
      case "journal": allPostFiles = import.meta.glob('/src/routes/e-portfolio/journal/*.md');
      // case "code": allPostFiles = import.meta.glob('/src/routes/code/*.md');
  }
  
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}
