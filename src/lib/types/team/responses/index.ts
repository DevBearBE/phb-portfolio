import { z } from "zod";
import { TeamMemberSchema } from "..";

export const TeamResponseSchema = z.object({
  team: z.array(TeamMemberSchema),
});

export type TeamResponse = z.infer<typeof TeamResponseSchema>;
