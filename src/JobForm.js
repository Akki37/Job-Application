import React,{useState} from "react"
import "./JobForm.css"
const JobForm=(props)=>{
  const{AddFormData}=props
  const[time,setTime]=useState(new Date().toISOString())
  const[fullName,setFullName]=useState("")
  const[email,setEmail]=useState("")
  const[ContactNo,setContactNo]=useState("")
  const[profession,setProfession]=useState("")
  const[experience,setExperience]=useState("")
  const[techSkills,setTechSkills]=useState("")
  const[status,setStatus]=useState("applied")
  const[formError,setFormError]=useState({})
  const error={}
  function handleForm(e){
      if(e.target.name==="fullName"){
          const result=e.target.value
          if(/[0-9]/.test(result)){
            error.name="Alphabets Only"
            setFormError(error)
          }else{
              delete error.name
              setFormError(error)
          }
          setFullName(e.target.value)
      }else if(e.target.name==="email"){
        setEmail(e.target.value)
    }else if(e.target.name==="ContactNo"){
        const result = e.target.value.trim()
        if(/[A-Za-z!`@#$ %^&*()+=-[\]\\';,./{}|":<>? ~_]/.test(result)){
             error.contact="Numbers Only !"
             setFormError(error)
        }else{
             delete error.contact
             setFormError(error)
        }
       
        setContactNo(`${result}`)
        
    }else if(e.target.name==="profession"){
        setProfession(e.target.value)
    }else if(e.target.name==="experience"){
        setExperience(e.target.value)
    }else if(e.target.name==="techSkills"){
        setTechSkills(e.target.value)
    }
  }
 
  function handleSubmit(e){
      e.preventDefault()
      if(Object.keys(error).length){
          setFormError(error)
      }else{
          const FormData={
                 createdAt:time,
                 name:fullName,
                 email:email,
                 phone:`+91 ${ContactNo}`,
                 jobTitle:profession,
                 experience:experience,
                 skills:techSkills,
                 status:status
          }
          console.log(FormData);
          setFormError({})
          //reset form
          setTime(new Date().toISOString())
          setFullName("")
          setEmail('')
          setContactNo('')
          setProfession('')
          setExperience('')
          setTechSkills('')

          AddFormData(FormData)
      }
  }
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form_div">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" name="fullName" value={fullName} onChange={handleForm} pattern="[A-Za-z\s]{1,20}" placeholder="eg. Joe Shawn" required={true}/>
                </div>
                {formError.name && <div className="Error">{formError.name}!</div>}
                <hr/>
                <div className="form_div">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" value={email} onChange={handleForm} placeholder="example123@gmail.com" required={true}/>
                </div>
                <hr/>
                <div className="form_div">
                <label htmlFor="ContactNo">Contact Number</label>
                <div className="inputContact"><input className="prefix" type="text" value="+91" readOnly={true}/><input id="ContactNo" type="tel" minLength={10} maxLength={10} pattern="[0-9]{10}" name="ContactNo" value={ContactNo} onChange={handleForm} placeholder="eg.- 98x46x75x2" required={true}/></div>
                <br/>
                </div>
                {formError.contact && <div className="Error">{formError.contact}</div>}
                <hr/>
                <div className="form_div">
                <label htmlFor="profession">Applying for Job</label>
                <select id="profession" value={profession} onChange={handleForm} name="profession" required={true}>
                    <option value="">--Select--</option>
                    <option value="Front End Developer">Front-End Developer</option>
                    <option value="Node.js Developer">Node.js Developer</option>
                    <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                    <option value="FULL Stack Developer">FULL Stack Developer</option>
                </select>
                </div>
                <hr/>
                <div className="form_div">
                <label htmlFor="experience">Experience</label>
                <input id="experience" type="text" name="experience" value={experience} onChange={handleForm} placeholder="eg. 2 Years 3 months" required={true}/>
                </div>
                <hr/>
                <div className="form_div">
                <label className="textarea" htmlFor="techSkills">Technical Skills</label>
                <textarea id="techSkills"name="techSkills" value={techSkills} onChange={handleForm} placeholder="Technical Skills" required={true}></textarea>
                </div>
                <hr/>
                <div className="submitBtn" >
                  <input  type="submit" value="Send Application" />
                </div>
            </form>
        </div>
    )
}
export default JobForm