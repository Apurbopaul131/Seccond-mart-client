// components/ReviewCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type ReviewCardProps = {
  reviewText: string;
  name: string;
};

export default function ReviewCard({ reviewText, name }: ReviewCardProps) {
  console.log(name);
  return (
    <Card className="w-full max-w-sm mx-auto text-center shadow-md p-4 h-[320px]">
      <CardContent className="h-full">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={"https://github.com/shadcn.png"}
            alt={"user-avater"}
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold text-muted-foreground">
            {name}
          </h2>
          <p className="text-sm text-gray-700">{reviewText}</p>
        </div>
      </CardContent>
    </Card>
  );
}
