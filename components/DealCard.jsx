import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import DropInFromZoom from "@/components/animations/DropInFromZoom";
import RatingStars from "@/components/ui/ratingStars";

const DealCard = ({ image, isNew, rating, description, prevPrice, newPrice, className = "" }) => {
  return (
    <DropInFromZoom repeat={true}>
      <div
        className={`${className} group rounded-xl bg-white shadow shadow-gray-200 transition-transform duration-200 delay-75 ease-in-out hover:-translate-y-2`}
      >
        <div className="h-52 flex items-center justify-center relative">
          <div className="w-[95%] h-[95%] relative">
            <ImageWithPlaceholder
              src={image}
              alt={description}
              fill={true}
              sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              className={"object-cover rounded-xl"}
            />
          </div>
          {isNew ? (
            <div className="px-2 font-medium text-sm bg-sky-600 text-white absolute top-2 left-0 -translate-x-2 rounded-sm">
              <span>New</span>
            </div>
          ) : (
            ""
          )}
          <div className="hidden group-hover:block text-xl absolute top-2 right-0 translate-x-2 -translate-y-1 rounded-sm transition-transform duration-200 ease-in-out hover:scale-125">
            <div className="border rounded-full p-2 bg-white text-orange-500 ">
              <BsSuitHeart />
            </div>
          </div>
        </div>
        <div className="h-32 flex flex-col py-2 px-2 justify-between">
          <div className="flex gap-2 items-center text-sm">
            <RatingStars rating={rating} />
            <span className="text-gray-600">(59 Ratings)</span>
          </div>
          <div className="w-full font-bold capitalize line-clamp-2">
            <p className="leading-[1.4rem]">{description}</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="old-price line-through text-gray-500">
              <span>&#8358;{prevPrice}</span>
            </div>
            <div className="new-price font-bold text-xl text-red-600">
              <span>&#8358;{newPrice}</span>
            </div>
            <div className="border text-sm bg-red-100 text-red-600 rounded-lg px-2">
              <span>{Math.trunc(((newPrice - prevPrice) * 100) / prevPrice)}%</span>
            </div>
          </div>
        </div>
      </div>
    </DropInFromZoom>
  );
};

export default DealCard;
