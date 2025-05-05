import BrandLogo from "@/app/assets/logo-transparent.png";
import Image from "next/image";
const Logo = () => {
  return (
    <Image
      src={BrandLogo}
      alt="brand-logo"
      width={60}
      height={44}
      className="rounded-sm"
    ></Image>
  );
};

export default Logo;
