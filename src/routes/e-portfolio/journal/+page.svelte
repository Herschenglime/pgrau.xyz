<script lang="ts">
 export let data
</script>

Look at all of these posts!

<h1>Journal Entries</h1>

<ul>
  {#each data.posts as post}
	<li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
