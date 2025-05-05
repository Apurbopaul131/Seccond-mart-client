import Logo from "@/app/assets/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 container mx-auto text-base-content">
        <aside>
          <Logo />

          <p>
            Seccond Mart Ltd.
            <br />
            Providing reliable tech since 2019
          </p>
        </aside>
        <nav>
          <h6 className="">Services</h6>
          <p>Branding</p>
          <a>Design</a>
          <a>Marketing</a>
          <p>Advertisement</p>
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
          <h6 className="">Legal</h6>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
