
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CdRatio from './pages/cdRatio/CdRatio';
import HeaderCompoent from './components/header/Header.compoent';
import CdCalculator from './pages/cdCalculator/CdCalculator';
import NplCalculator from './pages/nplCalculator/NplCalculator';
import FdCalculator from './pages/fdCalculator/FdCalculator';
import LoanCalculator from './pages/loanCalculator/LoanCalculator';
const router=createBrowserRouter([
  {
    path:'/',
    element:<CdRatio/>
  },
  {
    path:'/cd-ratio',
    element:<CdCalculator/>
  },
  {
    path:'/npl-calculator',
    element:<NplCalculator/>
  },
  {
    path:'/fdcalculator',
    element:<FdCalculator/>
  },
  ,
  {
    path:'/loancalculator',
    element:<LoanCalculator/>
  }
  
]);
function App() {
  return (
    <>
    <HeaderCompoent/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
