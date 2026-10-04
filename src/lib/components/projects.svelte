<script lang="ts">
  import blue from "#lib/assets/covers/aura-22081-blue.png?enhanced";
  import pink from "#lib/assets/covers/aura-39581-pink.png?enhanced";

  const projects = [
    {
      title: "fnko.cc",
      href: "https://fnko.cc/",
      cover: blue,
    },
    {
      title: "furfsky.net",
      href: "https://furfsky.net",
      cover: pink,
    },
  ];
</script>

<div class="projects">
  <h2>Projects</h2>
  <div class="projects__grid">
    {#each projects as project (project.href)}
      <a class="projects__card" href={project.href} target="_blank" rel="noopener noreferrer">
        <enhanced:img
          class="projects__image"
          src={project.cover}
          alt=""
          loading="lazy"
          decoding="async"
          sizes="(min-width: 60rem) 29rem, calc(100vw - 2rem)"
        />
        <span class="icon icon--external-link projects__icon" aria-hidden="true"></span>
        <h3 class="projects__name no-heading-markers">{project.title}</h3>
      </a>
    {/each}
  </div>
</div>

<style>
  .projects {
    display: grid;
    gap: 1.25rem;
  }

  .projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
    gap: 1rem;
  }

  .projects__card {
    position: relative;
    display: grid;
    aspect-ratio: 3 / 1;
    align-content: end;
    overflow: hidden;
    padding: 1rem;
    color: var(--background);
    text-decoration: none;
  }

  .projects__image {
    position: absolute;
    inset: 0;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }

  .projects__card::after {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      color-mix(in oklab, var(--foreground) 35%, transparent),
      color-mix(in oklab, var(--foreground) 15%, transparent) 45%,
      transparent 85%
    );
    content: "";
    pointer-events: none;
  }

  .projects__icon {
    position: absolute;
    inset-block-start: 1rem;
    inset-inline-end: 1rem;
    z-index: 1;
    inline-size: 1.25rem;
    block-size: 1.25rem;
  }

  .projects__name {
    position: relative;
    z-index: 1;
    color: inherit;
    font-weight: 400;
  }

  @media (prefers-reduced-motion: no-preference) {
    .projects__image {
      transition: scale 500ms cubic-bezier(0.2, 0, 0, 1);
    }

    .projects__card:is(:hover, :focus-visible) .projects__image {
      scale: 1.08;
    }
  }
</style>
