import React from 'react';

export default function WorkoutGeneration(props) {

    let primaryMuscleGroup = props.primaryMuscleState.value
    let secondaryMuscleGroup = []
    
    function secondaryMuscleGroups(item) {
        for (let i = 0; i < item.length; i++) {
            if (item[i].value !== props.primaryMuscleState.value) {
                secondaryMuscleGroup.push(item[i].value);
            }
        }
        movementLogicSecondary(secondaryMuscleGroup);
        return secondaryMuscleGroup.map((element) => <li>{element}</li>);
    };

    function movementLogicPrimary(item) {
        let primaryArr = item.value;
        let lowerCase = `${primaryArr.toLowerCase()}Exercises`;
    }
    
    function movementLogicSecondary(item) {
        for (let i = 0; i < item.length; i++) {
          item[i] = item[i].toLowerCase().replace(/\s/g, '') + 'Exercises';
        }
        console.log(item);
      }

    if (props.primaryMuscleState !== '') {
        movementLogicPrimary(props.primaryMuscleState);
    };


    return (
        <div>
            <button
            type="button"
            //on change is needed to generate the workout
            >
                Generate Workout
            </button>

            <br />
            <br />

            Generated workout

            {props.primaryMuscleState > 0 ? movementLogicPrimary(props.primaryMuscleState) : ''}

            <br />
            <br />

            Primary Muscle Group: {primaryMuscleGroup}

            <br /> 
            <br />

            {/* Secondary Muscle Groups: {props.muscleGroupState.length > 1 ?
            secondaryMuscleGroups(props.muscleGroupState.map()) */}
            : ''}

            <br />
            
            Number of movements: {props.movementNumberState}
        </div>
    )
}