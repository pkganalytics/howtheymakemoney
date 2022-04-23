import React from 'react'
import Router from 'next/router'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router'
import MaterialMenu from './materialMenu';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
		flexContainer: {
			justifyContent : "space-around"
						},
		bigMenu: {
			[theme.breakpoints.down('md')]:
			{display: "none"}
	},
		smallMenu: {
		[theme.breakpoints.up('md')]: {
			display: "none"}
			},
	title: {
	color: "white",
	display: "block",
	fontSize: 45,
	marginLeft: 50
}


}));


const indexToTabName= {
	home: 0,
	barCharts: 1,
	lineCharts: 2,
	scatterPlots: 3,
	pieCharts: 4,
	geoMaps: 5,
	contactus: 6
}


const tabNametoIndex = {
	0: "/",
	1: "/barCharts",
	2: "/lineCharts",
	3: "/scatterPlots",
	4: "/pieCharts",
	5: "/geoMaps",
	6: "/contactus"
}

const MyMenu = () => {

  const classes = useStyles();
  const router = useRouter();
	const handleChange = (event, index) => {
		router.replace(tabNametoIndex[index]);
	};

    return (
      <AppBar position='static'>
		  <Typography
			className={classes.title}>
			  Dynamic D3 
			</Typography>
		  <div className="smallMenu">
		  <MaterialMenu />
		  </div>
		  <Tabs
		className={classes.bigMenu}
		classes={{ flexContainer: classes.flexContainer }}
		textColor="inherit"
		value={indexToTabName[router.pathname.substring(1)] || 0}
		onChange={handleChange}
		// className={classes.tabs}
				indicatorColor='secondary'>
            <Tab label='Home'  />
		    <Tab label='Bar Charts' />
            <Tab label='Line Charts' />
            <Tab label='Scatter Plots' />
            <Tab label='Pie Charts' />
            <Tab label='GeoMaps' />
            <Tab label='Contact Us' />
        </Tabs>
	</AppBar>
    )
}

export default MyMenu;
