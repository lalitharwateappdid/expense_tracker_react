// materail ui
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// component
import { ListComponent } from "./listComponent";

export const Form = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ md: 12 }}>
          <Typography title="..." />
        </Grid>

        {/* type select field */}
        <Grid size={{ md: 6, xs:12 }}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select label="Type">
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* category select field */}
        <Grid size={{md: 6, xs: 12}}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="Category">
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        {/* amount text field */}
        <Grid size={{md: 6, xs:12}}>
            <FormControl fullWidth>
                <TextField type="number" label="Amount" fullWidth />
            </FormControl>
        </Grid>

        {/* date text field */}
        <Grid size={{md: 6, xs: 12}}>
            <FormControl fullWidth>
                <TextField type="date" label="Date" fullWidth/>
            </FormControl>
        </Grid>

        <Button variant="outlined"  color="primary">Submit</Button>

      </Grid>
    <Grid >
    
        <ListComponent/>
        </Grid>
    </>
  );
};
