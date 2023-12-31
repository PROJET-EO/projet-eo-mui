import React, {MouseEvent} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { heiColor } from '@/common/ui/heiColor';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mobileMenuId } from '../utils/menuId'

type RenderMobileMenuProps = {
    mobileMoreAnchorEl:null | HTMLElement,
    isMobileMenuOpen:boolean,
    handleMobileMenuClose:() => void,
    handleProfileMenuOpen:(event: MouseEvent<HTMLElement>)=>void
}

const RenderMobileMenu = ({mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen  }:RenderMobileMenuProps) => {
    return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon sx={{ color:heiColor.yellow }} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon sx={{ color:heiColor.yellow }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{ color:heiColor.yellow }} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}

export default RenderMobileMenu;