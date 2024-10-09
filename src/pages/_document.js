import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#000000' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&family=Lato&family=Raleway:wght@300;500;700&family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
        <body className='font-raleway'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
