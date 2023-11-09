<script lang="ts">
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
  import '../app.postcss';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a class="btn-icon btn-icon-sm variant-filled" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            ><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" /></svg
          >
        </a>
      </svelte:fragment>
      NodeBot
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
