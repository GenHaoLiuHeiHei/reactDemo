import React, { Component } from 'react';
import { Route, Redirect,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from './admin';
import ButtonUi from './pages/ui/button';
import Tabs from './pages/ui/tabs';
import Gallerys from './pages/ui/gallery';
import NoMatch from './pages/NoMatch';
import Bar from './pages/charts/bar';
import BikeMap from './pages/bikeMap/bikeMap';
import Other from './pages/other/other';
import Commin from './commin';
import Login from './pages/Login';
class AuthRouter extends Component {
    render() {  
        return (
            <div>
                {this.props.isLogged === '1'
                    ?
                    <Switch>
                        <Redirect from='/' exact to='/admin'/>
                        <Redirect from='/login' to='/admin'/>
                        <Route path='/admin' render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/admin' exact component={ButtonUi}></Route>
                                    <Route path='/admin/ui/buttons' component={ButtonUi}></Route>
                                    <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                    <Route path='/admin/ui/gallery' component={Gallerys}></Route>
                                    <Route path='/admin/charts/bar' component={Bar}></Route>
                                    <Route path='/admin/bikeMap/bikeMap' component={BikeMap}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/commin' render={()=>
                            <Commin>
                                <Switch>
                                    <Route path='/commin/other' component={Other}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Commin>
                        }></Route>
                    </Switch>
                    : 
                    <div>
                        <Redirect to='/login'/>
                        <Route path='/login' component={Login}/>
                    </div>
                }
            </div>
        )
    }
}
const isLoggedCenter = state => {
    return {
        isLogged:state.isLogged
    }
}
export default connect(isLoggedCenter)(AuthRouter)