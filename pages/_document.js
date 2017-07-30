import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import jsxFlush from 'styled-jsx/server'
import { flush } from '../lib/styletron'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styletron = flush()
    const jsxStyles = jsxFlush()
    const stylesheets = styletron ? styletron.getStylesheets() : []
    return { ...page, jsxStyles, stylesheets }
  }
  render () {
    return (
      <html>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>My page title</title>
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
              key={i}
            />
          ))}
          {this.props.jsxStyles}
          <style>{`
            body {
              padding: 0;
              margin: 0;
              font-family: Open Sans, sans-serif;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
