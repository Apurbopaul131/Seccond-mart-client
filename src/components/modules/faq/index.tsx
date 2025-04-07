import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <div className="w-[90%] md:container mx-auto mt-20 mb-10 space-y-3">
      <h2 className="text-4xl font-semibold">General Question</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>1. How do I advertise?</AccordionTrigger>
          <AccordionContent className="py-2 text-sm text-muted-foreground">
            Posting an ad on secondbd is quick and easy! For this, click on the
            yellow colored Advertise button and follow the instructions. If you
            are not logged in, the first step to posting an ad is to log in.
            Your ad will go live after being reviewed
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. How can I delete my ad?</AccordionTrigger>
          <AccordionContent>
            To delete an ad, please go to that adss page and click the Delete
            button. Tip: You can easily find your ads by visiting the My Ads
            page after logging into your account!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. How can I change or modify my ad?
          </AccordionTrigger>
          <AccordionContent>
            To edit an ad, please go to that ads page and click the Edit Ad
            button. Tip: You can easily find your ads by visiting the My Ads
            page after logging into your account!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            4. How can I set a new password on Secondbd
          </AccordionTrigger>
          <AccordionContent>
            To set a new password on secondbd please log in to your account,
            then go to the Settings or about Us page and enter the new password.
            If you have forgotten your Bikroy password, you can: After going to
            the login page, click on the Forgot your password link. Click on any
            ad, then click on Edit Ad or Remove Ad and finally Forgot your
            password? Click on the link. If you have created an account through
            Facebook, Or gmail you will not have a secondbd password. In that
            case, you can log into your account through Facebook or gmail
            without a password.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. I placed an ad but cant find it. Whats the problem?
          </AccordionTrigger>
          <AccordionContent>
            All ads are reviewed to ensure no customer fraud or spam, so it may
            take up to 1 hour before an ad is shown on the site. If you still
            dont see the ad after 1 hour, it may be in violation of our posting
            rules . If your ad has not been approved, you will receive an email
            with an explanation of why. If you have to wait more than 24 hours
            to hear back from us, you may have entered your phone number
            incorrectly when posting your ad. Try posting again or contact us .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. How can I change my account details?
          </AccordionTrigger>
          <AccordionContent>
            To change any of your account information, log into your account and
            go to the accounts Settings page.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
