import React from 'react'
import Layout from '../common/Layout';
import "./header.css"
import header from "../../assets/LOGO-WHITE.png"


const HeaderCompoent = () => {
  return (
    <div className='header-wrapper'>
        <Layout>
       <div className='header-logo'>
        <img src={header} alt="" />
       </div>
        </Layout>
    </div>
  )
}

export default HeaderCompoent;