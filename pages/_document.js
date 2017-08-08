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
              margin: auto;
              width: 800px;
            }
            .header {
              padding: 50px;
            }
            .divider {
              height: 3px;
              width: 100%;
              background: #444;
            }
            .logo {
              width: 380px;
              float: left;
            }
            .contact_details {
              float: right;
              width: 380px;
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
              <h1>Me Capture You</h1>
              <div>Lifestyle Pay Nothing Polish Photograper</div>
              <div>Based in Abbotsford</div>
              <div>hello@mecaptureyou.com</div>
            </div>
            <div style={{ clear: 'both' }} />
          </div>
          <div className="divider" />
          <div className="slide">
            <img className="slide1" src="/static/mecapu04.jpg" />
          </div>
          <div>asdasdasdasd</div>
          <div id="scene">
            <div data-depth="0.00">
              <img src="/static/mecapu04.jpg" />
            </div>
            <div data-depth="0.20">
              <img src="/static/mecapu03.jpg" />
            </div>
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
