import React from 'react';
import Select from 'react-select';

export default function CardioSelector(props) {

    return(
        <div className='cardioSection'>
            <label>
                <strong>Do you want to do cardio?</strong>
                <br />
                <input 
                    type="checkbox"
                    label="cardioYes"
                    onClick={props.handleCardio}
                    disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                />
                    Yes
                <input 
                    type="checkbox"
                    label="cardioNo"
                    disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                />
                    No 
            </label>          
            <br />
            <br />
            {props.cardioState === true ? 
                (
                <Select 
                    options={props.cardioArray}
                    onChange={props.handleTypeOfCardio}
                />
                ) 
            : ''}
            {props.cardioState === false ? props.setTypeOfCardioState('') : ''}
        </div>
    );
}