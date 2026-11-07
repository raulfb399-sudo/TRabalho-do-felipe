import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional()
});
export interface CreateCustomerInput {
  name: string;
  email: string;
  phone?: string | null; // A interrogação (?) é o segredo aqui!
}
export const updateCustomerSchema = createCustomerSchema.partial();