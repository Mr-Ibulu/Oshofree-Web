import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RatingStars from "@/components/ui/ratingStars";
import Link from "next/link";
import { findSiblingCategories, findRootParent, findSubCategories, findParent, isRootCategory } from "@/lib/utils";
import { MdOutlineChevronLeft } from "react-icons/md";

const FilterCard = ({ category }) => {
  const rootParent = findRootParent(category);
  const parentCategory = findParent(category);
  const subCategories = findSubCategories(category);
  return (
    <div className="shadow-lg px-2 bg-white rounded-lg pb-20 sticky top-0 max-h-screen overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <Accordion type="single" defaultValue="subcategories" collapsible>
        <AccordionItem value="subcategories">
          <AccordionTrigger className="text-sm font-bold">Category</AccordionTrigger>
          <AccordionContent>
            {subCategories.length > 0 ? (
              <>
                {category.parent ? (
                  <Link href={parentCategory.parent ? parentCategory.slug : `/${rootParent.slug}`} className="block ">
                    <div className="flex items-center gap-x-1 w-full font-bold">
                      <MdOutlineChevronLeft className="text-2xl" />
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
                        className={`block text-sm py-1 my-1 font-medium ${category.parent && "ml-10"}`}
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
                  ? parentCategory.parent && (
                      <Link
                        href={parentCategory.parent && !isRootCategory(parentCategory.parent) ? parentCategory.parent : `/${rootParent.slug}`}
                        className="block"
                      >
                        <div className="flex items-center gap-1 w-full font-bold">
                          <MdOutlineChevronLeft className="text-2xl" />
                          {parentCategory.title}
                        </div>
                      </Link>
                    )
                  : ""}
                <ul>
                  {findSiblingCategories(category).map((cat) => (
                    <li key={cat.title}>
                      <Link
                        href={`/${findRootParent(cat).slug}/${cat.slug}`}
                        className={`block text-sm py-1 my-1 font-medium ${cat.slug == category.slug && "text-sky-700 underline font-semibold"} ${
                          category.parent && parentCategory.parent && "ml-10"
                        }`}
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
      <Accordion type="single" defaultValue="price-range" collapsible>
        <AccordionItem value="price-range">
          <AccordionTrigger className="text-sm font-bold">Price</AccordionTrigger>
          <AccordionContent>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="0-1000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="0-1000" />
                <span>&#8358;0 - &#8358;1,000</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="1000-2000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="1000-2000" />
                <span>&#8358;1,000 - &#8358;2,000</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="2000-3000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="2000-3000" />
                <span>&#8358;2,000 - &#8358;3,000</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="3000-4000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="3000-4000" />
                <span>&#8358;3,000 - &#8358;4,000</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="4000-5000" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="4000-5000" />
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
      <Accordion type="single" defaultValue="rating" collapsible>
        <AccordionItem value="rating">
          <AccordionTrigger className="text-sm font-bold">Rating</AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="all">
              <div className="text-sm font-medium py-1 my-1">
                <Label htmlFor="all" className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <span>All</span>
                </Label>
              </div>
              <div className="text-sm font-medium py-1 my-1">
                <Label htmlFor="4" className="flex items-center space-x-2">
                  <RadioGroupItem value="4" id="4" />
                  <RatingStars rating={4} />
                  <span> & Up</span>
                </Label>
              </div>
              <div className="text-sm font-medium py-1 my-1">
                <Label htmlFor="3" className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="3" />
                  <RatingStars rating={3} />
                  <span> & Up</span>
                </Label>
              </div>
              <div className="text-sm font-medium py-1 my-1">
                <Label htmlFor="2" className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="2" />
                  <RatingStars rating={2} />
                  <span> & Up</span>
                </Label>
              </div>
              <div className="text-sm font-medium py-1 my-1">
                <Label htmlFor="1" className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="1" />
                  <RatingStars rating={1} />
                  <span> & Up</span>
                </Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" defaultValue="locations" collapsible>
        <AccordionItem value="locations">
          <AccordionTrigger className="text-sm font-bold">Locations</AccordionTrigger>
          <AccordionContent>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="location-1" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="location-1" />
                <span>Location 1</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="location-2" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="location-2" />
                <span>Location 2</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="location-3" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="location-3" />
                <span>Location 3</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="location-4" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="location-4" />
                <span>Location 4</span>
              </label>
            </div>
            <div className="text-sm font-medium py-1 my-2">
              <label htmlFor="location-5" className="flex items-center space-x-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checkbox id="location-5" />
                <span>Location 5</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCard;
