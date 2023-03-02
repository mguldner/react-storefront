import React from "react";

import { useMainMenuQuery } from "@/saleor/api";

import { useRegions } from "../RegionsProvider";
import DropdownMenu from "./DropdownMenu";
import styles from "./Navbar.module.css";

export function Menu() {
  const { query } = useRegions();

  const { error, data } = useMainMenuQuery({
    variables: { ...query },
  });

  if (error) {
    console.error("Navbar/Menu component error", error.message);
  }

  const sampleMenu = [
    {
      id: 1,
      name: "Principal",
      children: [
        {
          id: 11,
          name: "Test",
          children: [
            {
              id: 111,
              name: "Test1",
            },
            {
              id: 112,
              name: "Test2",
            },
            {
              id: 113,
              name: "Test3",
            },
          ],
        },
        {
          id: 12,
          name: "Essai",
          children: [
            {
              id: 121,
              name: "Essai1",
            },
            {
              id: 122,
              name: "Essai2",
            },
            {
              id: 123,
              name: "Essai3",
            },
          ],
        },
      ],
    },
  ];

  const menuItems = data?.menu?.items || sampleMenu;

  return (
    <nav className={styles.nav}>
      <ol>
        {menuItems.map((item) => (
          <li key={item?.id}>
            <DropdownMenu key={item?.id} menuItem={item} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Menu;
