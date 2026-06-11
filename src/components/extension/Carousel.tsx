import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Carousel1 from "@/assets/images/image.png";

export default function Carousel() {
  return (
    <div>
      <Card className="w-full">
        <CardContent>
          <div className="w-full max-h-[530px] overflow-hidden">
            <Image
              src={Carousel1}
              alt="carousel1"
              width={1920}
              height={530}
              className="w-full h-auto object-cover rounded-md"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
