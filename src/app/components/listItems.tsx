import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link';

export const mainListItems = (
  <React.Fragment>

    <Link href="/">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>

    <Link href="/inquiries">
      <ListItemButton>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Inquiries" />
      </ListItemButton>
    </Link>

    <Link href="/tasks">
      <ListItemButton>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItemButton>
    </Link>

    <Link href="/map">
      <ListItemButton>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Map" />
      </ListItemButton>
    </Link>

    <Link href="/leads">
      <ListItemButton>
        <ListItemIcon>
          <TravelExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Leads" />
      </ListItemButton>
    </Link>

    <Link href="/clients">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemButton>
    </Link>
    
    <Link href="/invoices">
      <ListItemButton>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItemButton>
    </Link>

    <Link href="/settings">
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Link>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>

    <ListSubheader component="div" inset>
      Saved invoices
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>

  </React.Fragment>
);
