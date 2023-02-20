import React from 'react';
import '../styles/style.scss'
import Navbar from '../components/navbar'


export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

    return (
        <>
            <Navbar/>

            <Component {...pageProps} />
        </>
    )
}
