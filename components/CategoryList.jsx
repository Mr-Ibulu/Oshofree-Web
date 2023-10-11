import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { findSubCategories } from "@/lib/utils";

const CategoryList = ({ rootCategory }) => {
  return (
    <nav>
      <div>
        {rootCategory.title === "Highlight" ? (
          ""
        ) : (
          <Link href={rootCategory.slug} className="mb-3 mt-10 flex items-center justify-between text-2xl font-bold sm:text-3xl">
            <h2>{rootCategory.title}</h2>
            <div className="flex items-center gap-2 text-base text-red-600 sm:text-lg">
              <span>View All</span> <AiOutlineRight />
            </div>
          </Link>
        )}
      </div>
      <div className="bg-white px-2">
        {findSubCategories(rootCategory).map((subCat) => (
          <Accordion type="single" collapsible key={subCat.title}>
            <AccordionItem value="subcategories">
              <AccordionTrigger className="font-bold sm:text-lg">{subCat.title}</AccordionTrigger>
              <AccordionContent>
                <Link
                  href={rootCategory.slug === "highlight" ? "" : `${rootCategory.slug}/${subCat.slug}`}
                  key={subCat.title}
                  className="my-2 block py-1 font-semibold sm:text-lg"
                >
                  All {subCat.title} Deals
                </Link>
                {findSubCategories(subCat).map((innerCat) => (
                  <Link href={`${rootCategory.slug}/${innerCat.slug}`} key={innerCat.title} className="my-2 block py-1 font-medium sm:text-lg">
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
