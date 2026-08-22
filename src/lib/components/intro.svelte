<div class="intro">
  <p class="intro__identity">
    Hello, I'm
    <img
      class="intro__avatar"
      src="https://avatars.githubusercontent.com/feenko?s=64"
      alt=""
      width="24"
      height="24"
      decoding="async"
      draggable="false"
    />
    <strong>Szymon Pel</strong>
  </p>
  <p>A web developer based in <strong>Warsaw, Poland</strong>.</p>
  <p>The devil is in the details. That's why I care a lot about how the design comes together.</p>
</div>

<style>
  .intro {
    display: grid;
    gap: 1.25rem;
  }

  .intro > p {
    text-wrap: pretty;
  }

  .intro__identity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .intro__avatar {
    display: block;
    flex: none;
    inline-size: 1.05em;
    block-size: 1.05em;
  }
</style>
