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
	ip: 2,
	cclb: 3,
	pkg: 4,
	amcr: 5,
	gpk: 6,
	son: 7,
	see: 8,
	vrtv: 9,
	ball: 10,
	ambp: 11,
	gef: 12
}


const tabNametoIndex = {
	0: "/",
	1: "/wrk",
	2: "/ip",
	3: "/cclb",
	4: "/pkg",
	5: "/amcr",
	6: "/gpk",
	7: "/son",
	8: "/see",
	9: "/vrtv",
	10: "/ball",
	11: "/ambp",
	12: "/gef"
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
            <Tab label='Home' sx={{width: 1/14}} />
			<Tab label='WRK' sx={{width: 1/14}} />
			<Tab label='IP' sx={{width: 1/14}} />
			<Tab label='CCL.B' sx={{width: 1/14}} />
			<Tab label='PKG' sx={{width: 1/14}} />
			<Tab label='AMCR' sx={{width: 1/14}} />
			<Tab label='GPK' sx={{width: 1/14}} />
			<Tab label='SON' sx={{width: 1/14}} />
			<Tab label='SEE' sx={{width: 1/14}} />
			<Tab label='VRTV' sx={{width: 1/14}} />
			<Tab label='BALL' sx={{width: 1/14}} />
			<Tab label='AMBP' sx={{width: 1/14}} />
			<Tab label='GEF' sx={{width: 1/14}} />
        </Tabs>
	</AppBar>
    )
}

export default MyMenu;
