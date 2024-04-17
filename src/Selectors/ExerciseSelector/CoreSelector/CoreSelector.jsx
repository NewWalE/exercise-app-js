import React from 'react';
import Select from 'react-select';

export default function CoreSelector(props) {

    return(
        <div className='coreSection'>
                <label>
                    <strong>Are you going to do core?</strong>
                    <br />
                    <input 
                        type="checkbox"
                        label="core"
                        onClick={props.handleCore}
                        disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                        />
                    <label>Yes</label>
                    <input 
                        type="checkbox"
                        label="core"
                        disabled={props.primaryMuscleState === '' ? 'disabled' : ''}
                        />
                    <label>No</label>
                </label>
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