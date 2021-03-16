import React from "react"
import JobForm from "./JobForm"
import "./FormWrapper.css"


const FormWrapper=(props)=>{
    const{AddFormData}=props

    return(
        <div className="FormContainer">
            <div className="UpPointer">
            </div>
            <JobForm AddFormData={AddFormData}/>
        </div>
    )
}
export default FormWrapper