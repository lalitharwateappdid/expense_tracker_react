// material ui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

// react icons
import { HiOutlineCash } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export const ListComponent = () => {
  return (
    <>
      <List>
        <ListItem  secondaryAction={
                    <MdDelete style={{fontSize:"20px"}} />
                  }>
          <ListItemAvatar>
           
              <HiOutlineCash style={{fontSize:"25px", color:"green"}} />
          </ListItemAvatar>
          <ListItemText primary="Hello world" secondary="e" />
         
        </ListItem>
        <ListItem  secondaryAction={
                    <MdDelete style={{fontSize:"20px"}} />
                  }>
          <ListItemAvatar>
           
              <HiOutlineCash style={{fontSize:"25px", color:"red"}} />
          </ListItemAvatar>
          <ListItemText primary="Hello world" secondary="e" />
         
        </ListItem>
      </List>
    </>
  );
};
