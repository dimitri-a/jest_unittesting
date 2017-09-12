import React from 'react';

const CheckboxWithLabel =(props)  => {
        return (<div>
            <label>
                <input type="checkbox" checked={props.isChecked} onChange={props.handleChange}/>
                {props.isChecked ? props.labelOn : props.labelOff}
            </label>
        </div>)
}

export default CheckboxWithLabel
//todo is this the right way of using a stateless component? can I still pass props in??