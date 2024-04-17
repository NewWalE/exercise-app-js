import React from 'react';
import Select from 'react-select';

export default function PrimeMuscleGroupSelector(props) {

    return (
        <div>
            What is the primary muscle group for your workout? 
            <Select
                placeholder='Select your primary muscle group'
                options={props.muscleGroupState}
                isDisabled={props.muscleGroupState === '' ? true : false}
                onChange={props.handlePrimaryMuscle}
            />
        </div>
    );
}