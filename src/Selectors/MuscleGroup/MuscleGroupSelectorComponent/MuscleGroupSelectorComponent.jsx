import React from 'react';
import Select from 'react-select';

export default function MuscleGroupSelectorComponent(props) {
    return(
        <div>
            <p>Muscle Groups</p>
            <Select
                key={props.upperLowerState}
                options={props.upperLowerState.value == 'upperbody' ? props.upperMuscleGroupArray 
                : props.upperLowerState.value == 'lowerbody' ? props.lowerMuscleGroupArray 
                : props.upperMuscleGroupArray.concat(props.lowerMuscleGroupArray)
            }
                isMulti
                placeholder="Select a muscle group"
                onChange={props.handleMuscleGroupSelect}
                isDisabled={props.upperLowerState === '' ? true : false}
            />
        </div>
    );
}