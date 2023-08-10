import { z } from 'zod';

export interface UserDTO {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  role: UserRole;
  username: string;
  password: string;
  lastPassword: string[];
  emailVerified: boolean;
  codes: any[];
}
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  age: z.number().int().positive(),
  role: z.nativeEnum(UserRole), 
  username: z.string().min(4).max(20),
  password: z.string().min(6),
  lastPassword: z.array(z.string()),
  emailVerified: z.boolean(),
  codes: z.array(z.unknown())
});

export const mapUserToDTO = (user: any): UserDTO =>{
  const userDTO = userSchema.parse({
    id: user.id.toString(),
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    age: user.age,
    role: user.role,
    username: user.username,
    password: user.password,
    lastPassword: user.lastPassword,
    emailVerified: user.emailVerified,
    codes: user.codes,
  });

  return userDTO;
}
