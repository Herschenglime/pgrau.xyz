export const load = async ({ fetch }) => {
  const response = await fetch(`/api/code`)
  const posts = await response.json()

  return {
    posts
  }
}
