import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "@/assets/images/ksenia-yakovleva-YT6COuf1gY0-unsplash.jpg";
import image2 from "@/assets/images/derek-finch-zkrPU_1AwdU-unsplash.jpg";
import image3 from "@/assets/images/pexels-ivan-s-9629684.jpg";
import image4 from "@/assets/images/pexels-yaroslav-shuraev-8692129.jpg";
import image5 from "@/assets/images/pexels-tima-miroshnichenko-9574541.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // *To replace the content inside the CarouselItem with an image element

  const images = [image1, image2, image3, image4, image5];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg laptop:max-w-screen-laptop"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index} className="laptop:basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={imageUrl}
                    /*alt={`Image ${index + 1}`}*/
                    alt={`Image ${index < 3 ? index + 1 : index-4}`}
                    className="rounded-lg"
                    style={{ width: "60%", height: "60%" }} // Standard height and width
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default CarouselPlugin;
