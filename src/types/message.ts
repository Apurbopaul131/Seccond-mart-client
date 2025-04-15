export interface IMessage {
  _id: string;
  senderID: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: "user" | "admin"; // Adjust if other roles are possible
    isBlocked: boolean;
  };
  receiverID: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: "user" | "admin";
    isBlocked: boolean;
  };
  message: string;
  createdAt: string;
  updatedAt: string;
}
