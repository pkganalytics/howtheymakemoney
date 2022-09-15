import IndexSidePanel from '../components/index/indexSidePanel';
import IndexText from '../components/index/indexText';
import Grid from '@mui/material/Grid';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';

const Index = () => {

	return (
	<Layout>
	<Grid container>
		<Grid item container md={8} sm={12} >
			<Grid container direction="row" alignItems="left"  >
				<Grid item sx = {{mr: '1rem', mb: '1rem'}}>
	  <HelpOutlineIcon  color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h4"> Introduction </Typography>

  </Grid>
	</Grid>
		<Grid item sm={12} >
		 <IndexText />
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} >
			<IndexSidePanel />

		</Grid>
	</Grid>
	</Layout>
  );
}

export default Index;
