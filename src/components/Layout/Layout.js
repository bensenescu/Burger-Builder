import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
    <Aux className={classes.Content}>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>

);

export default layout;