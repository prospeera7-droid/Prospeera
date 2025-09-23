/**
 * @fileOverview Zod schemas for the schedule meeting flow.
 *
 * - ScheduleMeetingInputSchema - The Zod schema for the input of the scheduleMeeting function.
 * - ScheduleMeetingInput - The inferred type from the input schema.
 * - ScheduleMeetingOutputSchema - The Zod schema for the output of the scheduleMeeting function.
 * - ScheduleMeetingOutput - The inferred type from the output schema.
 */

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
