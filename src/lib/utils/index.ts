const processPosts = async (iterablePostFiles) => {
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

//couldn't figure out how to have one fetchMarkdownPosts with parameters, so I have separate
// functions instead
export const fetchJournalPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/e-portfolio/journal/*.md');
  const iterablePostFiles = Object.entries(allPostFiles)

  return processPosts(iterablePostFiles)
}

export const fetchCodePosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/code/*.md');
  const iterablePostFiles = Object.entries(allPostFiles)

  return processPosts(iterablePostFiles)
}
