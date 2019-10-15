import React from "react";
import { useColorMode, css } from "theme-ui";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";

/** @jsx jsx */
import { jsx } from "theme-ui";

const ToogleMode = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  const nigthMode = (
    <img
      alt="moon indicating dark mode"
      src={moon}
      width="20"
      height="20"
      role="presentation"
      style={{
        pointerEvents: `none`,
        margin: 4
      }}
    />
  );

  const dayMode = (
    <img
      alt="sun indicating light mode"
      src={sun}
      width="20"
      height="20"
      role="presentation"
      style={{
        pointerEvents: `none`,
        margin: 4
      }}
    />
  );

   
  //quick, but not the best way to get the button in the right color
  //I need to check if theme-ui as a Styled.button or something like that
  let color = `#eee`; 
  if (isDark) {
    color = `#282c35`
  }

  return (
    <button
      onClick={toggleColorMode}
      sx={{
        bg: color,
        cursor: `pointer`,
        border: `none`,
        outline: `none`
      }}
      title="Toggle Dark Mode"
    >
      {" "}
      {isDark ? <div>{nigthMode}</div> : <div>{dayMode}</div>}
    </button>
  );
};

export default ToogleMode;
