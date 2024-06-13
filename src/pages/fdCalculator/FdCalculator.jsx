import React ,{useState}from 'react';
import Layout from '../../components/common/Layout';
import './fdCalculator.css';

const FdCalculator = () => {
    const [forms, setForms] = useState({
        loan: "",
        rate: "" ,// Fixed typo here
        days:""
      });
      const [cd, setCd] = useState(0);
    
      const handleChange = (e) => {
        setForms({
          ...forms,
          [e.target.name]: e.target.value
        });
      };
    
      const calculateCdRatio = (e) => {
        e.preventDefault();
        const { loan, rate,days } = forms;
        const loanValue = parseFloat(loan.replace(/,/g, ''));
        const rateValue = parseFloat(rate.replace(/,/g, ''));
        const daysValue = parseFloat(days.replace(/,/g, ''));
        
        if (!isNaN(loanValue) && !isNaN(rateValue) && rateValue !== 0) {
          const time = daysValue/365;
          const cdRatio = (loanValue*time*rateValue)/100;
          setCd(cdRatio);
        } else {
          setCd(0); // Reset if input is invalid
        }
      };
  return (
    <div className='calculator-section'>
      <Layout>
        <div className="calculator-wraper">
        <h4>Fixed Deposit Calculator</h4>
          <form action="" onSubmit={calculateCdRatio}>
            <div className="form-group">
              <label htmlFor="amount">Total Amount</label>
              <input type="text" className="form-control" id="amount" placeholder=" " name='loan'  onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Rate%</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='rate' onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Days</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='days' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          <div className="total">
            <h3>Interest : {cd.toFixed(2)}</h3>
          </div>
          <div className="description">
            <div className="description">
              <h3>How is Interest Rate calculated?</h3>
              <p>
              Interest Rate = (p*t*r /100 );
              </p>
              <p>
              6 % tax will be charged for the interest rate
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default FdCalculator