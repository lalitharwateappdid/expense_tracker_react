// components
import { Details } from "./components/Details/details";
import { MainCard } from "./components/mainCard";

//material ui
import Grid from "@mui/material/Grid2";

function App() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          spacing={2}
          style={{ height: "100vh" }}
        >
          <Grid size={{ md: 4, xs: 12 }}>
            <Details  title="income" />
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}><MainCard/></Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Details title="expense" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
