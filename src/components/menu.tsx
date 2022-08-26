import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { ExpandCircleDown, Groups, Home, Newspaper, Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EMenu } from '../const/menu';
import { ERoutsName } from '../const/routsName';

export default function Menu() {
    const [pageName, setPageName] = useState<string>(EMenu.Home);
    const navigate = useNavigate();
    return (
        <div style={{width: '100%'}}>
          <h2 style={{textAlign: 'left', marginLeft: 15}}>{pageName}</h2>
          <p style={{textAlign: 'left', marginLeft: 15}}>Menu</p>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.Home) }}>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Home}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Todos); setPageName(EMenu.Notifications) }}>
            <ListItemIcon>
              <Notifications fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Notifications}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Users); setPageName(EMenu.Groups) }}>
            <ListItemIcon >
              <Groups fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Groups}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.Search) }}>
            <ListItemIcon>
              <Search fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Search}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.News) }}>
            <ListItemIcon>
              <Newspaper fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.News}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.More) }}>
            <ListItemIcon>
              <ExpandCircleDown fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.More}
            </Typography>
          </MenuItem>
          <p style={{textAlign: 'left', marginLeft: 15}}>About</p>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.Help) }}>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Help}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.Settings) }}>
            <ListItemIcon>
              <Notifications fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.Settings}
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => { navigate(ERoutsName.Home); setPageName(EMenu.LogOut) }}>
            <ListItemIcon >
              <Groups fontSize="small" />
            </ListItemIcon>
            <Typography>
                {EMenu.LogOut}
            </Typography>
          </MenuItem>
        </div>
    );
  }
  