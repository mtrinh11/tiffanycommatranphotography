import {NavLink} from 'react-router-dom'
const tabs = ['home', 'about', 'photos']

const Nav = () => {
    return (
        <div className='navContainer'> 
            <div style={{width: '40px'}}> </div>
            {tabs.map((item, index) => {
                return (
                    <div className='tab' key={index}>
                        <NavLink to={`/${item}`}>{item}</NavLink>
                    </div>
                )
            })}
            <h1>Tiffany Tran</h1>
        </div>
    )
}

export default Nav;