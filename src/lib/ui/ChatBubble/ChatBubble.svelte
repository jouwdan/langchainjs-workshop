<script lang="ts">
  export let item: any = {};
  export let isLoading: boolean = false;
</script>

{#if isLoading}
  <div class="grid grid-row-[1fr_auto] w-full overflow-y-auto mb-24">
    <div class="grid grid-cols-[auto_1fr] gap-2 max-w-2xl ml-auto right-0">
      <div class="card m-2 p-4 h-auto variant-soft rounded-tl-none space-y-2">
        <header class="flex justify-between items-center">
          <p class="font-bold">NodeBot</p>
        </header>
        <p>Typing...</p>
      </div>
    </div>
  </div>
{:else}
  <div class="grid grid-cols-[auto_1fr] gap-2 max-w-2xl {item.isQuestion ? '' : 'ml-auto right-0'}">
    <div
      class="card m-2 p-4 h-auto {item.isQuestion
        ? 'variant-soft rounded-tl-none'
        : 'rounded-tr-none'} space-y-2"
    >
      <header class="flex justify-between items-center">
        <p class="font-bold">{item.isQuestion ? 'You' : 'NodeBot'}</p>
      </header>
      <p>{item.text}</p>
    </div>
  </div>
{/if}
