import React from "react";
import { MdOutlineChevronLeft, MdOutlineClose } from "react-icons/md";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import RatingStars from "@/components/ui/ratingStars";
import { SheetClose } from "@/components/ui/sheet";
import { findParent, findRootParent, findSiblingCategories, findSubCategories, isRootCategory } from "@/lib/utils";

const FilterBottomSheet = ({ category }) => {
  const rootParent = findRootParent(category);
  const parentCategory = findParent(category);
  const subCategories = findSubCategories(category);

  return (
    <div className="mt-4 h-full px-3 overflow-y-scroll scrollbar-none">
      <div className="grid grid-cols-3 items-center">
        <div className="flex">
          <SheetClose asChild>
            <button className="text-2xl focus:outline-none">
              <MdOutlineClose />
            </button>
          </SheetClose>
        </div>
        <div className="text-lg font-semibold text-center">Filters</div>
        <div className="flex">
          <button className="ml-auto text-sm px-2 py-1 focus:outline-none">Reset</button>
        </div>
      </div>
      <div className="h-[80%] overflow-y-scroll scrollbar-none mt-4">
        <div className="text-center text-lg">{category?.title}</div>
        <Accordion type="single" defaultValue="subcategories" collapsible>
          <AccordionItem value="subcategories">
            <AccordionTrigger className="text-sm sm:text-lg font-bold">Category</AccordionTrigger>
            <AccordionContent>
              {subCategories.length > 0 ? (
                <>
                  {category.parent ? (
                    <Link href={parentCategory.parent ? parentCategory.slug : `/${rootParent.slug}`} className="block ">
                      <div className="flex items-center gap-x-1 w-full font-bold sm:text-base">
                        <MdOutlineChevronLeft className="text-2xl sm:text-3xl" />
                        {category.title}
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                  <ul>
                    {subCategories.map((cat) => (
                      <li key={cat.title}>
                        <Link
                          href={`/${findRootParent(cat).slug}/${cat.slug}`}
                          className={`block text-sm sm:text-base py-1 my-1 font-medium ${category.parent && "ml-10"}`}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  {category.parent
                    ? findParent(category).parent && (
                        <Link
                          href={parentCategory.parent && !isRootCategory(parentCategory.parent) ? parentCategory.parent : `/${rootParent.slug}`}
                          className="block"
                        >
                          <div className="flex items-center gap-1 w-full font-bold sm:text-base">
                            <MdOutlineChevronLeft className="text-2xl sm:text-3xl" />
                            {findParent(category).title}
                          </div>
                        </Link>
                      )
                    : ""}
                  <ul>
                    {findSiblingCategories(category).map((cat) => (
                      <li key={cat.title}>
                        <Link
                          href={`/${findRootParent(cat).slug}/${cat.slug}`}
                          className={`block text-sm sm:text-base py-1 my-1 font-medium ${
                            cat.slug == category.slug && "text-sky-700 underline font-semibold"
                          } ${category.parent && findParent(category).parent && "ml-10"}`}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="price-range">
            <AccordionTrigger className="text-sm sm:text-lg font-bold">Price</AccordionTrigger>
            <AccordionContent>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="0..1000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="0..1000" />
                  <span>&#8358;0 - &#8358;1,000</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="1000..2000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="1000..2000" />
                  <span>&#8358;1,000 - &#8358;2,000</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="2000..3000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="2000..3000" />
                  <span>&#8358;2,000 - &#8358;3,000</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="3000..4000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="3000..4000" />
                  <span>&#8358;3,000 - &#8358;4,000</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="4000..5000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="4000..5000" />
                  <span>&#8358;4,000 - &#8358;5,000</span>
                </label>
              </div>
              <div className="mt-3">
                <div className="text-sm font-bold capitalize mb-2">Custom price range</div>
                <form action="" className="flex gap-3 font-medium">
                  <div className="border w-20 border-sky-500 rounded h-8 inline-flex items-center gap-1 px-1">
                    <span>&#8358;</span>
                    <input type="text" name="minPrice" id="minPrice" className="w-full h-full focus:outline-none" placeholder="Min" />
                  </div>
                  <div className="border w-20 border-sky-500 rounded h-8 inline-flex items-center gap-1 px-1">
                    <span>&#8358;</span>
                    <input type="text" name="maxPrice" id="maxPrice" className="w-full h-full focus:outline-none" placeholder="Max" />
                  </div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white rounded w-12">Go</button>
                </form>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="rating">
            <AccordionTrigger className="text-sm sm:text-lg font-bold">Rating</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="all">
                <div className="text-sm sm:text-base font-medium py-1 my-2">
                  <Label htmlFor="All" className="flex items-center space-x-2">
                    <RadioGroupItem value="All" id="All" />
                    <span>All</span>
                  </Label>
                </div>
                <div className="text-sm sm:text-base font-medium py-1 my-2">
                  <Label htmlFor="min-4" className="flex items-center space-x-2">
                    <RadioGroupItem value="min-4" id="min-4" />
                    <RatingStars rating={4} />
                    <span> & Up</span>
                  </Label>
                </div>
                <div className="text-sm sm:text-base font-medium py-1 my-2">
                  <Label htmlFor="min-3" className="flex items-center space-x-2">
                    <RadioGroupItem value="min-3" id="min-3" />
                    <RatingStars rating={3} />
                    <span> & Up</span>
                  </Label>
                </div>
                <div className="text-sm sm:text-base font-medium py-1 my-2">
                  <Label htmlFor="min-2" className="flex items-center space-x-2">
                    <RadioGroupItem value="min-2" id="min-2" />
                    <RatingStars rating={2} />
                    <span> & Up</span>
                  </Label>
                </div>
                <div className="text-sm sm:text-base font-medium py-1 my-2">
                  <Label htmlFor="min-1" className="flex items-center space-x-2">
                    <RadioGroupItem value="min-1" id="min-1" />
                    <RatingStars rating={1} />
                    <span> & Up</span>
                  </Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="locations">
            <AccordionTrigger className="text-sm sm:text-lg font-bold">Locations</AccordionTrigger>
            <AccordionContent>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="loc-1" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="loc-1" />
                  <span>Location 1</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="loc-2" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="loc-2" />
                  <span>Location 2</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="loc-3" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="loc-3" />
                  <span>Location 3</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="loc-4" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="loc-4" />
                  <span>Location 4</span>
                </label>
              </div>
              <div className="text-sm sm:text-base font-medium py-1 my-2">
                <label htmlFor="loc-5" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <Checkbox id="loc-5" />
                  <span>Location 5</span>
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-3">
        <button className="bg-sky-700 text-white w-full rounded-md py-2 focus:outline-none">Apply Filter</button>
      </div>
    </div>
  );
};

export default FilterBottomSheet;
