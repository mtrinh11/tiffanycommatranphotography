import {NavLink} from 'react-router-dom';
import Submenu from './Submenu';
import {useState} from 'react';


const tabs = [['home', ''], 
    ['about', 'about'], 
    ['photos', 'upstatenewyork'], 
    ['contact', 'contact']];

const Nav = () => {
    const [show, setShown] = useState('none')
    return (
        <div className='navContainer'> 
            <div style={{width: '40px'}}> </div>
            {tabs.map((item, index) => {
                if (item[0] === 'photos') {
                    return (
                        <div 
                            className='tab' 
                            key={index} 
                            onMouseEnter={() => setShown('block')}
                            onMouseLeave={() => setShown('none')}
                        >
                            <NavLink to={`/${item[1]}`}>{item[0]}</NavLink>
                            <Submenu show={show}/>
                        </div>
                    )
                } else {
                    return (
                        <div 
                            className='tab' 
                            key={index} 
                        >
                            <NavLink to={`/${item[1]}`}>{item[0]}</NavLink>

                        </div>
                    )
                }
            })}
            <h1>Tiffany Tran</h1>
        </div>
    )
}

export default Nav;