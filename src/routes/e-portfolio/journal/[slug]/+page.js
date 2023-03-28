export async function load({ params }) {
  try {
    const post = await import(`../${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default

    return {
      content,
      title,
      date,
    }
  }

  catch (e) {
    const post = await import(`../not-found.md`)
    const { title, date } = post.metadata
    const content = post.default

    return {
      content,
      title,
      date,
    }
  }

}
