import ContactDetails from "@/components/modules/contact";
import Banner from "@/components/ui/core/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Contact",
  description: "This is Contact page of seccond mart project",
};

const ContactPage = () => {
  return (
    <div>
      <Banner routePath="Contact" />
      <ContactDetails />
    </div>
  );
};

export default ContactPage;
