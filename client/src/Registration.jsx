import { Link } from "react-router-dom"
import { h2style,inputstyle,buttonstyle } from "./styles"
import React, {useState} from "react"
export const firstSection = "w-full py-10 flex justify-center font-serif"
export const secondSection = "px-10 bg-blue-200 flex flex-col gap-5 py-5 w-1/3 formborder"
export const buttonhover  = "bg-blue-600 hover:bg-blue-500 duration-200"
export const changehover = "font-bold text-blue-600 hover:text-red-400 duration-300"
export const formsection = "flex flex-col items-center gap-5"
export const selectsection = "p-2 bg-blue-300 rounded font-md text-blue-950"

function Registration(){
    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Sign UP</h2>
                <form action="submit" className={formsection}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input type="text" style={inputstyle} placeholder="Enter Password" />
                    <input type="text" style={inputstyle} placeholder="Confirm Password" />
                    <select className={selectsection} value={department} onChange={departmentchange}>
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="DCHI">DCHI</option>
                        <option value="DEIE">DEIE</option>
                        <option value="DEE">DEE</option>
                        <option value="DEE">DEE</option>
                        <option value="DEE">DEE</option>
                    </select>
                    <button style={buttonstyle} className={buttonhover}>Sign UP</button>
                    <div className="flex"><p className="text-gray-600">Have an Account ?</p><Link to='/admin' className={changehover}>&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Registration