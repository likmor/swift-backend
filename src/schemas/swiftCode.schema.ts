import { z } from "zod";

export const SwiftCodeSchema = z.object({
  address: z.string(),
  bankName: z.string(),
  countryISO2: z.string().length(2),
  countryName: z.string(),
  isHeadquarter: z.boolean(),
  swiftCode: z.string().min(8).max(11),
});
export type SwiftCode = z.infer<typeof SwiftCodeSchema>;