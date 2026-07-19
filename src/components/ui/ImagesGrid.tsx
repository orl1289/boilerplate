
import image1 from "@/assets/images/ksenia-yakovleva-YT6COuf1gY0-unsplash.jpg";
import image2 from "@/assets/images/derek-finch-zkrPU_1AwdU-unsplash.jpg";
import image3 from "@/assets/images/pexels-ivan-s-9629684.jpg";
import image4 from "@/assets/images/pexels-yaroslav-shuraev-8692129.jpg";
import image5 from "@/assets/images/pexels-tima-miroshnichenko-9574541.jpg";
import image6 from "@/assets/images/pexels-tima-miroshnichenko-5439434.jpg";

const images = [image1, image2, image3, image4, image5, image6 ];


const ImagesGrid= () => {

return(

<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptop:py-20 gap-4 ">
{images.map((imageURL, index) => (
<div key={index} className= "mb-4 break-inside-avoid">
    <img
    src={imageURL} className="w-full object-cover rounded-lg"/>
</div>
))}
</div>
);
};

export default ImagesGrid;
