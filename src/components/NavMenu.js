import React from "react";
import ToogleMode from './ToogleMode'

/** @jsx jsx */
import { Styled , jsx} from 'theme-ui'

class NavMenu extends React.Component {

  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => { 
    if (window.scrollY > 30 ) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }
  
  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props

    

    let shadow = `none`;
    if( scrolled === true ) { 
      shadow = `1px 2px 10px rgba(0, 0, 0, 0.4)`
    }

    return (
      <nav>
        <Styled
          sx={{
            position: `fixed`,
            width: "100%",
            top: 0,
            left: 0,
            height: `60px`,
            backgroundColor: `background`,
            boxShadow: shadow,
            m: `auto`,
          }}
        >
          <div
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              maxWidth: `container`,
              m: "auto",
              mt: `18px`,
              px: 2
            }}
          >
            <div>LOGO HERE</div>
            <ToogleMode />
          </div>
        </Styled>
      </nav>
    );
  }
}

export default NavMenu;
