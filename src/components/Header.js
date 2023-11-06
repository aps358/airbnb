import React from 'react';
import "./header.css"
import AirBnBLogo from "../assets/AirBnBLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <div className='header__container'>
      <img src={AirBnBLogo} alt='AirBnBLogo'/>
      <div className='header__center'>
      <input type='search'/>
      <SearchIcon/>
      </div>
      <div className='header__right'>
      <p>Become a host</p>
      <LanguageIcon/>
      <ArrowDropDownIcon/>
      <AccountBoxIcon/>
      </div>
    </div>
  )
}

export default Header;