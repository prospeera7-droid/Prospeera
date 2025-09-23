
'use server';
/**
 * @fileOverview A flow for scheduling a meeting.
 *
 * - scheduleMeeting - A function that handles the meeting scheduling process.
 * - ScheduleMeetingInput - The input type for the scheduleMeeting function.
 * - ScheduleMeetingOutput - The return type for the scheduleMeeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ScheduleMeetingInputSchema = z.object({
  name: z.string().describe('The name of the person requesting the meeting.'),
  email: z.string().email().describe('The email address of the person.'),
  message: z.string().describe('The message or reason for the meeting.'),
});
export type ScheduleMeetingInput = z.infer<typeof ScheduleMeetingInputSchema>;

export const ScheduleMeetingOutputSchema = z.object({
    confirmationMessage: z.string().describe("A confirmation message indicating the meeting has been scheduled.")
});
export type ScheduleMeetingOutput = z.infer<typeof ScheduleMeetingOutputSchema>;


export async function scheduleMeeting(input: ScheduleMeetingInput): Promise<ScheduleMeetingOutput> {
  return scheduleMeetingFlow(input);
}

const scheduleMeetingFlow = ai.defineFlow(
  {
    name: 'scheduleMeetingFlow',
    inputSchema: ScheduleMeetingInputSchema,
    outputSchema: ScheduleMeetingOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to interact with a calendar API
    // like Google Calendar, Calendly, or send an email notification.

    // For this example, we'll just return a confirmation message.
    console.log(`Meeting scheduled for ${input.name} (${input.email}) with message: ${input.message}`);
    
    return {
      confirmationMessage: `Thank you, ${input.name}! Your meeting request has been received. We will contact you at ${input.email} shortly to confirm the details.`,
    };
  }
);
