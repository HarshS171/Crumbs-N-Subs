
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
      'A list of items (baked goods, subs, or drinks) the customer is currently interested in or has in their cart.'
    ),
});
export type AIPairedRecommendationsInput = z.infer<
  typeof AIPairedRecommendationsInputSchema
>;

const AIPairedRecommendationsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggested complementary items from our bakery or sandwich menu.'),
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
  prompt: `You are an expert baker and sandwich artisan for a premium bakery and sub shop called 'Crumbs N Subs', located in Jalandhar, Punjab.
Your task is to suggest complementary baked goods, gourmet subs, or drinks based on a customer's current selection.
The suggestions should reflect a fusion of international artisan quality and local Punjabi flavor where appropriate.
Provide 3-5 unique and appealing suggestions. Focus on classic pairings or creative, delicious combinations that would appeal to a foodie in Jalandhar.
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
