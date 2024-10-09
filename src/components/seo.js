import React from 'react'
import Head from 'next/head'

const Headtags = ({ title, desc, keywords }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />
      <link rel='icon' sizes='16x16' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={desc} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta
        property='og:image'
        content='https://res.cloudinary.com/martmal/image/upload/v1696333445/header_tqbldu.jpg'
      />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={desc} />
      <meta
        property='twitter:image'
        content='https://res.cloudinary.com/martmal/image/upload/v1696333445/header_tqbldu.jpg'
      />
    </Head>
  )
}

export default Headtags
