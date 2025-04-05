import BrandLogo from "@/app/assets/logo.jpg";
import Image from "next/image";
const Logo = () => {
  return (
    <Image
      src={BrandLogo}
      alt="brand-logo"
      width={35}
      height={24}
      className="rounded-sm"
    ></Image>
  );
};

export default Logo;
