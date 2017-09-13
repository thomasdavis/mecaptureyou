import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import flush from 'styled-jsx/server';
import Parallax from 'parallax-js';
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  componentDidMount() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }
  render() {
    return (
      <html>
        <Head>
          <title>Me Capture You</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
            rel="stylesheet"
          />
          <style>{`
            body {
              padding: 0;
              margin: 0;
              font-family: Montserrat, sans-serif;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
            .container {
            }
            .header {
              text-align: center;
            }
            .divider {
              height: 3px;
              width: 100%;
              background: #444;
            }
            .logo {
              width: 420px;
              margin-top: 80px;
            }
            .contact_details {
              width: 380px;
              margin: auto;
              text-align: center;
              margin-top: 40px;
              margin-bottom: 40px;
              line-height: 23px;
              font-size: 18px;
              padding-left: 20px;
            }
            .slide1 {
              width: 100%;
            }
          `}</style>
        </Head>
        <body>
          <div className="container header">
            <img className="logo" src="/static/logo.png" />
            <div className="contact_details">
              <div>Lifestyle Photograper</div>
              <div>Based in Abbotsford</div>
              <div>hello@mecaptureyou.com</div>
              <div>041987212</div>
            </div>

            <a href=""><h3>View Gallery on Flickr</h3></a>
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
