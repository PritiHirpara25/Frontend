import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartDataLength = useSelector((state) => state.cart)
  const wishlistDataLength = useSelector((state) => state.wishlist)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <div className="flex items-center justify-around">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Button color="inherit">
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/shop">Shop</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/profile">Profile</NavLink>
            </Button>
            {/* <Button color="inherit">
              <NavLink to="/cart">Cart<FaShoppingCart/></NavLink>
          </Button> */}
            {/* <Button color="inherit">
              <NavLink to="/wishlist">Wishlist</NavLink>
          </Button> */}
            <Button color="inherit">
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Toolbar>
          <div className="flex gap-8">
            <div>
              <NavLink to="/cart" className="relative">
                <FaShoppingCart />
                <span className="absolute top-[-10px] right-[-8px] bg-red-600 rounded-full h-4 w-4 text-xs flex justify-center items-center border  border-white">
                  {cartDataLength.length}
                </span>
              </NavLink>
            </div>
            <div>
            <NavLink to="/wishlist" className="relative">
                <FaHeart />
                <span className="absolute top-[-10px] right-[-8px] bg-red-600 rounded-full h-4 w-4 text-xs flex justify-center items-center border  border-white">
                  {wishlistDataLength.length}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </AppBar>
    </Box>
  );
};

export default Navbar;