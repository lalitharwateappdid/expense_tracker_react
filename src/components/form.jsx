import { useState,useContext } from "react";

// react-hot-toast
import toast, { Toaster } from 'react-hot-toast';


// materail ui
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// uuid
import {v4 as uuidv4} from "uuid"

// context
import { ExpenseTrackerContext } from "../context/context";

// component
import { ListComponent } from "./listComponent";

export const Form = () => {
  const {addTransaction}  = useContext(ExpenseTrackerContext)

  const initialValue = {
    amount:"",
    date:new Date(),
    type:"income",
    category:"",
    
  }
  const [formData, setFormData] = useState(initialValue)

  const handleSubmit = (event) => {
    event.preventDefault()
    const transaction = {...formData,amount:Number(formData.amount),id:uuidv4()}
    addTransaction(transaction)
    setFormData(initialValue)
    toast.success(`$${formData.amount} ${formData.type} ${formData.type == "expense" ? "deducted":"added"} in ${formData.category} category`);

  }

  return (
    <>
    <Toaster />
      <Grid container spacing={2}>
        <Grid size={{ md: 12 }}>
          <Typography title="..." />
        </Grid>

        {/* type select field */}
        <Grid size={{ md: 6, xs:12 }}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select label="Type" value={formData.type} onChange={(e) => setFormData({...formData,type: e.target.value})} >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* category select field */}
        <Grid size={{md: 6, xs: 12}}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="Category" value={formData.category} onChange={(e => setFormData({...formData, category: e.target.value }))}>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        {/* amount text field */}
        <Grid size={{md: 6, xs:12}}>
            <FormControl fullWidth>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount:e.target.value})} />
            </FormControl>
        </Grid>

        {/* date text field */}
        <Grid size={{md: 6, xs: 12}}>
            <FormControl fullWidth>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={((e) => setFormData({...formData,date:e.target.value}))} />
            </FormControl>
        </Grid>

        <Button variant="outlined" onClick={handleSubmit}   color="primary">Submit</Button>

      </Grid>
    <Grid >
          {/* list of all transactions */}
        <ListComponent/>
        </Grid>
    </>
  );
};
