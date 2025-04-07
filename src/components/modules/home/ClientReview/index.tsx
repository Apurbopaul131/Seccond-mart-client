import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
const clientReviews = [
  {
    name: "Abir Paul",
    reviewText: "",
  },
  {
    name: "Akash Dash",
    reviewText: "",
  },
  {
    name: "Nayon Dey",
    reviewText: "",
  },
  {
    name: "Saurav Das",
    reviewText: "",
  },
  {
    name: "Antu Paul",
    reviewText: "",
  },
];
const ClientReview = () => {
  return (
    <div className="mb-10">
      <Marquee pauseOnHover={true}>
        {clientReviews.map(({ name, reviewText }, idx) => (
          <ReviewCard key={idx} reviewText={reviewText} name=""></ReviewCard>
        ))}
      </Marquee>
    </div>
  );
};
export default ClientReview;
