import spar from "@/public/images/spar.png";
import electronics from "@/public/images/electronics.png";
import fashion from "@/public/images/fashion.png";
import fashion2 from "@/public/images/fashion2.jpg";
import hotel from "@/public/images/hotel.png";
import food from "@/public/images/food.png";
import food2 from "@/public/images/food2.jpg";
import resort from "@/public/images/resort.jpg";
import gym from "@/public/images/gym.jpg";
import amusement from "@/public/images/amusement.jpg";
import haircut from "@/public/images/haircut.jpg";
import cleaning from "@/public/images/cleaning.jpg";

export const dealOfTheDay = [
  {
    id: 1,
    type: "service",
    image: spar,
    isNew: true,
    rating: 4.2,
    description: "50-Minute Custom Lymphatic Drainage Session with Ultrasonic Fat Cavitation",
    prevPrice: 400,
    newPrice: 200,
  },
  {
    id: 2,
    type: "service",
    image: haircut,
    isNew: false,
    rating: 4,
    description: "One or Two Men's Haircuts with Hot Facial Shave for One at Pivot Point Academy ",
    prevPrice: 550,
    newPrice: 200,
  },
  {
    id: 3,
    type: "service",
    image: cleaning,
    isNew: true,
    rating: 2.2,
    description: "Up to 80% Off on Upholstery Cleaning at Master HVAC Cleaning",
    prevPrice: 5250,
    newPrice: 1042,
  },
  {
    id: 4,
    type: "product",
    image: electronics,
    isNew: true,
    rating: 2.3,
    description: "Costway 6.5QT Air Fryer Oilless Cooker w/ 8 Preset Functions&Smart Touch Screen Black ES10020US-BK",
    prevPrice: 1650,
    newPrice: 1000,
  },
  {
    id: 5,
    type: "product",
    image: fashion,
    isNew: false,
    rating: 1,
    description: "LESIES Women's Summer Halter Floral Dresses Casual Sleeveless Ruffle Sundress",
    prevPrice: 920,
    newPrice: 810,
  },
  {
    id: 6,
    type: "product",
    image: food2,
    isNew: true,
    rating: 2.3,
    description: "Toward Breakfast or Lunch at Apple Villa",
    prevPrice: 150,
    newPrice: 90,
  },
  {
    id: 7,
    type: "service",
    image: resort,
    isNew: false,
    rating: 5,
    description: "Gran Ventana Beach Resort - Puerto Plata, Dominican Republic",
    prevPrice: 12350,
    newPrice: 11345,
  },
  {
    id: 8,
    type: "product",
    image: fashion2,
    isNew: true,
    rating: 4,
    description: "Men's Galaxy By Harvic Moisture Wicking Tagless Polo Shirt",
    prevPrice: 1250,
    newPrice: 1135,
  },
  {
    id: 9,
    type: "service",
    image: gym,
    isNew: true,
    rating: 3.2,
    description: "Four Fitness Classes at Shred415",
    prevPrice: 234250,
    newPrice: 231135,
  },
  {
    id: 10,
    type: "service",
    image: amusement,
    isNew: false,
    rating: 4.2,
    description: "Single Day Ticket to Worlds of Fun",
    prevPrice: 1250,
    newPrice: 1111,
  },
  {
    id: 11,
    type: "service",
    image: hotel,
    isNew: false,
    rating: 3.5,
    description: "Queen Kapi olani Hotel Waikīkī Beach",
    prevPrice: 4000,
    newPrice: 670,
  },
  {
    id: 12,
    type: "product",
    image: food,
    isNew: true,
    rating: 5,
    description: "Food and Drinks at Kenny's Ribs & Chicken",
    prevPrice: 3250,
    newPrice: 1340,
  },
];
