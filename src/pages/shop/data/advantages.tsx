import { BiCreditCard } from "react-icons/bi";
import { TbFileDollar, TbTable } from "react-icons/tb";
import { TiTime } from "react-icons/ti";

type Advantage = {
  title: string;
  description: string;
  Icon: typeof TbTable;
};

export const advantages: Array<Advantage> = [
  {
    title: "Free Shipping",
    description: "Free shipping on all orders over $100",
    Icon: TbTable,
  },
  {
    title: "Daily surprise offers",
    description: "Get daily surprise offers on all products",
    Icon: TbTable,
  },
  {
    title: "Support 24/7",
    description: "We support 24/7 for all customers",
    Icon: TiTime,
  },
  {
    title: "Affordable prices",
    description: "We offer affordable prices for all our products",
    Icon: TbFileDollar,
  },
  {
    title: "Secure payment",
    description: "We offer secure payment for all our customers",
    Icon: BiCreditCard,
  },
];
