import {
  TfiFacebook,
  TfiInstagram,
  TfiTwitter,
  TfiPinterest,
  TfiYoutube,
} from "react-icons/tfi";

type Social = {
  name: string;
  Icon: typeof TfiFacebook;
  link?: string;
};
type Poilicy = {
  name: string;
  link?: string;
};

export const footerSocials: Array<Social> = [
  {
    name: "facebook",
    Icon: TfiFacebook,
    link: "https://www.facebook.com/agriboost.co.ke",
  },
  {
    name: "instagram",
    Icon: TfiInstagram,
    link: "https://www.instagram.com/agriboost.co.ke",
  },
  {
    name: "twitter",
    Icon: TfiTwitter,
    link: "https://www.twitter.com/agriboost.co.ke",
  },
  {
    name: "pinterest",
    Icon: TfiPinterest,
    link: "https://www.pinterest.com/agriboost.co.ke",
  },
  {
    name: "youtube",
    Icon: TfiYoutube,
    link: "https://www.youtube.com/agriboost.co.ke",
  },
];

export const footerPolicies: Array<Poilicy> = [
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Refund Policy",
    link: "/refund-policy",
  },
  {
    name: "Shipping Policy",
    link: "/shipping-policy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];
