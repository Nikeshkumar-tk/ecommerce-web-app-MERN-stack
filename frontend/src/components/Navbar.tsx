import { AppBar, Toolbar, Input, Select, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#1C1C1C" }}>
        <Toolbar>
          <Grid
            container
            gap={9}
            alignItems="center"
            overflow="hidden"
            height={76}
          >
            <Grid item>
              <Typography variant="h4">eZone</Typography>
            </Grid>
            <Grid item>
              <div className="flex flex-col justify-center items-center">
                <p>Hello</p>
                <div className="flex">
                  <LocationOnIcon /> <h6>select your address</h6>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="flex text-black gap-3 outline-none items-center h-full">
                <select name="category" id="category" className="rounded py-2">
                  <option value="volvo">Any</option>
                  <option value="saab">Technology</option>
                  <option value="mercedes">Medicines</option>
                  <option value="audi">Furnitures</option>
                  <option value="audi">Dresses</option>
                  <option value="audi">Furnitures</option>
                </select>
                <Input
                  placeholder="Search for anything here ..."
                  type="text"
                  sx={{ color: "white", width: "600px" }}
                />
                <SearchIcon sx={{ color: "white", cursor: "pointer" }} />
              </div>
            </Grid>
            <Grid item>
              <span className="flex">
                <Button sx={{ color: "white" }}>Login</Button>
                <Button sx={{ color: "white" }}>Sign up</Button>
              </span>
            </Grid>
            <Grid item>
              {" "}
              <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{ height: "50px", marginTop: "76px", backgroundColor: "#232f3e" }}
      >
        <Grid
          container
          gap={5}
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%", alignItems: "center" }}
        >
          <Grid item>
            <h6>All</h6>
          </Grid>
          <Grid item>
            <h6>Best sellers</h6>
          </Grid>
          <Grid item>
            <h6>Mobiles</h6>
          </Grid>
          <Grid item>
            <h6>Tablets</h6>
          </Grid>
          <Grid item>
            <h6>Laptops</h6>
          </Grid>
          <Grid item>
            <h6>Electronics</h6>
          </Grid>
          <Grid item>
            <h6>Fashion</h6>
          </Grid>
          <Grid item>
            <h6>New releases</h6>
          </Grid>
          <Grid item>
            <h6>E-pay</h6>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>Shopping made easy</Grid>
              <Divider sx={{ backgroundColor: "white" }} variant="middle" />
              <Grid item>Download the app</Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Navbar;
