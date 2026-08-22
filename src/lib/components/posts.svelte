<script lang="ts">
  import type { PostPreview } from "$lib/types/post";

  let { posts }: { posts: PostPreview[] } = $props();
</script>

<div class="posts">
  <h2>Posts</h2>
  <ul class="posts__list">
    {#each posts as post (post.slug)}
      <li>
        <a class="posts__item" href={`/posts/${post.slug}`}>
          <span class="icon icon--document" aria-hidden="true"></span>
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .posts {
    display: grid;
    gap: 1.25rem;
  }

  .posts__list {
    display: grid;
    gap: 1rem;
    list-style: none;
  }

  .posts__item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
