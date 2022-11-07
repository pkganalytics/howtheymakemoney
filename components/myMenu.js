import React from 'react'
import Router from 'next/router'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router'
import MaterialMenu from './materialMenu';
import Typography from '@mui/material/Typography';



const indexToTabName= {
	home: 0,
	wrk: 1,
}


const tabNametoIndex = {
	0: "/",
	1: "/wrk",
}

const MyMenu = () => {

  const router = useRouter();
	const handleChange = (event, index) => {
		router.replace(tabNametoIndex[index]);
	};

    return (
      <AppBar position='static'>
		  <Typography sx={{color: "white", display: "block", fontSize: 45, marginLeft: 20}}>
			 PKG Analytics
		</Typography>
		  <div className="smallMenu">
		   <MaterialMenu />
		  </div>
		  <Tabs
		textColor="inherit"
		value={indexToTabName[router.pathname.substring(1)] || 0}
		onChange={handleChange}
		indicatorColor='secondary'>
            <Tab label='Home' sx={{width: 1/7}} />
			<Tab label='WRK' sx={{width: 1/7}} />
        </Tabs>
	</AppBar>
    )
}

export default MyMenu;
