import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Upstate from './Photos/Upstatenewyork'
import About from './About'
import Contact from './Contact'
import Bigbear from './Photos/Bigbear'
import Delmar from './Photos/Delmar'
import Misc from './Photos/Misc'
import Portland from './Photos/Portland'
import Sanmarino from './Photos/Sanmarino'
import Sf from './Photos/Sf'
import Socal from './Photos/Socal'

const Router = () => {
    return (   
        <Switch>
            <Route 
                exact
                path = "/"
                component = {Home}
            />
            <Route 
                path = "/upstatenewyork"
                component = {Upstate}
            />
            <Route 
                path = "/about"
                component = {About}
            />
            <Route 
                path = "/contact"
                component = {Contact}
            />
            <Route 
                path = "/bigbear"
                component = {Bigbear}
            />
            <Route 
                path = "/sanmarino"
                component = {Sanmarino}
            />  
            <Route 
                path = "/sf"
                component = {Sf}
            />  
            <Route 
                path = "/delmar"
                component = {Delmar}
            />  
            <Route 
                path = "/socal"
                component = {Socal}
            />  
            <Route 
                path = "/portland"
                component = {Portland}
            />  
            <Route 
                path = "/misc"
                component = {Misc}
            />  
        </Switch>
    )
}

export default Router;