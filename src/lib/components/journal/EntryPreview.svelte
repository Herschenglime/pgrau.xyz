<script lang="ts">
  export let post;
</script>

<a href={post.path}>
  <div class="card bg-neutral shadow-xl m-5">
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
