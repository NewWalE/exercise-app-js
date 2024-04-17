import React from 'react';
import Select from 'react-select';

export default function CardioSelector(props) {

    return(
        <div className='cardioSection'>
                <strong>Do you want to do cardio?</strong>
                <br />
                <input 
                type="radio"
                name="cardio"
                value="yes"
                onChange={props.handleCardio}
                disabled={props.primaryMuscleState === '' ? true : false}
                checked={props.cardioState === true}
            />
            <label>Yes</label>
            <input 
                type="radio"
                name="cardio"
                value="no"
                onChange={props.handleCardio}
                disabled={props.primaryMuscleState === '' ? true : false}
                checked={props.cardioState === false}
            />
            <label>No</label>
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