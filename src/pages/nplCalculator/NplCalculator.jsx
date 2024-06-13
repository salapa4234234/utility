import React ,{useState}from 'react';
import Layout from '../../components/common/Layout';
import "./nplCalculator.css";
const NplCalculator = () => {
    const [forms, setForms] = useState({
        loan: "",
        npl: "" // Fixed typo here
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
        const { loan, npl } = forms;
        const loanValue = parseFloat(loan.replace(/,/g, ''));
        const nplValue = parseFloat(npl.replace(/,/g, ''));
        
        if (!isNaN(loanValue) && !isNaN(nplValue) && nplValue !== 0) {
          const cdRatio = (nplValue / loanValue) * 100;
          setCd(cdRatio);
        } else {
          setCd(0); // Reset if input is invalid
        }
      };
      console.log("forms",forms)
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
              <label htmlFor="rate">NPL(doubtful+substand+bad)</label>
              <input type="text" className="form-control" id="rate" placeholder=" " name='npl' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          <div className="total">
            <h3>Npl : {cd.toFixed(2)}%</h3>
          </div>
          <div className="description">
            <div className="description">
              <h3>How is Npl calculated?</h3>
              <p>
              Npl = (total loan / total NPL)*100;
              </p>
              <p>
                Remove staff loan from NPL(Actype: 3H and 40)
              </p>
              <p>
                Make sum of doubtful,substandard and bad.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default NplCalculator