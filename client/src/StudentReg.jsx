import { h2style,inputstyle,buttonstyle } from "./styles"
import { Link } from "react-router-dom"
import React,{useState} from "react"
import Registration,{firstSection,secondSection,buttonhover,changehover,formsection, selectsection} from "./Registration"


function StudentReg(){
    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Student</h2>
                <form action="submit" className={formsection}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <select className={selectsection} value={department} onChange={departmentchange}>
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                    </select>
                    <button className={buttonhover} style={buttonstyle}>Enter</button>
                    <div className="flex">
                        <p>Have an Account ?</p>
                        <Link to='/student' className={changehover}>&nbsp;Log IN</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentReg