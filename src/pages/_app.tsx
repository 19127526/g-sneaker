import {Provider} from 'react-redux'
import {persistor, store} from "@/app/store"
import LoadingComponent from "@/components/loading"
import {PersistGate} from "redux-persist/integration/react"
import React, {Suspense} from "react"
import Head from "next/head"
import nike from '../assets/nike.png'
import "./index.css"
import {AppPropsWithLayout} from "@/models/common";

const App = ({Component, pageProps} : AppPropsWithLayout) => {
  return (
    <>
      <Head>
        <link rel="icon" href={nike?.src}/>
        <link rel="icon" href={nike?.src} sizes="32x32"/>
        <link rel="icon" href={nike?.src} sizes="192x192"/>
        <link rel="apple-touch-icon" href={nike?.src}/>
      </Head>
      <Provider store={store}>
        <PersistGate loading={<LoadingComponent/>} persistor={persistor}>
          <Suspense fallback={<LoadingComponent/>}>\
              <Component {...pageProps} />
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App