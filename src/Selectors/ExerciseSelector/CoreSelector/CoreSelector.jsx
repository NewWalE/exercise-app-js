import React from 'react';
import Select from 'react-select';

export default function CoreSelector(props) {

    return(
        <div className='coreSection'>
                    <strong>Are you going to do core?</strong>
                    <br />
                    <input 
                        type="radio"
                        name="core"
                        value="yes"
                        onChange={props.handleCore}
                        disabled={props.primaryMuscleState === '' ? true : false}
                        checked={props.coreState === true}
                    />
                    <label>Yes</label>
                    <input 
                        type="radio"
                        name="core"
                        value="no"
                        onChange={props.handleCore}
                        disabled={props.primaryMuscleState === '' ? true : false}
                        checked={props.coreState === false}
                    />
                    <label>No</label>
                <br />
                {props.coreState === true ? 
                    (
                    <Select 
                        options={props.coreMuscleArray}
                        onChange={props.handleCoreMuscle}
                        isMulti
                    />
                    ) 
                : ''}
                {<props className="coreState"></props> === false ? props.setCoreMuscleState('') : ''}
            </div>
    );
}