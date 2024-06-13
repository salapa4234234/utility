import React ,{useState}from 'react';
import Layout from '../../components/common/Layout';
import "./loanCalculator.css";
const LoanCalculator = () => {
    const [forms, setForms] = useState({
        loan: "",
        rate: "" ,// Fixed typo here
        years:""
      });
      const [values,setValues] = useState({});
      const handleChange = (e) => {
        setForms({
          ...forms,
          [e.target.name]: e.target.value
        });
      };
    
      const calculateCdRatio = (e) => {
        e.preventDefault();
        const { loan, rate,years } = forms;
        const loanValue = parseFloat(loan.replace(/,/g, ''));
        const rateValue = parseFloat(rate.replace(/,/g, ''));
        const yearsValue = parseFloat(years.replace(/,/g, ''));
        
        if (!isNaN(loanValue) && !isNaN(rateValue) && rateValue !== 0) {
          const monthlyInterestRate = (rateValue / 100) / 12;
          const numberOfPayments = yearsValue * 12;
         // Calculate monthly payment
          const monthlyPayment = loanValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

         // Calculate total payment
          const totalPayment = monthlyPayment * numberOfPayments;
         
         // Calculate total interest
          const totalInterest = totalPayment - loanValue;
          setValues({
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
          })
        } else {
          setCd(0); // Reset if input is invalid
        }
      };
      console.log("values",values)
  return (
    <div className='calculator-section'>
      <Layout>
        <div className="calculator-wraper">
        <h4>Loan Calculator</h4>
          <form action="" onSubmit={calculateCdRatio}>
            <div className="form-group">
              <label htmlFor="amount">Loan Amount</label>
              <input type="text" className="form-control" id="amount" placeholder=" " name='loan'  onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Rate%</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='rate' onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Years</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='years' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          <div className="description">
          <span>Monthly payment : {values?.monthlyPayment}</span>
          <span>Total payment : {values?.totalPayment}</span>
          <span>Total Interest : {values?.totalInterest}</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LoanCalculator