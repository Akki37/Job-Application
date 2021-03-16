import React,{useState,useEffect} from "react"
import './App.css';
import FormWrapper from "./FormWrapper";

function App(props) {
  const[UserData,setUserData]=useState([])
  useEffect(() => {
      setUserData(JSON.parse(localStorage.getItem("UserData")))
  },[])

  const AddFormData=(data)=>{
    const result = [...UserData,data]
    setUserData(result)
    localStorage.setItem("UserData",JSON.stringify(result))
  }
  return (
    <div className="App">
      <div>
        {UserData.map((user)=>{
          return <p>{user.Name}</p>
        })}
      </div>
      <div className="title">Apply For Job</div>
      <FormWrapper AddFormData={AddFormData}/>
    </div>

  );
}

export default App
