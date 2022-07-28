import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";
import NexLink from "next/link";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <WidgetsOutlinedIcon />
        </IconButton>
        <NexLink href="/" passHref>
          <Link underline="none" color='white'>
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        </NexLink>
      </Toolbar>
    </AppBar>
  );
};
