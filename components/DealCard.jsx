import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import DropInFromZoom from "@/components/animations/DropInFromZoom";
import RatingStars from "@/components/ui/ratingStars";

const DealCard = ({ image, isNew, rating, description, prevPrice, newPrice, className = "" }) => {
  return (
    <DropInFromZoom repeat={true}>
      <div
        className={`${className} group rounded-xl bg-white shadow-gray-200 transition-all delay-75 duration-200 ease-in-out hover:-translate-y-2 hover:shadow-md`}
      >
        <div className="relative flex h-52 items-center justify-center">
          <div className="relative h-[95%] w-[95%]">
            <ImageWithPlaceholder
              src={image}
              alt={description}
              fill={true}
              sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              className={"rounded-xl object-cover"}
            />
          </div>
          {isNew ? (
            <div className="absolute left-0 top-2 -translate-x-2 rounded-sm bg-sky-600 px-2 text-sm font-medium text-white">
              <span>New</span>
            </div>
          ) : (
            ""
          )}
          <div className="absolute right-0 top-2 hidden -translate-y-1 translate-x-2 rounded-sm text-xl transition-transform duration-200 ease-in-out group-hover:block hover:scale-125">
            <div className="rounded-full border bg-white p-2 text-orange-500 ">
              <BsSuitHeart />
            </div>
          </div>
        </div>
        <div className="flex h-32 flex-col justify-between px-2 py-2">
          <div className="flex items-center gap-2 text-sm">
            <RatingStars rating={rating} />
            <span className="text-gray-600">(59 Ratings)</span>
          </div>
          <div className="line-clamp-2 w-full font-bold capitalize">
            <p className="leading-[1.4rem]">{description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="old-price text-gray-500 line-through">
              <span>&#8358;{prevPrice}</span>
            </div>
            <div className="new-price text-xl font-bold text-red-600">
              <span>&#8358;{newPrice}</span>
            </div>
            <div className="rounded-lg border bg-red-100 px-2 text-sm text-red-600">
              <span>{Math.trunc(((newPrice - prevPrice) * 100) / prevPrice)}%</span>
            </div>
          </div>
        </div>
      </div>
    </DropInFromZoom>
  );
};

export default DealCard;
