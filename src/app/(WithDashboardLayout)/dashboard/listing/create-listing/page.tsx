import CreateListingForm from "@/components/modules/listing/CreateListingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Create Listing",
  description: "This is login page of seccond mart project",
};
const CreateListingPage = () => {
  return (
    <div className="flex justify-center my-10">
      <CreateListingForm />
    </div>
  );
};

export default CreateListingPage;
