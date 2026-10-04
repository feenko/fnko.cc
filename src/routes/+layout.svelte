<script lang="ts">
  import "@fontsource-variable/geist/wght.css";
  import "@fontsource-variable/geist/wght-italic.css";

  import "#lib/styles/reset.css";
  import "#lib/styles/base.css";
  import "#lib/styles/theme.css";
  import "#lib/styles/icons.css";
  import "#lib/styles/transitions.css";

  import geist from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";

  import { onNavigate } from "$app/navigation";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) {
      return;
    }

    // eslint-disable-next-line promise/avoid-new
    return new Promise<void>((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="preload" href={geist} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<main>
  {@render children()}
</main>
