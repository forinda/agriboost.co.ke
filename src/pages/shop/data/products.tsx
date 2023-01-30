type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  link?: string;
  category: string;
  description: string;
  rating: number;
  currency?: string;
  company?: string;
  discount?: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Simple Product airpods",
    price: 999,
    company:'Apple',
    image:
      "https://i.pinimg.com/736x/fe/36/4c/fe364ccffc5c0a02d137d20951871ee6.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Accessories",
    description: "",
    rating: 4.5,
    currency: "$",
  },
  {
    id: 2,
    name: "Lenovo Yoga 920 13.9-inch Laptop",
    price: 1233,
    company:'Lenovo',
    image:
      "https://i.pinimg.com/564x/4a/b0/97/4ab097b254d526a0bad296d7c122d11f.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Computers & Laptops",
    description: "",
    rating: 4.5,
    currency: "$",
    discount: 10,
  },
  {
    id: 3,
    name: "JBL Flip 5 Portable Bluetooth Speaker",
    price: 999,
    company:'JBL',
    image:
      "https://i.pinimg.com/564x/8d/12/a3/8d12a31feceda88e5e2ed0e4fa81ae4f.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Mobile & Tablets",
    description: "",
    rating: 4.5,
    currency: "$",
  },
  {
    id: 4,
    name: "Samsung Tv Ultra",
    price: 999,
    company:'Samsung',
    image:
      "https://i.pinimg.com/564x/e6/e7/2a/e6e72a8bb0592726ae95653bb1a57f3c.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Mobile & Tablets",
    description: "",
    rating: 4.5,
    currency: "$",
  },
  {
    id: 5,
    name: "Level S Monitor Screen",
    price: 999,
    company:'Apple',
    image:
      "https://i.pinimg.com/564x/96/d3/97/96d39741e3e27ce95ce7f8077cdda4fa.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Mobile & Tablets",
    description: "",
    rating: 4.5,
    currency: "$",
  },
  {
    id: 6,
    name: "Apple iPhone 12 Pro Max",
    price: 999,
    company:'Apple',
    image:
      "https://i.pinimg.com/564x/b7/a7/96/b7a7966b7d848a2f8384b7c4cef67a14.jpg",
    link: "/shop/product/apple-iphone-12-pro-max",
    category: "Mobile & Tablets",
    description: "",
    rating: 4.5,
    currency: "$",
  },
];
