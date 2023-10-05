export const categories = [
  {
    id: 1,
    title: "Highlight",
    slug: "highlight",
  },
  {
    title: "Nearby",
    parent: "highlight",
    slug: "nearby",
    image:
      "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9jYXRpb24lMjBwaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "highlight",
    title: "Oshofree Brands",
    slug: "oshofree-brands",
    image:
      "https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd1Y2NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "highlight",
    title: "Special",
    slug: "special",
    image:
      "https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Local",
    slug: "local",
  },
  {
    parent: "local",
    title: "Beauty & Spas",
    slug: "beauty-and-spas",
    image:
      "https://images.unsplash.com/photo-1583106617217-406e2c5656fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  { parent: "beauty-and-spas", title: "Subcategory1", slug: "test" },
  { parent: "test", title: "Test11", slug: "test11" },
  { parent: "test", title: "Test12", slug: "test12" },
  { parent: "beauty-and-spas", title: "Subcategory2", slug: "sub2" },
  { parent: "beauty-and-spas", title: "Subcategory3", slug: "sub3" },
  { parent: "beauty-and-spas", title: "Subcategory4", slug: "sub4" },
  { parent: "beauty-and-spas", title: "Subcategory5", slug: "sub5" },
  {
    parent: "local",
    title: "Things To Do",
    slug: "things-to-do",
    image:
      "https://images.unsplash.com/photo-1562077477-eb2409f73c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "local",
    title: "Food & Drinks",
    slug: "food-and-drinks",
    image:
      "https://images.unsplash.com/photo-1479796099910-b137a80acde4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "local",
    title: "Health & Fitness",
    slug: "health-and-fitness",
    image:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhlYWx0aCUyMGFuZCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  { parent: "health-and-fitness", title: "Subcategory1", slug: "sub6" },
  { parent: "health-and-fitness", title: "Subcategory2", slug: "sub7" },
  { parent: "health-and-fitness", title: "Subcategory3", slug: "sub8" },
  { parent: "health-and-fitness", title: "Subcategory4", slug: "sub9" },
  { parent: "health-and-fitness", title: "Subcategory5", slug: "sub10" },
  {
    parent: "local",
    title: "Home Services",
    slug: "home-services",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "local",
    title: "Automotive",
    slug: "automotive",
    image:
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwbWFpbnRlbmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "local",
    title: "Handyman",
    slug: "handyman",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmR5bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "local",
    title: "Real Estate & Accomodation",
    slug: "real-estate-and-accomodation",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  { parent: "real-estate-and-accomodation", title: "Subcategory1", slug: "test11" },
  { parent: "real-estate-and-accomodation", title: "Subcategory2", slug: "sub12" },
  { parent: "real-estate-and-accomodation", title: "Subcategory3", slug: "sub13" },
  { parent: "real-estate-and-accomodation", title: "Subcategory4", slug: "sub14" },
  { parent: "real-estate-and-accomodation", title: "Subcategory5", slug: "sub15" },
  {
    id: 3,
    title: "Goods",
    slug: "goods",
  },
  {
    parent: "goods",
    title: "For The Home",
    slug: "for-the-home",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  { parent: "electronics", title: "Subcategory1", slug: "sub16" },
  { parent: "electronics", title: "Subcategory2", slug: "sub17" },
  { parent: "electronics", title: "Subcategory3", slug: "sub18" },
  { parent: "electronics", title: "Subcategory4", slug: "sub19" },
  { parent: "electronics", title: "Subcategory5", slug: "sub20" },
  {
    parent: "goods",
    title: "Phones And Tablets",
    slug: "phones-and-tablet",
    image:
      "https://images.unsplash.com/photo-1585789711243-94d08c332a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lcyUyMGFuZCUyMHRhYmxldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Men's Fashion",
    slug: "mens-fashion",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Women's Fashion",
    slug: "womens-fashion",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Baby & Kids",
    slug: "baby-and-kids",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhYnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Beauty And Health",
    slug: "beauty-and-health",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Sports And Fitness",
    slug: "sports-and-fitness",
    image:
      "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0cyUyMGFuZCUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Pet Supplies",
    slug: "pet-supplies",
    image:
      "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0JTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Auto Accessories",
    slug: "auto-accessories",
    image:
      "https://images.unsplash.com/photo-1618178325258-a123dc15f610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Books & Media",
    slug: "books-and-media",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "goods",
    title: "Entertainment",
    slug: "entertainment",
    image:
      "https://images.unsplash.com/photo-1650552845099-747af1e0e6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYW5kJTIwZ2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Travel And Hotels",
    slug: "travel-and-hotels",
  },
  {
    parent: "travel-and-hotels",
    title: "Family",
    slug: "family",
    image:
      "https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhbWlseSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "travel-and-hotels",
    title: "Romantic",
    slug: "romantic",
    image:
      "https://images.unsplash.com/photo-1569929233287-f0565228c4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJvbWFudGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "travel-and-hotels",
    title: "Flights",
    slug: "flights",
    image:
      "https://images.unsplash.com/photo-1610642372651-fe6e7bc209ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlybGluZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "travel-and-hotels",
    title: "Events",
    slug: "events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    parent: "travel-and-hotels",
    title: "Vacation",
    slug: "vacation",
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];
