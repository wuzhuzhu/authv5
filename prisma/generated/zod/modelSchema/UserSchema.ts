import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().email({ message: "Invalid email" }),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
