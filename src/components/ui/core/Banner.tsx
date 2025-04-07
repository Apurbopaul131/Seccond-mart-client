import { ChevronRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="py-4 bg-gray-500">
      <div className="container mx-auto px-4 py-12 relative">
        <h1 className="text-4xl font-bold text-primary">
          About <span className="text-white">Second BD</span>
        </h1>
        <div className="p-2 bg-white rounded-md w-[150px] text-center absolute -bottom-10 shadow-md">
          <span>Home</span>

          <ChevronRight className="text-primary inline" />

          <span className="text-muted-foreground">About</span>
        </div>
      </div>
    </div>
  );
}
