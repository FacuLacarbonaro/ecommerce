import React from "react";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import AmazonLogo from "../../sass/assets/img/png/amazon-logo.png";
import { useStateValue } from "../../Context/StateProvider";



const Header = () => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={AmazonLogo} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <Link to="/" className="header__nav-link">
          <div className="header__nav-link-option">
            <span className='header__nav-link-option-lineOne'>Hello Facu</span>
            <span className='header__nav-link-option-lineTwo'>Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__nav-link">
          <div className="header__nav-link-option">
            <span className='header__nav-link-option-lineOne' >Returns</span>
            <span className='header__nav-link-option-lineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__nav-link">
          <div className="header__nav-link-option">
            <span className='header__nav-link-option-lineOne'>Your</span>
            <span className='header__nav-link-option-lineTwo'>Prime</span>
          </div>
        </Link>

        <Link className="header__nav-link" to='/checkout'>
            <div className='header__nav-link-optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__nav-link-option-lineTwo header__nav-link-optionBasket__basketCount'> {basket?.length} </span>
            </div>
        </Link>

      </div>
    </div>
  );
};

export default Header;
