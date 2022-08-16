
import 'react-app-polyfill/ie9';
// require('../styles/styles.less');
import '../styles/globals.scss';
import Head from 'next/head';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme.js';
import { Provider } from 'react-redux';
import store from '../components/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
	 <Provider store={store}>  
		<CacheProvider value={emotionCache}>
			<Head>
<link rel="shortcut icon" href="/D3js.ico" />
				<title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
	<ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
	</ThemeProvider>
    </CacheProvider>
	 </Provider>
  );
}

