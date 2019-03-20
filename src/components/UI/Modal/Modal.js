import React from 'react';

import classes from './Modal.css';
import Auxillary from '../../../hoc/Auxillary'
import Backdop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxillary>
        <Backdop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxillary>

)

export default modal;