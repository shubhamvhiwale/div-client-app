interface HeaderProps {
  title: string;
  value: string | string[];
  type: string;
  style?: string;
}

const headerData: HeaderProps[] = [
  {
    title: "Our Bank",
    value: "/#",
    type: "link",
  },
  {
    title: "Investment Research",
    value: "/#",
    type: "link",
  },
  {
    title: "Other Products",
    value: "/#",
    type: "link",
  },
  {
    title: "Fanancing",
    value: "/#",
    type: "link",
  },
  {
    title: "langs",
    value: ["en", "de"],
    type: "select",
  },
  {
    title: "Log In",
    value: "",
    type: "button",
    style:
      "mr-4 bg-blue-800 text-white p-1 text-xs w-[55px] h-[25px] rounded-full",
  },
  {
    title: "Open Account",
    value: "",
    type: "button",
    style:
      "mr-4 border border-blue-800 p-1 text-blue-800 text-xs w-[100px] h-[25px] rounded-full",
  },
];

export type { HeaderProps };
export { headerData };
