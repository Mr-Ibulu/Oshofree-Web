import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { findSubCategories } from "@/lib/utils";

const CategoryCardCollection = ({ rootCategory }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 gap-6 xl:gap-y-8">
      {rootCategory.title === "Highlight" ? (
        ""
      ) : (
        <Link
          href={rootCategory.slug}
          className="col-span-3 sm:col-span-4 md:col-span-5 2xl:col-span-6 flex items-center justify-between mt-10 font-bold text-xl"
          scroll={false}
        >
          <p>{rootCategory.title}</p>
          <div className="text-sm text-red-600 flex items-center gap-2">
            <span>View All</span> <AiOutlineRight />
          </div>
        </Link>
      )}

      {findSubCategories(rootCategory).map((item) => (
        // <FadeInFromZoom reapeat={true} initialScale={1.5} duration={0.2} key={item.title}>
        <Link href={`${rootCategory.slug}/${item.slug}`} key={item.title} scroll={false}>
          <div className="h-24 sm:h-32 xl:h-36 shadow-md rounded-lg relative overflow-hidden flex transition-transform duration-200 delay-75 ease-in-out hover:-translate-y-2">
            <ImageWithPlaceholder src={item.image} alt={item.title} fill={true} sizes={"20vw"} className={"object-cover"} />
          </div>
          <div className="mt-2 font-medium text-sm xs:text-base">
            <span className="">{item.title}</span>
          </div>
        </Link>
        // </FadeInFromZoom>
      ))}
    </div>
  );
};

export default CategoryCardCollection;
