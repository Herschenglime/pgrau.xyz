export const load = async ({ fetch }) => {
  const response = await fetch(`/api/e-portfolio/journal`)
  const posts = await response.json()

  return {
    posts
  }
}
