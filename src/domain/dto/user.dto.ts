export interface UserDTO {
  uid: string;
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

