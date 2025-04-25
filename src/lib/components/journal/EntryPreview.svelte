<!-- @migration-task Error while migrating Svelte code: `<a>` cannot be a descendant of `<a>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
  export let post:Post;
</script>

<a href={post.path}>
  <div class="card bg-base-200 shadow-xl m-5">
    <div class="card-body">
      <h2 class="card-title">{post.meta.title}</h2>
      <p>{post.meta.description}</p>
      <p class="text-info">Published <b>{post.meta.date}</b></p>
      <div class="card-actions justify-end">
        <a href={post.path}><button class="btn btn-primary">Read</button></a>
      </div>
    </div>
  </div>
</a>
