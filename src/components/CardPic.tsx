
import { Card, CardContent } from "@/components/ui/card";
import image1 from "@/assets/images/Proffesional_photo-July 2026.png";       

export function CardPic() {
return (

            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  
                  <img
                    src={image1}
                    className="rounded-lg"
                    style={{ width: "100%", height: "280px" }} // Standard height and width
                  />
                  
                </CardContent>
                <div className="text-2xl flex  items-center text-center m-4">Email: orl1289@gmail.com</div>
                <div className="text-2xl flex  items-center text-center m-4">Phone: +34 692 53 65 87</div>
              </Card>
            </div>
);
            }
            export default CardPic;