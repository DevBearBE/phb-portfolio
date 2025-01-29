import { z } from "zod";
import dayjs from "dayjs";

export const TeamMemberSchema = z.object({
  id: z.number(),
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  yob: z
    .number()
    .min(dayjs().subtract(65, "year").year(), {
      message: "Yob can not be lower.",
    })
    .max(dayjs().subtract(23, "year").year(), {
      message: "Yob is too young. It is not possible.",
    }),
  profilePicture: z.string().trim().nullish(),
  college: z.string().trim().nullish(),
  jobTitle: z.string().trim(),
  approvalNumber: z.number(),
  visumNumber: z.number(),
  short: z.string().nullish(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
