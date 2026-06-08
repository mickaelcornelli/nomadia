import { Icon } from "@iconify/react";
import React from "react";

function Toggle({ onFancyClick, toggleMenu }) {
  return (
    <>
      <Icon
        icon="healthicons:ui-menu"
        widht="30"
        height="30"
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      />
    </>
  );
}

export default Toggle;
