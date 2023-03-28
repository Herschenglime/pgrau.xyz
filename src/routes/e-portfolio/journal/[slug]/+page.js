export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  console.log("this is the post")
  console.log(post)
  const { title, date } = post.metadata

  // const { title, date } = { title: "test title", date: "today" }
  const content = post.default

  return {
    content,
    title,
    date,
  }
}
