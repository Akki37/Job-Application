import React from "react"
import JobForm from "./JobForm"
import "./FormWrapper.css"


const FormWrapper=(props)=>{

    return(
        <div className="FormContainer">
            <div className="UpPointer">
            </div>
            <JobForm />
        </div>
    )
}
export default FormWrapper