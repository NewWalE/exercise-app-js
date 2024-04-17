import React from 'react';

export default function MovementNumberSelector(props) {

    // Throw new error and dont allow for workout generation button
    // to be clicked
    //  if (props.movementNumberState > 15) {
        
    // }

    return(
        <div className='numberOfMovements'>
            <label>
            How many movements would you like to do?
            <br />
            <select
                    label="movementNumber"
                    onChange={props.handleMovementNumber}
                    disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                >
                    {Array.from({ length: 15 }, (_, i) => (
                        <option key={i} value={i}>{i + 1}</option>
                    ))}
                </select> 
                <label> movements</label>
            </label>
        </div>

    );
}