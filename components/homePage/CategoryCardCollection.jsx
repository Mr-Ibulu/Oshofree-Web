import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { findSubCategories } from "@/lib/utils";

const CategoryCardCollection = ({ rootCategory }) => {
  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 xl:gap-y-8 2xl:grid-cols-6">
      {rootCategory.title === "Highlight" ? (
        ""
      ) : (
        <Link
          href={rootCategory.slug}
          className="col-span-3 mt-10 flex items-center justify-between text-xl font-bold sm:col-span-4 md:col-span-5 2xl:col-span-6"
        >
          <p>{rootCategory.title}</p>
          <div className="flex items-center gap-2 text-sm text-red-600">
            <span>View All</span> <AiOutlineRight />
          </div>
        </Link>
      )}

      {findSubCategories(rootCategory).map((item) => (
        // <FadeInFromZoom reapeat={true} initialScale={1.5} duration={0.2} key={item.title}>
        <Link href={rootCategory.slug === "highlight" ? "" : `${rootCategory.slug}/${item.slug}`} key={item.title}>
          <div className="relative flex h-24 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition delay-75 duration-200 ease-in-out hover:-translate-y-2 sm:h-32 xl:h-36">
            <ImageWithPlaceholder src={item.image} alt={item.title} fill={true} sizes={"20vw"} className={"object-cover"} />
          </div>
          <div className="mt-2 text-sm font-medium xs:text-base">
            <span className="">{item.title}</span>
          </div>
        </Link>
        // </FadeInFromZoom>
      ))}
    </div>
  );
};

export default CategoryCardCollection;
