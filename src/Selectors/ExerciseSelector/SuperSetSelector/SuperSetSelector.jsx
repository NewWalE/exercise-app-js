import React from 'react';

export default function SuperSetSelector(props) {

    return(
        <div className='superSet'>
        <label>
            <strong>Do you want to do super sets?</strong>
            <br />
            <input 
                type="radio"
                name="superSet"
                value="yes"
                onChange={props.handleSuperSet}
                disabled={props.primaryMuscleState === '' ? true : false}
                checked={props.superSetState === true}
            />
            <label>Yes</label>
            <input 
                type="radio"
                name="superSet"
                value="no"
                onChange={props.handleSuperSet}
                disabled={props.primaryMuscleState === '' ? true : false}
                checked={props.superSetState === false}
            />
            <label>No</label>
        </label>
    </div>
    );
}