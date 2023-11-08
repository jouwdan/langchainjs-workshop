<script lang="ts">
  let url = '';
  let question = '';
  let conversation: { id: number; text: string; isQuestion: boolean }[] = [];
  let isLoading = false;
  let error: string | null = null;

  async function ask() {
    isLoading = true;

    const newQuestion = { id: conversation.length + 1, text: question, isQuestion: true };
    conversation = [...conversation, newQuestion];

    try {
      const response = await fetch('/api/url', {
        method: 'POST',
        body: JSON.stringify({ url, question }),
        headers: {
          'content-type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const newResponse = { id: conversation.length + 1, text: data, isQuestion: false };
        conversation = [...conversation, newResponse];
      } else {
        error = 'Failed to fetch data. Please try again.';
      }
    } catch (e) {
      error = 'An error occurred. Please try again later.';
    }

    isLoading = false;
  }
</script>

<div class="h-full w-full justify-center items-center relative">
  <div class="grid grid-row-[1fr_auto] w-full overflow-y-auto mb-24">
    {#each conversation as item (item.id)}
      <div
        class="grid grid-cols-[auto_1fr] gap-2 max-w-2xl {item.isQuestion ? '' : 'ml-auto right-0'}"
      >
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
    {/each}
  </div>
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
  {/if}
  {#if error}
    <p>{error}</p>
  {/if}
  <div
    class="border-t border-surface-500/30 bg-surface-800 p-4 fixed bottom-0 w-full h-18 overflow-x-none"
  >
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
      <input
        class="bg-transparent border-0 ring-0"
        title="URL Input"
        type="text"
        placeholder="Insert URL here..."
        bind:value={url}
      />
      <input
        class="bg-transparent border-0 ring-0"
        title="URL Input"
        type="text"
        placeholder="Ask your question here..."
        bind:value={question}
      />
      <button type="button" class="input-group-shim" on:click={ask}>Submit</button>
    </div>
  </div>
</div>
