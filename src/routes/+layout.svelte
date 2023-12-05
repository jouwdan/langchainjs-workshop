<script lang="ts">
  import { AppBar, AppRail, AppRailAnchor, AppShell } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import '../app.postcss';
  import { page } from '$app/stores';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar class="font-bold text-xl">NodeBot</AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailAnchor href="/" name="home" title="home" selected={$page.url.pathname === '/'}>
        <svelte:fragment slot="lead">
          <Icon icon="fluent:home-24-filled" width="24" height="24" class="mx-auto" />
        </svelte:fragment>
        <span>Home</span>
      </AppRailAnchor>
      <AppRailAnchor
        href="/nodebot"
        name="chat"
        title="chat"
        selected={$page.url.pathname === '/nodebot'}
      >
        <svelte:fragment slot="lead">
          <Icon icon="fluent:chat-24-filled" width="24" height="24" class="mx-auto" />
        </svelte:fragment>
        <span>Chat</span>
      </AppRailAnchor>
      <AppRailAnchor
        href="/nodebot/url"
        name="url"
        title="url"
        selected={$page.url.pathname === '/nodebot/url'}
      >
        <svelte:fragment slot="lead">
          <Icon icon="fluent:link-multiple-24-filled" width="24" height="24" class="mx-auto" />
        </svelte:fragment>
        <span>URL</span>
      </AppRailAnchor>
      <AppRailAnchor
        href="/nodebot/file"
        name="pdf"
        title="pdf"
        selected={$page.url.pathname === '/nodebot/file'}
      >
        <svelte:fragment slot="lead">
          <Icon icon="fluent:document-pdf-24-filled" width="24" height="24" class="mx-auto" />
        </svelte:fragment>
        <span>PDF</span>
      </AppRailAnchor>
      <!-- --- -->
      <svelte:fragment slot="trail">
        <AppRailAnchor
          href="https://github.com/jouwdan/langchainjs-workshop"
          target="_blank"
          name="github"
          title="github"
        >
          <svelte:fragment slot="lead">
            <Icon icon="ant-design:github-filled" width="24" height="24" class="mx-auto" />
          </svelte:fragment>
          <span>GitHub</span>
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <slot />
</AppShell>
