import { clientReviews } from "@/constants";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  return (
    <div className="mb-10">
      <Marquee pauseOnHover={true}>
        {clientReviews.map(({ name, reviewText }, idx) => (
          <div key={idx} className="mr-12">
            <ReviewCard reviewText={reviewText} name={name}></ReviewCard>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default ClientReview;
