import { useState } from "react"

function Notes(){
    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    const [year,setYear] = useState("")
    const yearChange = (event) => {
        setYear(event.target.value)
    }

    return(
        <div className="flex justify-center align-center my-5 gap-20 font-serif">
            <select className="p-2 bg-blue-300 rounded font-md text-blue-900" value={department} onChange={departmentchange}>
                <option value="">Select Department</option>
                <option value="DCST">DCST</option>
                <option value="">Select Department</option>
                <option value="">Select Department</option>
            </select>

            <select className="p-2 bg-blue-300 rounded font-md text-blue-900" value={year} onChange={yearChange}>
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd year</option>
            </select>
        </div>
    )
}

export default Notes