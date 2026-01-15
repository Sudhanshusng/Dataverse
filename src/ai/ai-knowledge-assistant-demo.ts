'use server';

/**
 * @fileOverview AI Knowledge Assistant Demo flow.
 *
 * This flow allows users to interact with a demo AI Knowledge Assistant that showcases
 * document and database interaction using RAG agents.
 *
 * @file AIKnowledgeAssistantDemo - A function that handles the AI Knowledge Assistant Demo process.
 * @file AIKnowledgeAssistantDemoInput - The input type for the AIKnowledgeAssistantDemo function.
 * @file AIKnowledgeAssistantDemoOutput - The return type for the AIKnowledgeAssistantDemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIKnowledgeAssistantDemoInputSchema = z.object({
  query: z.string().describe('The query to ask the AI Knowledge Assistant.'),
});
export type AIKnowledgeAssistantDemoInput = z.infer<typeof AIKnowledgeAssistantDemoInputSchema>;

const AIKnowledgeAssistantDemoOutputSchema = z.object({
  response: z.string().describe('The response from the AI Knowledge Assistant.'),
});
export type AIKnowledgeAssistantDemoOutput = z.infer<typeof AIKnowledgeAssistantDemoOutputSchema>;

export async function AIKnowledgeAssistantDemo(input: AIKnowledgeAssistantDemoInput): Promise<AIKnowledgeAssistantDemoOutput> {
  return AIKnowledgeAssistantDemoFlow(input);
}

const AIKnowledgeAssistantDemoPrompt = ai.definePrompt({
  name: 'AIKnowledgeAssistantDemoPrompt',
  input: {schema: AIKnowledgeAssistantDemoInputSchema},
  output: {schema: AIKnowledgeAssistantDemoOutputSchema},
  prompt: `You are a helpful AI Knowledge Assistant demo.

  A visitor is testing your capabilities by asking a question.

  Respond to the following query:
  {{query}}`,
});

const AIKnowledgeAssistantDemoFlow = ai.defineFlow(
  {
    name: 'AIKnowledgeAssistantDemoFlow',
    inputSchema: AIKnowledgeAssistantDemoInputSchema,
    outputSchema: AIKnowledgeAssistantDemoOutputSchema,
  },
  async input => {
    const {output} = await AIKnowledgeAssistantDemoPrompt(input);
    return output!;
  }
);
