import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DrawerHeader } from './components/DrawerHeader';
import { drawerWidth } from './utils/drawerWith';
import { heiColor } from '@/common/ui/heiColor';



type SideBarProps = {
    open:boolean,
    setOpen:(e:boolean) => void
}


const SideBar = ({open, setOpen}:SideBarProps) => {
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return ( 
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor:heiColor.blue
            }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader sx={{ backgroundColor:heiColor.blue }} >
                <IconButton onClick={handleDrawerClose} sx={{ color:heiColor.yellow }} >
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider sx={{ backgroundColor:heiColor.yellow }} />
            <List sx={{
            backgroundColor:heiColor.blue}}>
            {['New Project', 'Projects', 'Theme', 'Event'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ color:heiColor.yellow }} >
                <ListItemButton>
                    <ListItemIcon sx={{ color:heiColor.yellow }} >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider sx={{ backgroundColor:heiColor.yellow }} />
            <List sx={{ backgroundColor:heiColor.blue }} >
            {['Daily Challenge', 'LeaderBoard'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ color:heiColor.yellow }} >
                <ListItemButton >
                    <ListItemIcon sx={{ color:heiColor.yellow }} >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
}

export default SideBar