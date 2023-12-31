import cleaning from "@/public/images/cleaning.jpg";
import haircut from "@/public/images/haircut.jpg";
import spar from "@/public/images/spar.png";
import food2 from "@/public/images/food2.jpg";
import electronics from "@/public/images/electronics.png";
import fashion2 from "@/public/images/fashion2.jpg";

export const orders = [
  {
    id: "OSH234566",
    type: "service",
    code: "ASDTYB28",
    deal: {
      id: 3,
      image: cleaning,
      isNew: true,
      rating: 2.2,
      description: "Up to 80% Off on Upholstery Cleaning at Master HVAC Cleaning",
      prevPrice: 5250,
      newPrice: 1042,
    },
    date: "29 Sept 2023",
    quantity: 1,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "pending",
    statusMessage: "Awaiting Completion",
    paymentMethod: "Online",
    total: "1,042",
    subtotal: "1,042",
    deliveryInfo: null,
  },
  {
    id: "OSH344532",
    type: "service",
    code: "BN865KNW",
    deal: {
      id: 2,
      image: haircut,
      isNew: false,
      rating: 4,
      description: "One or Two Men's Haircuts with Hot Facial Shave for One at Pivot Point Academy ",
      prevPrice: 550,
      newPrice: 200,
    },
    date: "29 Sept 2023",
    quantity: 1,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "complete",
    statusMessage: "Service Rendered",
    paymentMethod: "Online",
    total: "200",
    subtotal: "200",
    deliveryInfo: null,
  },
  {
    id: "OTG463752",
    type: "service",
    code: "BN2348PQ",
    deal: {
      id: 1,
      image: spar,
      isNew: true,
      rating: 4.2,
      description: "50-Minute Custom Lymphatic Drainage Session with Ultrasonic Fat Cavitation",
      prevPrice: 400,
      newPrice: 200,
    },
    date: "29 Sept 2023",
    quantity: 1,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "cancelled",
    statusMessage: "Expired",
    paymentMethod: "Online",
    total: "200",
    subtotal: "200",
    deliveryInfo: null,
  },
  {
    id: "ACD357893",
    type: "product",
    code: null,
    deal: {
      id: 6,
      image: food2,
      isNew: true,
      rating: 2.3,
      description: "Toward Breakfast or Lunch at Apple Villa",
      prevPrice: 150,
      newPrice: 90,
    },
    date: "29 Sept 2023",
    quantity: 3,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "pending",
    statusMessage: "Package en route",
    paymentMethod: "Online",
    total: "90",
    subtotal: "90",
    deliveryInfo: { deliveryMethod: "Door Delivery", address: "No 19 Crusader Avenue, Odili Road", phone: "08044883399" },
  },
  {
    id: "YUI355789",
    type: "product",
    code: null,
    deal: {
      id: 4,
      image: electronics,
      isNew: true,
      rating: 2.3,
      description: "Costway 6.5QT Air Fryer Oilless Cooker w/ 8 Preset Functions&Smart Touch Screen Black ES10020US-BK",
      prevPrice: 1650,
      newPrice: 1000,
    },
    date: "29 Sept 2023",
    quantity: 2,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "complete",
    statusMessage: "Package delivered",
    paymentMethod: "Online",
    total: "1000",
    subtotal: "1000",
    deliveryInfo: { deliveryMethod: "Door Delivery", address: "No 19 Crusader Avenue, Odili Road", phone: "08044883399" },
  },
  {
    id: "HFD235965",
    type: "product",
    code: null,
    deal: {
      id: 8,
      image: fashion2,
      isNew: true,
      rating: 4,
      description: "Men's Galaxy By Harvic Moisture Wicking Tagless Polo Shirt",
      prevPrice: 1250,
      newPrice: 1135,
    },
    date: "29 Sept 2023",
    quantity: 5,
    selectedOption: "Service Variant Description More Description",
    vendor: "OSHOFREE VENTURES NIGERIA LIMITED",
    status: "cancelled",
    statusMessage: "Cancelled",
    paymentMethod: "Online",
    total: "1135",
    subtotal: "1135",
    deliveryInfo: { deliveryMethod: "Door Delivery", address: "No 19 Crusader Avenue, Odili Road", phone: "08044883399" },
  },
];
