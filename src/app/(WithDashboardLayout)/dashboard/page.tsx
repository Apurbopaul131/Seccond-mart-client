import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Dashboard",
  description: "This is user Dashboard page of seccond mart project",
};
const UserDashboardPage = () => {
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted " />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4" />
    </div>
  );
};

export default UserDashboardPage;
