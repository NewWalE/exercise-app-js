import React from "react";
import "./MuscleGroupCSS.css";

import PrimeMuscleGroupSelector from './PrimaryMuscleGroupSelector/PrimaryMuscleGroupSelector';
import MuscleGroupSelectorComponent from './MuscleGroupSelectorComponent/MuscleGroupSelectorComponent';

export default function MuscleGroupSelector(props) {

    return(
        <div className="MuscleGroupSelector">
            
            <MuscleGroupSelectorComponent
                upperLowerState={props.upperLowerState}
                upperMuscleGroupArray={props.upperMuscleGroupArray}
                lowerMuscleGroupArray={props.lowerMuscleGroupArray}
                handleMuscleGroupSelect={props.handleMuscleGroupSelect}
            />

            <br />

            <PrimeMuscleGroupSelector
                handlePrimaryMuscle={props.handlePrimaryMuscle}
                muscleGroupState={props.muscleGroupState}
            />

        </div>
    );
}