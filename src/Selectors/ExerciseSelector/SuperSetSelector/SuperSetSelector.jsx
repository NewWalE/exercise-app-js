import React from 'react';

export default function SuperSetSelector(props) {

    return(
        <div className='superSet'>
            <label>
                <strong>Do you want to do super sets?</strong>
                <br />
                <input 
                    type="checkbox"
                    label="superSet"
                    onClick={props.handleSuperSet}
                    disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                />
                <label>Yes</label>
                <input 
                    type="checkbox"
                    label="superSet"
                    disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                />
                <label>No</label>
            </label>
        </div>
    );
}