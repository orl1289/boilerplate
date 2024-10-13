import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "@/assets/images/pexels-akilmazumder-1072824.jpg";
import image2 from "@/assets/images/pexels-gustavo-fring-4254158.jpg";
import image3 from "@/assets/images/pexels-kelly-1179532-6572421.jpg";
import image4 from "@/assets/images/pexels-pixabay-414837.jpg";

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
    Autoplay({ delay: 3000, stopOnInteraction: false})
  );          

  // *To replace the content inside the CarouselItem with an image element

  const images = [image1, image2, image3, image4];

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
                    alt={`Image ${index + 1}`}
                    className="rounded-lg"
                    style={{ width: "100%", height: "500px" }} // Standard height and width
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
