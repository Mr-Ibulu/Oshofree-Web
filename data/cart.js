import fashion2 from "@/public/images/fashion2.jpg";
import cleaning from "@/public/images/cleaning.jpg";
import food2 from "@/public/images/food2.jpg";

export const cart = [
  {
    deal: {
      id: 3,
      image: cleaning,
      isNew: true,
      rating: 2.2,
      description: "Up to 80% Off on Upholstery Cleaning at Master HVAC Cleaning",
      prevPrice: 5250,
      newPrice: 1042,
    },
    quantity: 2,
  },
  {
    deal: {
      id: 8,
      image: fashion2,
      isNew: true,
      rating: 4,
      description: "Men's Galaxy By Harvic Moisture Wicking Tagless Polo Shirt",
      prevPrice: 1250,
      newPrice: 1135,
    },
    quantity: 1,
  },
  {
    deal: { id: 6, image: food2, isNew: true, rating: 2.3, description: "Toward Breakfast or Lunch at Apple Villa", prevPrice: 150, newPrice: 90 },
    quantity: 3,
  },
];
