import { Link } from "react-router-dom"
import { h2style, inputstyle, buttonstyle } from "./styles"
import Registration,{firstSection,secondSection,buttonhover,changehover, formsection} from "./Registration"

function Admin(){
    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Sign IN</h2>
                <form action="submit" className={formsection}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input type="text" style={inputstyle} placeholder="Enter Password" />
                    <button className={buttonhover} style={buttonstyle}>Log IN</button>
                    <div className="flex">
                        <p className="text-gray-600">Create Account ?</p>
                        <Link to='/registration' className={changehover}>&nbsp;Sign UP</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Admin