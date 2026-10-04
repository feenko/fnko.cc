<script lang="ts">
  import "#lib/styles/markdown.css";

  let { data } = $props();

  const Post = $derived(data.content);
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="post">
  <a class="post__back" href="/">
    <span class="icon icon--chevron-left" aria-hidden="true"></span>
    Back to home
  </a>

  <header class="post__header">
    {#if data.metadata.authors?.length}
      <dl class="post__metadata">
        <dt class="post__metadata-label">Authored by</dt>
        <dd class="post__authors">
          <ul class="post__author-list">
            {#each data.metadata.authors as author (author)}
              <li>
                <a
                  class="post__author"
                  href={`https://github.com/${author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="post__author-avatar"
                    src={`https://avatars.githubusercontent.com/${author}?s=64`}
                    alt=""
                    width="24"
                    height="24"
                    decoding="async"
                    draggable="false"
                  />
                  <span>{author}</span>
                </a>
              </li>
            {/each}
          </ul>
        </dd>
      </dl>
    {/if}

    <h1 class="post__title">{data.metadata.title}</h1>
  </header>

  <div class="post__prose">
    <Post />
  </div>
</article>

<style>
  .post {
    display: grid;
    gap: 1.25rem;
  }

  .post__back {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.5rem;
  }

  .post__header {
    display: grid;
    gap: 1.25rem;
  }

  .post__metadata {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;
    color: var(--muted-foreground);
  }

  .post__authors,
  .post__author-list {
    display: flex;
    flex-wrap: wrap;
  }

  .post__author-list {
    gap: 0.75rem;
    list-style: none;
  }

  .post__author {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .post__author-avatar {
    display: block;
    inline-size: 1.05em;
    block-size: 1.05em;
    flex: none;
  }
</style>
