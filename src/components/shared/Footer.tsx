import Logo from "@/app/assets/Logo";
import { currentUser } from "@/services/authServices";
import { IUser } from "@/types";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = async () => {
  const userInfo = (await currentUser()) as IUser;
  return (
    <footer className="bg-muted">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 container mx-auto px-3 text-base-content">
        <aside>
          <Logo />

          <p>
            Seccond Mart Ltd.
            <br />
            Providing reliable tech since 2019
          </p>
        </aside>
        <nav>
          <h6 className="">Contact</h6>
          <p>+8801917424643</p>
          <p>Shewrapara,Mirpur</p>
          <p>apurbopaul131@gmail.com</p>
        </nav>
        <nav>
          <h6 className="">Company</h6>
          <p>
            <Link href={"/about"}>About us</Link>
          </p>
          <p>
            <Link href={"/contact"}>Contact</Link>
          </p>
          <p>
            <Link href={"/faq"}>FAQ</Link>
          </p>
        </nav>
        <nav>
          <h6 className="">Useful Links</h6>
          <p>
            <Link
              href={
                userInfo?.role === "user"
                  ? "/dashboard/profile"
                  : "/dashboard/admin/profile"
              }
            >
              Profile
            </Link>
          </p>
          <p>
            <Link
              href={
                userInfo?.role === "user" ? "/dashboard" : "/dashboard/admin"
              }
            >
              Dashboard
            </Link>
          </p>
          <p>
            <Link
              href={
                userInfo?.role === "user"
                  ? "/dashboard/listing"
                  : "/dashboard/admin/listings"
              }
            >
              Manage Listing
            </Link>
          </p>
        </nav>
      </div>
      <div className="flex space-x-6 justify-center">
        <Link
          href="https://www.instagram.com/apurbopaul131gmail"
          target="_blank"
        >
          <Instagram className="w-6 h-6 text-gray-500 hover:text-pink-500 transition" />
        </Link>
        <Link href="https://www.facebook.com/ratr.tr.9" target="_blank">
          <Facebook className="w-6 h-6 text-gray-500 hover:text-blue-400 transition" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/apurbo-paul-633884191"
          target="_blank"
        >
          <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-700 transition" />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-600 text-center">
        © 2023 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
