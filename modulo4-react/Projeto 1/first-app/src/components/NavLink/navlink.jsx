import './navlink.css'
import {Link} from 'react-router-dom'

export default function NavLink(props) {

    return <Link className='link' to={props.destiny}>{props.text}</Link>

} 
