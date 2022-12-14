import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'

export default function BasicMenu() {
	const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
		  // mx={{md: }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
		  <MenuIcon fontSize="large" color="secondary"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => router.push("/")}>Home</MenuItem>
		<MenuItem onClick={() => router.push("/ip")}>IP</MenuItem>
        <MenuItem onClick={() => router.push("/cclb")}>CCLB</MenuItem>
	    <MenuItem onClick={() => router.push("/pkg")}>PKG</MenuItem>
        <MenuItem onClick={() => router.push("/amcr")}>AMCR</MenuItem>
        <MenuItem onClick={() => router.push("/gpk")}>GPK</MenuItem>
        <MenuItem onClick={() => router.push("/son")}>SON</MenuItem>
        <MenuItem onClick={() => router.push("/see")}>SEE</MenuItem>
        <MenuItem onClick={() => router.push("/vrtv")}>VRTV</MenuItem>
        <MenuItem onClick={() => router.push("/ball")}>BALL</MenuItem>
        <MenuItem onClick={() => router.push("/ambp")}>AMBP</MenuItem>
        <MenuItem onClick={() => router.push("/gef")}>GEF</MenuItem>

      </Menu>
    </div>
  );
}
