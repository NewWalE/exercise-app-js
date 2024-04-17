import React from 'react';

import CoreSelector from './CoreSelector/CoreSelector';
import SuperSetSelector from './SuperSetSelector/SuperSetSelector';
import MovementNumberSelector from './MovementNumberSelector/MovementNumberSelector';
import CardioSelector from './CardioSelector/CardioSelector';

export default function ExerciseSelector(props) {

    // function exerciseListLogic(props) {
    //     for (let i = props.movementNumberState; i < 0; i--) {
    //         for (props.muscleGroupState.value in props.muscleGroupState) {
    //             return <li>{props.muscleGroupState.value}</li>
    //         }
    //     }
    // }

// dont require muscle groups or add an "all" selector

    return(
        <div>

            <MovementNumberSelector
                handleMovementNumber={props.handleMovementNumber}
                primaryMuscleState={props.primaryMuscleState}
                movementNumberState={props.movementNumberState}
            />

            <br />
            
            <SuperSetSelector
                superSetState={props.superSetState}
                handleSuperSet={props.handleSuperSet}
                movementNumberState={props.movementNumberState}
            />

            <br />

            <CoreSelector
                handleCore={props.handleCore}
                handleCoreMuscle={props.handleCoreMuscle}
                movementNumberState={props.movementNumberState}
                coreState={props.coreState}
                coreMuscleArray={props.coreMuscleArray}
                setCoreMuscleState={props.setCoreMuscleState}
            />

            <br />

            <CardioSelector
                handleCardio={props.handleCardio}
                handleTypeOfCardio={props.handleTypeOfCardio}
                movementNumberState={props.movementNumberState}
                cardioState={props.cardioState}
                cardioArray={props.cardioArray}
                setTypeOfCardioState={props.setTypeOfCardioState}
            />

            <ol>
                {/* {props.movementNumberState === '0' ? '' : exerciseListLogic()} */}
            </ol>
        </div>
    )
}