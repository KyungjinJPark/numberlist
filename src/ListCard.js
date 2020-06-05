import React, { useState } from "react";

import { Toolbar, List, ListItem, Checkbox, IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import { unfold } from "ramda";

import "./ListCard.css";
import TopBar from "./TopBar";

const ListCard = () => {
  const [items, setItems] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );
  const [selected, setSelected] = useState([]);

  const handleCheck = item => {
    setSelected(prevSelects => {
      const i = prevSelects.indexOf(item);
      // if item is not already selected
      if (i === -1) {
        // add item
        return [...prevSelects, item];
      } else {
        // remove item
        prevSelects[i] = prevSelects[prevSelects.length - 1];
        prevSelects.pop();
      }
      return [...prevSelects];
    });
  };

  const clearItem = toClear => {
    setItems(prevItems => {
      return prevItems.filter(item => toClear !== item);
    })
    setSelected(prevSelects => {
      return prevSelects.filter(item => toClear !== item);
    })
  }

  return (
    <div>
      <TopBar />
      <Toolbar />
      <List>
        {items.map(item => (
          <ListItem key={item} divider>
            <Checkbox
              checked={selected.includes(item)}
              onChange={() => handleCheck(item)}
              color="primary"/>
            <span style={{flex: 1}}>{item}</span>
            <IconButton>
                <ClearIcon onClick={() => clearItem(item)} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListCard;
