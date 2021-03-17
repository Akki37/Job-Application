import React from "react"
import axios from "axios"
import FormWrapper from "./FormWrapper"
import './App.css';

function App(props) {
  

  const AddFormData=(data)=>{
    axios.post("https://dct-application-form.herokuapp.com/users/application-form",data)
    .then((res)=>{
      console.log(res.data);
      alert("data successfully sent")
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div className="App">
        <div className="title">Apply For Job</div>
            <FormWrapper AddFormData={AddFormData}/>   
    </div>

  );
}

export default App
