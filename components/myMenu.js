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
	barCharts: 1,
	lineCharts: 2,
	scatterPlots: 3,
	pieCharts: 4,
	sankey: 5,
	geoMaps: 6,
	contactus: 7
}


const tabNametoIndex = {
	0: "/",
	1: "/barCharts",
	2: "/lineCharts",
	3: "/scatterPlots",
	4: "/pieCharts",
	5: "/sankey",
	6: "/geoMaps",
	7: "/contactUs"
}

const MyMenu = () => {

  const router = useRouter();
	const handleChange = (event, index) => {
		router.replace(tabNametoIndex[index]);
	};

    return (
      <AppBar position='static'>
		  <Typography sx={{color: "white", display: "block", fontSize: 45, marginLeft: 20}}>
			  Dynamic D3
		</Typography>
		  <div className="smallMenu">
		   <MaterialMenu />
		  </div>
		  <Tabs
		textColor="inherit"
		value={indexToTabName[router.pathname.substring(1)] || 0}
		onChange={handleChange}
		indicatorColor='secondary'>
            <Tab label='Home'  />
			<Tab label='Bar Charts' sx={{width: 1/7}} />
            <Tab label='Line Charts' sx={{width: 1/7}} />
            <Tab label='Scatter Plots' sx={{width: 1/7}} />
            <Tab label='Pie Charts' sx={{width: 1/7}} />
			<Tab label="Sankey Diagrams" sx={{width: 1/7}} />
            <Tab label='GeoMaps' sx={{width: 1/7}} />
            <Tab label='Contact Us' sx={{width: 1/7}} />
        </Tabs>
	</AppBar>
    )
}

export default MyMenu;
