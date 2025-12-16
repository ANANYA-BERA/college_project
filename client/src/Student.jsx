import { h2style,inputstyle,buttonstyle } from "./styles"
import { Link } from "react-router-dom"
import Registration,{firstSection,secondSection,buttonhover,changehover, formsection} from "./Registration"


function Student(){
    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="text-center font-bold" style={h2style}>Student Login</h2>
                <form action="submit" className={formsection}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <button className={buttonhover} style={buttonstyle}>Enter</button>
                    <div className="flex">
                        <p className="text-gray-600">Create Account ?</p>
                        <Link to='/studentregistration' className={changehover}>&nbsp;Sign UP</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Student