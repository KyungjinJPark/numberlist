import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const TopBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{flex: 1}}>
          Nombres
        </Typography>
        <IconButton color="inherit">
          <SortIcon />
        </IconButton>
        <IconButton color="inherit">
          <DeleteIcon />
        </IconButton>
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;