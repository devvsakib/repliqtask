import React, { useState } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import Menuitems from "./MenuItems";

const Sidebar = ({ isMobileSidebarOpen, setMenu, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const handleClick = (index) => {
    setMenu(index);
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Box p={2} height="100%">
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => (
            <List component="li" disablePadding key={item.title}>
              <ListItem
                onClick={() => handleClick(index)}
                button
                sx={{
                  mb: 1,
                  ...(location === item.href && {
                    color: "white",
                    backgroundColor: (theme) =>
                      `${theme.palette.primary.main}!important`,
                  }),
                }}
              >
                <ListItemIcon>
                  <FeatherIcon
                    style={{
                      color: `${location === item.href ? "white" : ""} `,
                    }}
                    icon={item.icon}
                    width="20"
                    height="20"
                  />
                </ListItemIcon>

                <ListItemText onClick={onSidebarClose}>
                  {item.title}
                </ListItemText>
              </ListItem>
            </List>
          ))}
        </List>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <div
        className="bg-white shadow-xl mt-10 border-red-400 border-2"
      >
        {SidebarContent}
      </div>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
