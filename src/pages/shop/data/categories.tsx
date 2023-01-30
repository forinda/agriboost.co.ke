type ProductCategory = {
  id: number;
  name: string;
  items: number;
  image: string;
  link?: string;
};

export const categories: ProductCategory[] = [
  {
    id: 1,
    name: "Computers & Laptops",
    items: 12,
    image:
      "https://i.pinimg.com/564x/6b/5d/8b/6b5d8b20e4e0d953801676bca9ff07df.jpg",
    link: "/shop/category/computers-laptops",
  },
  {
    id: 2,
    name: "Cameras & Photography",
    items: 8,
    image:"https://i.pinimg.com/564x/a5/93/65/a59365084e9aed6548b3813e15c27fc1.jpg",
    link: "/shop/category/cameras-photography",
  },
  {
    id: 3,
    name: "Smart Televisions",
    items: 4,
    image:
      "https://i.pinimg.com/564x/29/5f/d4/295fd409a547ac5e9aabfce24bfdf721.jpg",
    link: "/shop/category/smart-televisions",
  },
  {
    id: 4,
    name: "Smart watches",
    items: 6,
    image:
      "https://i.pinimg.com/564x/4a/c7/7f/4ac77f6090e390e76eb5f9c2743dd1b9.jpg",
    link: "/shop/category/smart-watches",
  },
  {
    id: 5,
    name: "Music & Gaming",
    items: 10,
    image:
      "https://i.pinimg.com/564x/6f/c5/7e/6fc57e00bea096773cf4401520ecae64.jpg",
    link: "/shop/category/music-gaming",
  },
  {
    id: 6,
    name: "Mobile & Tablets",
    items: 8,
    image:
      "https://i.pinimg.com/564x/3b/35/42/3b354202d1ca5eb1c7c30525ae4680f5.jpg",
    link: "/shop/category/mobile-tablets",
  },
  {
    id: 7,
    name: "Headphones",
    items: 4,
    image:
      "https://i.pinimg.com/564x/aa/84/cc/aa84cc48fce7cb0672d611ea630622fa.jpg",
    link: "/shop/category/headphones",
  },
  {
    id: 8,
    name: "Accessories",
    items: 6,
    image:
      "https://i.pinimg.com/564x/3d/0a/ca/3d0aca9492e8a46f246d89889fb74b62.jpg",
    link: "/shop/category/accessories",
  },
  {
    id: 9,
    name: "Portable Speakers",
    items: 10,
    image:
      "https://i.pinimg.com/564x/30/8c/8d/308c8d7f01b0153d6d1062388675f469.jpg",
    link: "/shop/category/portable-speakers",
  },
  {
    id: 10,
    name: "Home Appliances",
    items: 10,
    image:
      "https://i.pinimg.com/564x/d9/76/c6/d976c675181bf91b6eaafa1c89a8ad91.jpg",
    link: "/shop/category/home-appliances",
  },
];
