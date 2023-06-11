import React, { MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {menuId} from '../utils/menuId'


type RenderMenuProps = {
    anchorEl:null | HTMLElement, 
    isMenuOpen: boolean,
    handleMenuClose:(event : MouseEvent<HTMLElement>) => void
}

const RenderMenu = ({ anchorEl, isMenuOpen, handleMenuClose }:RenderMenuProps) => {
  
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );
};

export default RenderMenu;
