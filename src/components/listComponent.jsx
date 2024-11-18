// material ui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

// context
import { ExpenseTrackerContext } from "../context/context";

// react icons
import { HiOutlineCash } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";

export const ListComponent = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  // console.log(transactions)

  const handleDeleteTransaction = (id) => {
    deleteTransaction(id);
  };

  return (
    <>
      <List>
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            secondaryAction={
              <MdDelete
                onClick={() => handleDeleteTransaction(transaction.id)}
                style={{ fontSize: "20px" }}
              />
            }
          >
            <ListItemAvatar>
              <HiOutlineCash
                style={{
                  fontSize: "25px",
                  color: transaction.type == "income" ? "green" : "red",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              style={{ textTransform: "capitalize" }}
              primary={`${transaction.category}`}
              secondary={`$${transaction.amount} | ${transaction.date}`}
            />
          </ListItem>
        ))}
        {/* <ListItem  secondaryAction={
                    <MdDelete style={{fontSize:"20px"}} />
                  }>
          <ListItemAvatar>
           
              <HiOutlineCash style={{fontSize:"25px", color:"red"}} />
          </ListItemAvatar>
          <ListItemText primary="Hello world" secondary="e" />
         
        </ListItem> */}
      </List>
    </>
  );
};
