import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { HNSWLib } from 'langchain/vectorstores/hnswlib';
import { Ollama } from 'langchain/llms/ollama';
import { PromptTemplate } from 'langchain/prompts';
import { RunnableSequence, RunnablePassthrough } from 'langchain/schema/runnable';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { HuggingFaceTransformersEmbeddings } from 'langchain/embeddings/hf_transformers';
import { formatDocumentsAsString } from 'langchain/util/document';

export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const pdfFile = formData.get('pdfFile');
  const question = formData.get('question');

  const loader = new PDFLoader(pdfFile as File, {
    splitPages: false
  });
  const docs = await loader.loadAndSplit();

  const vectorstore = await HNSWLib.fromDocuments(docs, new HuggingFaceTransformersEmbeddings());

  const retriever = vectorstore.asRetriever();

  const prompt =
    PromptTemplate.fromTemplate(`Answer the question based only on the following context:
{context}

Question: {question}`);

  const model = new Ollama({
    baseUrl: 'http://localhost:11434',
    model: 'llama2'
  });

  const chain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough()
    },
    prompt,
    model,
    new StringOutputParser()
  ]);

  const response = await chain.invoke(question);

  return json(response);
};
