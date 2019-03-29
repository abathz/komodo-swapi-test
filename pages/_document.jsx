import React from 'react'
import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
