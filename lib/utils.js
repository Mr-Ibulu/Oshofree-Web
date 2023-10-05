import { cart } from "@/data/cart";
import { categories } from "@/data/categories";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const findAllDescendantCategory = (ancestorCategory, descendantCategories = []) => {
  const filteredCategories = categories.filter((cat) => cat.parent === ancestorCategory.slug);
  for (const result of filteredCategories) {
    descendantCategories.push(result);
    findAllDescendantCategory(result, descendantCategories);
  }
  return descendantCategories;
};

export const findAllRootCategories = () => {
  return categories.filter((cat) => !cat.parent);
};

export const findRootParent = (cat) => {
  if (cat.parent) {
    const parent = categories.find((parent) => parent.slug === cat.parent);
    return findRootParent(parent);
  } else {
    return cat;
  }
};

export const isRootCategory = (slug) => {
  const category = categories.find((cat) => cat.slug === slug);
  if (category.parent) {
    return false;
  }
  return true;
};

export const findParent = (childCategory) => {
  return categories.find((parent) => parent.slug === childCategory.parent);
};

export const findSubCategories = (parentCategory) => {
  return categories.filter((subCategory) => subCategory.parent === parentCategory.slug);
};

export const findSiblingCategories = (category) => {
  return categories.filter((siblingCategories) => siblingCategories.parent === category.parent);
};
