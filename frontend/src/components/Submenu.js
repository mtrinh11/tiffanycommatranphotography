import {NavLink} from 'react-router-dom'

const Submenu = (props) => {
    return (
        <ul className="nav__submenu" style={{display:`${props.show}`}}>
            <li>
               <NavLink to='/upstatenewyork'>upstate new york</NavLink> 
            </li>
            <li>
                <NavLink to='/bigbear'>big bear, ca</NavLink>
            </li>
            <li>
                <NavLink to='/sanmarino'>san marino, ca</NavLink>
            </li>
            <li>
                <NavLink to='/sf'>san francisco, ca</NavLink>
            </li>
            <li>
                <NavLink to='/delmar'>corona del mar, ca</NavLink>
            </li>
            <li>
                <NavLink to='/socal'>southern california</NavLink>
            </li>
            <li>
                <NavLink to='/portland'>portland, or</NavLink>
            </li>
            <li>
                <NavLink to='/misc'>Miscellaneous</NavLink>
            </li>
        </ul>
    )
}

export default Submenu;