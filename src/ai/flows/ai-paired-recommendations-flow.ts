'use server';
/**
 * @fileOverview This file implements a Genkit flow that provides intelligent
 *               suggestions for complementary baked goods or drinks based on
 *               a customer's current selection.
 *
 * - aiPairedRecommendations - A function to get paired recommendations.
 * - AIPairedRecommendationsInput - The input type for the aiPairedRecommendations function.
 * - AIPairedRecommendationsOutput - The return type for the aiPairedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPairedRecommendationsInputSchema = z.object({
  currentItems: z
    .array(z.string())
    .describe(
      'A list of items (baked goods or drinks) the customer is currently interested in or has in their cart.'
    ),
});
export type AIPairedRecommendationsInput = z.infer<
  typeof AIPairedRecommendationsInputSchema
>;

const AIPairedRecommendationsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggested complementary baked goods or drinks.'),
});
export type AIPairedRecommendationsOutput = z.infer<
  typeof AIPairedRecommendationsOutputSchema
>;

export async function aiPairedRecommendations(
  input: AIPairedRecommendationsInput
): Promise<AIPairedRecommendationsOutput> {
  return aiPairedRecommendationsFlow(input);
}

const pairedRecommendationsPrompt = ai.definePrompt({
  name: 'pairedRecommendationsPrompt',
  input: {schema: AIPairedRecommendationsInputSchema},
  output: {schema: AIPairedRecommendationsOutputSchema},
  prompt: `You are an expert baker and a skilled sommelier for a rustic bakery called 'The Warm Crumb Bakery'.
Your task is to suggest complementary baked goods or drinks based on a customer's current selection.
The suggestions should enhance the customer's order and help them discover new delightful pairings.
Provide 3-5 unique and appealing suggestions. Focus on classic pairings or creative, delicious combinations.
Do not suggest items that are already in the customer's selection.

Customer's current selection: {{{currentItems}}}

Make sure your output is a JSON object with a single key 'suggestions' which is an array of strings.`,
});

const aiPairedRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPairedRecommendationsFlow',
    inputSchema: AIPairedRecommendationsInputSchema,
    outputSchema: AIPairedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await pairedRecommendationsPrompt(input);
    return output!;
  }
);
