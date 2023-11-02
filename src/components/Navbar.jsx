import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: "Shop",
  },
  {
    key: "2",
    label: "Laptops",
  },
  {
    key: "3",
    label: "Smartphones",
  },
  {
    key: "4",
    label: "Furniture",
  },
  {
    key: "5",
    label: "Sunglasses",
  },
];

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("Shop");
  const { fetchProducts } = useAxios();

  const handleClick = async (category) => {
    setActiveCategory(category);
    if (category === "Shop") {
      fetchProducts(`/products?limit=6`);
    } else {
      fetchProducts(`/products/category/${category}`);
    }
  };

  return (
    <header className="shadow-lg">
      <nav className="flex justify-between items-center space-x-4 px-4 py-3 bg-white">
        <div className="font-semibold text-3xl logo">Store</div>
        <ul className="md:flex items-center space-x-4 font-light hidden">
          {items.map(({ label, key }) => {
            let active = label === activeCategory;
            return (
              <div key={key} className="cursor-pointer text-sm h-full">
                <li
                  className={
                    active
                      ? "underline underline-offset-4 decoration-2 font-semibold"
                      : ""
                  }
                  onClick={() => handleClick(label)}
                >
                  {label}
                </li>
              </div>
            );
          })}
        </ul>
        <div className="md:hidden text-sm cursor-pointer">
          <Dropdown
            menu={{
              items,
              onClick: (item) => {
                const category = items[item.key - 1].label;
                handleClick(category);
              },
            }}
            trigger={["click"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Dropdown>
        </div>
        <div className="hidden md:flex"></div>
      </nav>
    </header>
  );
};

export default Navbar;
