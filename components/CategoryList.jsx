import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import { findSubCategories } from "@/lib/utils";

const CategoryList = ({ rootCategory }) => {
  return (
    <nav>
      <div>
        {rootCategory.title === "Highlight" ? (
          ""
        ) : (
          <Link href={rootCategory.slug} className="flex items-center justify-between mt-10 font-bold text-2xl sm:text-3xl mb-3">
            <h2>{rootCategory.title}</h2>
            <div className="text-base sm:text-lg text-red-600 flex items-center gap-2">
              <span>View All</span> <AiOutlineRight />
            </div>
          </Link>
        )}
      </div>
      <div className="bg-white px-2">
        {findSubCategories(rootCategory).map((subCat) => (
          <Accordion type="single" collapsible key={subCat.title}>
            <AccordionItem value="subcategories">
              <AccordionTrigger className="sm:text-lg font-bold">{subCat.title}</AccordionTrigger>
              <AccordionContent>
                <Link href={`${rootCategory.slug}/${subCat.slug}`} key={subCat.title} className="block font-semibold sm:text-lg py-1 my-2">
                  All {subCat.title} Deals
                </Link>
                {findSubCategories(subCat).map((innerCat) => (
                  <Link href={`${rootCategory.slug}/${innerCat.slug}`} key={innerCat.title} className="block sm:text-lg py-1 my-2 font-medium">
                    {innerCat.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </nav>
  );
};

export default CategoryList;
