import { z } from "zod";

export const pingSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message length should be atlease 1 char" }),
});
