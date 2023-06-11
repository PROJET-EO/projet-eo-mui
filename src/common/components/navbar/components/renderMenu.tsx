import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';
import AnchorProvider, { AnchorContext } from '../context/anchorContext';

const [anchorEl, setAnchorEl] = useContext(AnchorContext)
export const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

export const isMenuOpen = Boolean(anchorEl);
export const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

export const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

export const menuId = 'primary-search-account-menu';
const renderMenu = (
  <AnchorProvider>
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
  </AnchorProvider>
);

export default renderMenu;