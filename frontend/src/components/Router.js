import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Photos from './Photos'
import About from './About'

const Router = () => {
    return (   
        <Switch>
            <Route 
                path = "/home"
                component = {Home}
            />
            <Route 
                path = "/photos"
                component = {Photos}
            />
            <Route 
                path = "/about"
                component = {About}
            />
        </Switch>
    )
}

export default Router;