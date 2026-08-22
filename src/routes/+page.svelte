<script lang="ts">
  import Intro from "$lib/components/intro.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Posts from "$lib/components/posts.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Szymon Pel</title>
</svelte:head>

<Intro />
<Projects />
{#if data.posts.length}
  <Posts posts={data.posts} />
{/if}
