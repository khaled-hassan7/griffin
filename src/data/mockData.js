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
import editorialproduct1 from "@/assets/images/editorial/editorialproduct1.webp";
import editorialproduct2 from "@/assets/images/editorial/editorialproduct2.webp";
import editorialproduct3 from "@/assets/images/editorial/editorialproduct3.webp";
import editorialproduct4 from "@/assets/images/editorial/editorialproduct4.webp";

import product1 from "@/assets/images/products/product1.webp";
import product2 from "@/assets/images/products/product2.webp";
import product3 from "@/assets/images/products/product3.webp";
import product4 from "@/assets/images/products/product4.webp";
import product5 from "@/assets/images/products/product5.webp";
import product6 from "@/assets/images/products/product6.webp";
import product7 from "@/assets/images/products/product7.webp";
import product8 from "@/assets/images/products/product8.webp";
import product9 from "@/assets/images/products/product9.webp";
import product10 from "@/assets/images/products/product10.webp";
import product11 from "@/assets/images/products/product11.webp";
import product12 from "@/assets/images/products/product12.webp";
import product13 from "@/assets/images/products/product13.webp";
import product14 from "@/assets/images/products/product14.webp";
import product15 from "@/assets/images/products/product15.webp";
import product16 from "@/assets/images/products/product16.webp";
import product17 from "@/assets/images/products/product17.webp";
import product18 from "@/assets/images/products/product18.webp";
import product19 from "@/assets/images/products/product19.webp";

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
      image_url: editorialproduct1,
      price: 1299,
    },
    {
      id: 2,
      name: "Oversized T-Shirt",
      slug: "oversized-t-shirt",
      image_url: editorialproduct2,
      price: 799,
    },
    {
      id: 3,
      name: "Wide Leg Pants",
      slug: "wide-leg-pants",
      image_url: editorialproduct3,
      price: 1499,
    },
    {
      id: 4,
      name: "Cotton Polo",
      slug: "cotton-polo",
      image_url: editorialproduct4,
      price: 999,
    },
  ],
};

export const products = [
  {
    id: 1,
    name: "Relaxed Number Graphic T-Shirt",
    slug: "relaxed-number-graphic-t-shirt",
    image_url: product1,
    price: 1299,
    category: "t-shirts",
    description:
      "Relaxed-fit cotton T-shirt with bold front graphic print and crew neck.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Short Sleeve Utility Shirt",
    slug: "short-sleeve-utility-shirt",
    image_url: product2,
    price: 1299,
    category: "shirts",
    description:
      "Relaxed short sleeve shirt with chest pocket and button-up front.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Textured Linen Blend Shirt",
    slug: "textured-linen-blend-shirt",
    image_url: product3,
    price: 1299,
    category: "shirts",
    description:
      "Lightweight linen-blend shirt with relaxed fit and camp collar.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Lightweight Knit Sweater",
    slug: "lightweight-knit-sweater",
    image_url: product4,
    price: 1299,
    category: "knitwear",
    description: "Fine knit long sleeve sweater made for everyday comfort.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Contrast Trim T-Shirt",
    slug: "contrast-trim-t-shirt",
    image_url: product5,
    price: 1299,
    category: "t-shirts",
    description:
      "Regular fit cotton T-shirt with contrast ribbed neckline and sleeves.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Relaxed Cotton T-Shirt",
    slug: "relaxed-cotton-t-shirt",
    image_url: product6,
    price: 1299,
    category: "t-shirts",
    description: "Relaxed fit cotton T-shirt with minimalist design.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Graphic Print Hoodie",
    slug: "graphic-print-hoodie",
    image_url: product7,
    price: 1299,
    category: "hoodies",
    description:
      "Oversized hoodie featuring front graphic print and adjustable hood.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Striped Oversized T-Shirt",
    slug: "striped-oversized-t-shirt",
    image_url: product8,
    price: 1299,
    category: "t-shirts",
    description: "Oversized striped cotton T-shirt with relaxed silhouette.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Relaxed Cotton Set T-Shirt",
    slug: "relaxed-cotton-set-t-shirt",
    image_url: product9,
    price: 1299,
    category: "t-shirts",
    description:
      "Heavyweight cotton T-shirt with relaxed fit and clean finish.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Zip-Up Hooded Sweatshirt",
    slug: "zip-up-hooded-sweatshirt",
    image_url: product10,
    price: 1299,
    category: "hoodies",
    description: "Relaxed zip-up hoodie with front pockets and soft fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "Oversized Essential T-Shirt",
    slug: "oversized-essential-t-shirt",
    image_url: product11,
    price: 1299,
    category: "t-shirts",
    description: "Oversized crew neck T-shirt crafted from soft cotton jersey.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Essential Pullover Hoodie",
    slug: "essential-pullover-hoodie",
    image_url: product12,
    price: 1299,
    category: "hoodies",
    description: "Soft cotton hoodie with relaxed fit and kangaroo pocket.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 13,
    name: "Oversized Pullover Hoodie",
    slug: "oversized-pullover-hoodie",
    image_url: product13,
    price: 1299,
    category: "hoodies",
    description: "Heavyweight oversized hoodie with clean minimal styling.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    name: "Varsity Rugby Polo Shirt",
    slug: "varsity-rugby-polo-shirt",
    image_url: product14,
    price: 1299,
    category: "polos",
    description: "Long sleeve rugby polo with striped color-block design.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "Crew Neck Sweatshirt",
    slug: "crew-neck-sweatshirt",
    image_url: product15,
    price: 1299,
    category: "sweatshirts",
    description:
      "Classic crew neck sweatshirt with relaxed fit and ribbed trims.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "Relaxed Linen Blend Shirt",
    slug: "relaxed-linen-blend-shirt",
    image_url: product16,
    price: 1299,
    category: "shirts",
    description:
      "Relaxed short sleeve shirt made from breathable linen-blend fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 17,
    name: "Oversized Striped Polo Shirt",
    slug: "oversized-striped-polo-shirt",
    image_url: product17,
    price: 1299,
    category: "polos",
    description:
      "Oversized striped polo shirt with relaxed fit and button placket.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "Essential Cotton T-Shirt",
    slug: "essential-cotton-t-shirt",
    image_url: product18,
    price: 1299,
    category: "t-shirts",
    description: "Basic cotton T-shirt with regular fit and timeless style.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "Oversized Striped T-Shirt",
    slug: "oversized-striped-t-shirt",
    image_url: product19,
    price: 1299,
    category: "t-shirts",
    description:
      "Wide oversized striped T-shirt made from soft heavyweight cotton.",
    sizes: ["S", "M", "L", "XL"],
  },
];

export const productDetaleis = {
  id: 1,
  name: "Relaxed Linen Shirt",
  slug: "relaxed-linen-shirt",
  description: `Relaxed fit short sleeve T-shirt with Williamsburg graphic and round neck. Made of cotton.

`,
  images_url: [shirt1, shirt2, shirt3, shirt4],
  price: 1299,
  category: "shirts",
  sizes: ["S", "M", "L", "XL"],
};
