export interface IUser {
  userId: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: "user" | "admin";
  isBlocked: boolean;
  iat: number;
}
