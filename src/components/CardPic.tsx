import { Card, CardContent } from "@/components/ui/card";
import image1 from "@/assets/images/Photo_with_background.png";
import { Link } from "react-router-dom";

export function CardPic() {
  return (
    <div className="p-4 tablet:p-6 laptop:p-8 desktop:p-10 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-4 tablet:p-5 laptop:p-6 flex justify-center">
          <img
            src={image1}
            alt="Profile"
            className="w-48 h-48 tablet:w-56 tablet:h-56 laptop:w-64 laptop:h-64 desktop:w-80 desltop:h-80 object-cover rounded-full"
          />
        </CardContent>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 mx-2 my-3 px-2 py-1 text-sm tablet:text-base laptop:text-lg desktop:text-2xl">
          <svg
            className="w-4 h-4 tablet:w-5 tablet:h-5 laptop:w-6 laptop:h-6 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="whitespace-nowrap">Madrid, Spain - 28004</span>
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 mx-2 my-3 px-2 py-1 text-sm tablet:text-base laptop:text-lg desktop:text-2xl">
          <svg
            className="w-4 h-4 tablet:w-5 tablet:h-5 laptop:w-6 laptop:h-6 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z" />
            <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z" />
          </svg>
          <a 
            className="text-blue-500 hover:text-blue-700 whitespace-nowrap" 
            href="mailto:contact@orlandomatamonge.com"
          >
            contact@orlandomatamonge.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex justify-center items-center gap-2 mx-2 my-3 px-2 py-1 text-sm tablet:text-base laptop:text-lg desktop:text-2xl">
          <svg
            className="w-4 h-4 tablet:w-5 tablet:h-5 laptop:w-6 laptop:h-6 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
          </svg>
          <span className="whitespace-nowrap">+34 692 53 65 87</span>
        </div>

        {/* Resume Link */}
        <div className="flex justify-center items-center gap-2 mx-2 my-3 px-2 py-1 text-sm tablet:text-base laptop:text-lg desktop:text-2xl">
          <Link 
            to="/english" 
            className="text-white hover:text-orange-500 transition-colors text-sm tablet:text-base laptop:text-lg desktop:text-xl font-medium"
          >
            Resume
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default CardPic;