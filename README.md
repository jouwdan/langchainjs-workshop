# LangchainJS Workshop

This repository contains the demo code to be able to run a [NodeJS](https://nodejs.org) application that communicates with a locally running [Ollama](https://ollama.ai/) server. It is built using [LangchainJS](https://js.langchain.com/) to communicate with the LLM, along with [SvelteKit](https:/kit.svelte.dev) for the API & frontend.

![image](https://github.com/jouwdan/langchainjs-workshop/assets/76656637/4bc8ac29-3bbf-41f1-a4d8-8f62cbc726dd)

![image](https://github.com/jouwdan/langchainjs-workshop/assets/76656637/335540de-d28a-4723-95ad-68bc01cd9125)

## Getting Started

In order to get started running this application, you will first need to run Ollama locally. If you have already got it running, skip to the next section.

### Running Ollama

1. Head to the [Download Ollama](https://ollama.ai/download) page.

2. Download & Install Ollama on your computer.

3. Open the Ollama application and it will give you the command to run Ollama, similar to below

```
ollama run llama2
```

4. Enter this in your terminal application to download and run the model locally.

### Running the application

This app requires at least node version 18.

1. Clone this repo

2. Run `npm install`

3. Run `npm run dev`

The app will then be running on http://localhost:5173
