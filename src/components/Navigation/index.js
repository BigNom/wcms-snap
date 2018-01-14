import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'

import * as routes from '../../constants/routes'

const Navigation = () => 
<Toolbar style={{height: '7em', backgroundColor: '#222'}}>
<ToolbarGroup firstChild={true}>
<img src="/images/cyclone.png" className="App-logo" alt="logo"/>
</ToolbarGroup>
    <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.PRODUCTS}>Products</Link></li>
    <li><Link to={routes.ABOUT}>About</Link></li>
    </ul>      
    </Toolbar>

export default Navigation;



