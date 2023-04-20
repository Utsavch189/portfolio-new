import React from 'react'
import { Helmet } from 'react-helmet'


const BrowserTitleName = ({title}) => {
  return (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
    </>
  )
}

export default BrowserTitleName