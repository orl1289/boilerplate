import { Card, CardContent } from "@/components/ui/card";
import image1 from "@/assets/images/Proffesional_photo-July 2026.png";

export function CardPic() {
  return (
    <div className="flex p-6">
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <img
            src={image1}
            className="rounded-lg object-contain md:object-cover"
            style={{ width: "100%", height: "280px" }} // Standard height and width
          />
        </CardContent>
        <div className="flex justify-center items-center m-2 p-2">
          <svg
            className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
          Madrid, Spain - 28004
        </div>
        <div className="flex justify-center items-center m-2 p-2">
          <svg
            className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z" />
            <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z" />
          </svg>
          <a href="mailto:orl1289@gmail.com">orl1289@gmail.com</a>
        </div>
        <div className="flex justify-center items-center m-2 p-2">
          <svg
            className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
          </svg>
          +34 692 53 65 87
        </div>
      </Card>
      <div className="text-center p-4 m-2">
        <div className="flex justify-center items-center">
          <svg
            className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
            Education
          </h1>
        </div>

        <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
          University of Vigo
          <p className="italic"> Energy and Sustainability Master's Degree</p>
        </h2>
        <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
          University of Costa Rica
          <p className="italic"> License in Chemical Engineering</p>
        </h2>
      </div>
    </div>
  );
}
export default CardPic;
