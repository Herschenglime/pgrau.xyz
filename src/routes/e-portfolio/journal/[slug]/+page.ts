export async function load({ params } : {metadata:any, default:any}) {
  let post;

  try {
    post = await import(`../${params.slug}.md`)
  }

  catch (e) {
    post = await import(`../not-found.md`)
  }

  console.log(post)
  const { title, date, hidden } = post.metadata
  const Content = post.default

  return {
    Content,
    title,
    date,
    hidden,
  }


}
