import shirt1 from "@/assets/images/newArirvals/shirt1.webp";
import shirt2 from "@/assets/images/newArirvals/shirt2.webp";
import shirt3 from "@/assets/images/newArirvals/shirt3.webp";
import shirt4 from "@/assets/images/newArirvals/shirt4.webp";
import shirt5 from "@/assets/images/newArirvals/shirt5.webp";
import shirt6 from "@/assets/images/newArirvals/shirt6.webp";

import tshirt1 from "@/assets/images/newArirvals/t-shirt1.webp";
import tshirt2 from "@/assets/images/newArirvals/t-shirt2.webp";
import tshirt3 from "@/assets/images/newArirvals/t-shirt3.webp";
import tshirt4 from "@/assets/images/newArirvals/t-shirt4.webp";

import shirt from "@/assets/images/category/shirt.webp";
import tShirt from "@/assets/images/category/t-shirt.webp";
import jeans from "@/assets/images/category/jeans.webp";
import tShirts from "@/assets/images/category/t-shirts.webp";

import editorialBanner from "@/assets/images/editorial/editorialBanner.webp";
import product1 from "@/assets/images/editorial/product1.webp";
import product2 from "@/assets/images/editorial/product2.webp";
import product3 from "@/assets/images/editorial/product3.webp";
import product4 from "@/assets/images/editorial/product4.webp";

export const categories = [
  {
    id: 1,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt,
  },
  {
    id: 2,
    name: "T-Shirts",
    slug: "t-shirts",
    image_url: tShirt,
  },
  {
    id: 3,
    name: "Jeans",
    slug: "jeans",
    image_url: jeans,
  },
  {
    id: 4,
    name: "Shirts",
    slug: "shirts",
    image_url: tShirts,
  },
];

export const newArrivals = [
  {
    id: 1,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt1,
  },
  {
    id: 2,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt2,
  },
  {
    id: 3,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt3,
  },
  {
    id: 4,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt4,
  },
  {
    id: 5,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt5,
  },
  {
    id: 6,
    name: "Shirts",
    slug: "shirts",
    image_url: shirt6,
  },

  {
    id: 9,
    name: "t-shirts",
    slug: "t-shirts",
    image_url: tshirt1,
  },
  {
    id: 11,
    name: "t-shirts",
    slug: "t-shirts",
    image_url: tshirt2,
  },
  {
    id: 12,
    name: "t-shirts",
    slug: "t-shirts",
    image_url: tshirt3,
  },
  {
    id: 13,
    name: "t-shirts",
    slug: "t-shirts",
    image_url: tshirt4,
  },
];

export const editorialCollections = {
  campaign: {
    season: "SS26",
    headline: "The Language of the Street",
    description: `Finding confidence in quiet moments, we explore the rhythm of
            everyday life. How the Streets Speak reflects a wardrobe shaped by
            simplicity, movement, and timeless essentials.`,
    image_url: editorialBanner,
    slug: "ss26",
  },

  featuredProducts: [
    {
      id: 1,
      name: "Relaxed Linen Shirt",
      slug: "relaxed-linen-shirt",
      image_url: product1,
      price: 1299,
    },
    {
      id: 2,
      name: "Oversized T-Shirt",
      slug: "oversized-t-shirt",
      image_url: product2,
      price: 799,
    },
    {
      id: 3,
      name: "Wide Leg Pants",
      slug: "wide-leg-pants",
      image_url: product3,
      price: 1499,
    },
    {
      id: 4,
      name: "Cotton Polo",
      slug: "cotton-polo",
      image_url: product4,
      price: 999,
    },
  ],
};
