import BackgroundPicure from "@/app/assets/seccond-mart-background.jpg";
import { currentUser } from "@/services/authServices";
import { IUser } from "@/types";
import { Accessibility, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
export default async function ShowProfile() {
  const user = (await currentUser()) as IUser;
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <h1 className="text-2xl font-semibold text-center text-blue-500 py-6">
        {user?.name} Profile
      </h1>

      {/* Background Banner */}
      <div className="relative h-64 w-full">
        <Image
          src={BackgroundPicure} // Replace with your actual path
          alt="Banner"
          fill
          className="object-cover"
        />

        {/* Profile Picture */}
        <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2">
          <Image
            src="https://github.com/shadcn.png" // Replace with your actual path
            alt="Mina"
            width={96}
            height={96}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 px-6 py-8 space-y-3">
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <User className="text-gray-500" size={20} />
            <span className="text-gray-500 font-medium">Name</span>
          </div>
          <span className="text-gray-700 font-semibold">{user?.name}</span>
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-gray-500" size={20} />
            <span className="text-gray-500 font-medium">Email</span>
          </div>
          <span className="text-gray-700 font-semibold">{user?.email}</span>
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-gray-500" size={20} />
            <span className="text-gray-500 font-medium">Phone</span>
          </div>
          <span className="text-gray-700 font-semibold">
            {user?.phoneNumber}
          </span>
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Accessibility className="text-gray-500" size={20} />
            <span className="text-gray-500 font-medium">Role</span>
          </div>
          <span className="text-gray-700 font-semibold">{user?.role}</span>
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <User className="text-gray-500" size={20} />
            <span className="text-gray-500 font-medium">Status</span>
          </div>
          <span className="text-gray-700 font-semibold">
            {user?.isBlocked ? "Blocked" : "Active"}
          </span>
        </div>
      </div>
    </div>
  );
}
