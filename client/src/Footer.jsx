import footerimage from './assets/footerimage.png'
import { FaFacebook, FaYoutube , FaInstagram , FaTwitter } from "react-icons/fa"

function Footer(){

    const icons = [
        {icon: <FaFacebook />,link: "https://www.facebook.com/www.drmsithaldia.org/",design: "text-blue-600 hover:text-blue-700 transition"},
        {icon: <FaYoutube />,link: "https://www.youtube.com/",design: "text-red-600 hover:text-red-700 transition"},
        {icon: <FaTwitter />,link: "https://x.com/",design: "text-blue-500 hover:text-blue-600 transition"}
    ]

    return(
        <footer className='text-center  font-serif'>
            <div className='flex gap-25 py-7'>
            <div>
                <img className="h-20 rounded-md" src={footerimage} alt="footer-image" />
                <div className='flex flex-row text-3xl rounded p-5 gap-5'>
                    {icons.map( (obj,index) => (<a key={index} href={obj.link} target='_blank' rel='noopener noreferrer' className={obj.design}>{obj.icon}</a>))}
                </div>
            </div>
            <div>
                <h2 className='text-start text-white font-bold'>Contact</h2>
                <li className='text-blue-200 text-sm my-1 hover:text-blue-300'>Department of Computer Science Technology</li>
                <li className='text-blue-200 text-sm my-1 hover:text-blue-300'>Department of Computer Science Technology</li>
            </div>
            </div>
            <hr className='h-1 bg-white' />
            <p className='my-3 text-white'>&copy; 2025 Dr. Meghnad Saha Institute of Technology, Haldia. Allrights Reserved. Website Design & Maintain by WEB Informatics</p>
        </footer>
    )
}

export default Footer