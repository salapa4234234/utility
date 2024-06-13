import React from 'react'
import Layout from '../../components/common/Layout';
import "./cdRatio.css"
import calculator1 from "../../assets/calculator1.png"
import calculator2 from "../../assets/calculator2.png";
import calculator3 from "../../assets/calculator3.png";
import calculator4 from "../../assets/calculator4.png";
import calculator5 from "../../assets/calculator5.png";
import { Link } from 'react-router-dom';

const CdRatio = () => {
  return (
    <div className='main-section'>
<Layout>
<div className="grid-section">
        <Link to="/cd-ratio" className="grid-item"><img src={calculator1} alt="" /><div className='grid-title'>Cd Ratio</div></Link>
        <Link to="/npl-calculator" className="grid-item"><img src={calculator2} alt="" /><div className='grid-title'>NPL Calculator</div></Link>
        <Link to="/fdcalculator" className="grid-item"><img src={calculator3} alt="" /><div className='grid-title'>Fd Calculator</div></Link>
        <Link to="/loancalculator" className="grid-item"><img src={calculator4} alt="" /><div className='grid-title'>Loan Calculator</div></Link>
        <div className="grid-item"><img src={calculator5} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator1} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator1} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator1} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator2} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator3} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator5} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator3} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator2} alt="" /><div className='grid-title'>Cd Ratio</div></div>
        <div className="grid-item"><img src={calculator1} alt="" /><div className='grid-title'>Cd Ratio</div></div>
      </div>
</Layout>
    
    </div>
  )
}

export default CdRatio