import React from 'react'
import Head from 'next/head'
import { StyletronProvider } from 'styletron-react'
import getStyletron from '../lib/styletron'
import Link from 'next/link'
import Header from './header';
const NAME = 'Page';

export default ({ children }) => {
  return <StyletronProvider styletron={getStyletron()}>
    <div>
      <Header />
      { children }
    </div>
  </StyletronProvider>
}
