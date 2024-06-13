import React ,{useState}from 'react';
import Layout from '../../components/common/Layout';
import './cdCalculator.css';

const CdCalculator = () => {
    const [forms, setForms] = useState({
        loan: "",
        deposit: "" // Fixed typo here
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
        const { loan, deposit } = forms;
        const loanValue = parseFloat(loan.replace(/,/g, ''));
        const depositValue = parseFloat(deposit.replace(/,/g, ''));
        
        if (!isNaN(loanValue) && !isNaN(depositValue) && depositValue !== 0) {
          const cdRatio = (loanValue / depositValue) * 100;
          setCd(cdRatio);
        } else {
          setCd(0); // Reset if input is invalid
        }
      };
  return (
    <div className='calculator-section'>
      <Layout>
        <div className="calculator-wraper">
          <form action="" onSubmit={calculateCdRatio}>
            <div className="form-group">
              <label htmlFor="amount">Total Loan</label>
              <input type="text" className="form-control" id="amount" placeholder=" " name='loan'  onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Total Deposit</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='deposit' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          <div className="total">
            <h3>Cd Ratio : {cd.toFixed(2)}%</h3>
          </div>
          <div className="description">
            <div className="description">
              <h3>How is Cd Ratio calculated?</h3>
              <p>
              Cd Ratio = (total loan / total deposit)*100;
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CdCalculator;
