import { useEffect, useState  } from "react"

import './App.css';
import OtpVerificationPage from "./components/OtpVerificationPage";
function App() {
  const [isVerification, setIsVerificaton] = useState(false)
  const [inputFields,setInputFields] =useState({
    inputField1:"",
    inputField2:"",
    inputField3:"",
    inputField4:"",
    inputField5:"",
    inputField6:"",
  })
  return (
    <div className="App">
      {isVerification ?
      <h2 className="curser " onClick={()=>setIsVerificaton(prev=>!prev)}
      >Click here for Phone Verification </h2>  :
      <div className="relative">
        <i  onClick={()=>setIsVerificaton(prev=>!prev)}
        className="curser absolute glyphicon glyphicon-arrow-left"
        ></i>
        <OtpVerificationPage input={inputFields} changeInput={setInputFields}/>
      </div>
      
      }
    </div>
  );
}

export default App;
