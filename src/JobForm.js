import React from "react"
import axios from "axios"
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup"
import "./JobForm.css"
const JobForm=(props)=>{

  const initialValues={
          name:"",
          email:"",
          phone:"",
          jobTitle:"",
          experience:"",
          skills:""
      }
      //Standard validation----->
//   const validate  = values=>{
//         let errors={}
//         if(!values.name){
//             errors.name="Required"
//         }else if(!/^[A-Za-z\s]{1,20}$/i.test(values.name)){
//             errors.name="Alphabets Only"
//         }
//         if(!values.email){
//           errors.email="Required"
//       }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(values.email))
//       {
//           errors.email="Invalid Format"
//       }
//       if(!values.phone){
//           errors.phone="Required"
//       }else if(!/^[0-9]{1,10}$/i.test(values.phone)){
//           errors.phone="Invalid Format"
//       }else if(values.phone.length!==10){
//         errors.phone="Must be 10-digits"
//     }
//       if(!values.jobTitle){
//           errors.jobTitle="Required"
//       }
//       if(!values.experience){
//           errors.experience="Required"
//       }
//       if(!values.skills){
//           errors.skills="Required"
//       }
//       return errors
     
//     }
      //Yup Validation----->
     const validationSchema= Yup.object({
         name:Yup.string().required("Required").matches(/^[A-Za-z\s]{1,20}$/,"Alphabets Only"),
         email:Yup.string().email("Invalid Format").required("Required"),
         phone:Yup.string().required("Required").matches(/^[0-9]{1,10}$/,"Numbers Only").min(10,"Must be 10 digits").max(10),
         jobTitle:Yup.string().required("Required"),
         experience:Yup.string().required("Required"),
         skills:Yup.string().required("Required")

     })
     const onSubmit = (values,onSubmitProps)=>{
          const formData={
              createdAt:new Date().toISOString(),
              name:values.name,
              email:values.email,
              phone:`+91 ${values.phone}`,
              jobTitle:values.jobTitle,
              experience:values.experience,
              skills:values.skills,
              status:"applied"
          }
            axios.post("https://dct-application-form.herokuapp.com/users/application-form",formData)
            .then((res)=>{
             console.log(res.data);
             alert("data successfully sent")
             })
             .catch((err)=>{
             alert(err.message)
             })
             onSubmitProps.resetForm()
             onSubmitProps.setSubmitting(false)
      }

    return(
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        //validate={validate}
        validationSchema={validationSchema}
        
        >
            {formik => {
                return (
                    <div className="form" >
                    <Form>
                        <div className="form_div">
                        <label htmlFor="name">Full Name</label>
                        <Field className="input" id="name" type="text" name="name"  placeholder="eg. Joe Shawn" />
                        </div>
                        <ErrorMessage name= "name" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                        <hr/>
                        <div className="form_div">
                        <label htmlFor="email">Email address</label>
                        <Field className="input" id="email" type="email" name="email" placeholder="example123@gmail.com" />
                        </div>
                        <ErrorMessage name= "email" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                        <hr/>
                        <div className="form_div">
                        <label htmlFor="phone">Contact Number</label>
                        <div className="inputContact"><Field className="prefix"  name="prefix" type="text" value="+91" readOnly={true}/>
                        <Field id="phone" className="ContactNo" type="text" minLength={10} maxLength={10}  name="phone" placeholder="eg.- 98x46x75x2" /></div>
                        </div>
                        <ErrorMessage name= "phone" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                        <hr/>
                        <div className="form_div">
                        <label htmlFor="jobTitle">Applying for Job</label>
                        <Field className="select" as="select" id="jobTitle" name="jobTitle" >
                            <option value="">--Select--</option>
                            <option value="Front End Developer">Front-End Developer</option>
                            <option value="Node.js Developer">Node.js Developer</option>
                            <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                            <option value="FULL Stack Developer">FULL Stack Developer</option>
                        </Field>
                        </div>
                        <ErrorMessage name= "jobTitle" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                        <hr/>
                        <div className="form_div">
                        <label htmlFor="experience">Experience</label>
                        <Field  className="input" id="experience" type="text" name="experience"  placeholder="eg. 2 Years 3 months" />
                        </div>
                        <ErrorMessage name= "experience" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                        <hr/>
                        <div className="form_div">
                        <label className="textareaLabel" htmlFor="skills">Technical Skills</label>
                        <Field className="textarea" as="textarea" id="skills" name="skills"  placeholder="Technical Skills" />
                        </div>
                        <ErrorMessage name= "skills" >
                            {errorMsg => <div className="Error">{errorMsg}!</div>}
                        </ErrorMessage>
                       <hr/>
                        <div className="submitBtn" >
                          <button className="submit" type="submit" disabled={!formik.isValid || formik.isSubmitting} >Send Application</button>
                        </div>
                    </Form>
                    </div>
             
                )
            }}
     
        </Formik>
    )
}
export default JobForm