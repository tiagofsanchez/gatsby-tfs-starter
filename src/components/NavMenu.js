import React from "react";
import { useColorMode } from 'theme-ui'


const NavMenu = () => {
 
    const [colorMode, setColorMode] = useColorMode()    
    
    return (
      <header>
        <button
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </header>
    )

};

export default NavMenu;
