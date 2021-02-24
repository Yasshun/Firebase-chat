import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'; 


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
              <Avatar />
              <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="検索する" type="text"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>

        
    )
}

export default Header
