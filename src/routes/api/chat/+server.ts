import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Ollama } from 'langchain/llms/ollama';
import { RunnableSequence } from 'langchain/schema/runnable';
import { StringOutputParser } from 'langchain/schema/output_parser';

export const POST: RequestHandler = async ({ request }) => {
  const { question } = await request.json();

  const model = new Ollama({
    baseUrl: 'http://localhost:11434',
    model: 'llama2'
  });

  const chain = RunnableSequence.from([model, new StringOutputParser()]);

  const response = await chain.invoke(question);

  return json(response);
};
