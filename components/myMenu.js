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
	simple: 1,
	time: 2,
	color: 3,
	intermediate: 4
}


const tabNametoIndex = {
	0: "/",
	1: "/simple",
	2: "/time",
	3: "/color",
	4: "/intermediate"
}

const MyMenu = () => {

  const router = useRouter();
	const handleChange = (event, index) => {
		router.replace(tabNametoIndex[index]);
	};

    return (
      <AppBar position='static'>
		  <Typography sx={{color: "white", display: "block", fontSize: 45, marginLeft: 20}}>
			  D3 Sankey
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
            <Tab label='Simple Sankey' sx={{width: 1/7}} />
			<Tab label='Changes over Time' sx={{width: 1/7}} />
            <Tab label='Using Color' sx={{width: 1/7}} />
			<Tab label="Intermediate Nodes" sx={{width: 1/7}} />
        </Tabs>
	</AppBar>
    )
}

export default MyMenu;
