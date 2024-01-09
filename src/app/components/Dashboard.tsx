"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Copyright from "./Copyright";
import MainStats from "./MainStats";
import ClientsTable from "./table";
import AppBarProps from "../types/AppBarProps";
import Inquiries from "./Inquiries";
import InvoicesTable from "../dashboard/invoices/InvoicesTable";
import LightDarkSwitch from "./LightDarkSwitch";

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#b466d2",
      main: "#711DB0",
      dark: "#35149c",
      contrastText: "#ddd",
    },
    secondary: {
      light: "#f26697",
      main: "#ed276a",
      dark: "#8a1754",
      contrastText: "#333",
    },
  },
});

export default function Dashboard() {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {pathname === "/" && "Welcome Fabio!"}
              {pathname === "/inquiries" && "Inquiries"}
              {pathname === "/tasks" && "Tasks"}
              {pathname === "/map" && "Map"}
              {pathname === "/leads" && "Leads"}
              {pathname === "/clients" && "Clients"}
              {pathname === "/invoices" && "Invoices"}
              {pathname === "/settings" && "Settings"}
            </Typography>

            <LightDarkSwitch />

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            <Image
              src="/logo.svg"
              className="mr-2"
              width={38}
              height={34}
              alt="logo"
              draggable="false"
            ></Image>
            Nucleo B2B
            <IconButton onClick={toggleDrawer} color="primary">
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {pathname === "/" && <MainStats />}
            {pathname === "/inquiries" && <Inquiries />}
            {pathname === "/tasks" && <h1>TEST</h1>}
            {pathname === "/map" && <h1>TEST</h1>}
            {pathname === "/leads" && <h1>TEST</h1>}
            {pathname === "/clients" && <ClientsTable />}
            {pathname === "/invoices" && <InvoicesTable />}
            {pathname === "/settings" && "SETTINGS WORKS!"}

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
