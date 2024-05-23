export default function WorkoutGeneration(props) {

    let primaryMuscleGroup = props.primaryMuscleState.label;
    
    function secondaryMuscleGroups(muscleGroups) {
        let secondaryMuscleGroup = [];
        for (let i = 0; i < muscleGroups.length; i++) {
            if (muscleGroups[i].value !== props.primaryMuscleState.value) {
                secondaryMuscleGroup.push(muscleGroups[i].label);
            }
        }
        movementLogicSecondary(secondaryMuscleGroup);
        return secondaryMuscleGroup.map((element, index) => <li key={index}>{element}</li>);
    };

    function movementLogicPrimary(item) {
        let primaryArr = item.value;
        // This function doesn't return anything, which might be unintended
        // Consider what this function should output or how it affects the state
    }
    
    function movementLogicSecondary(item) {
        for (let i = 0; i < item.length; i++) {
          item[i] = item[i];
        }
        console.log(item);
    }

    return (
        <div>
            <button type="button">
                Generate Workout
            </button>


            {/* Render this only if primaryMuscleState is properly checked */}
            {props.primaryMuscleState.value ? movementLogicPrimary(props.primaryMuscleState) : null}

            <br /><br />

            Primary Muscle Group: {primaryMuscleGroup}

            <br /><br />

            Secondary Muscle Groups: {props.muscleGroupState && props.muscleGroupState.length > 1 ?
                secondaryMuscleGroups(props.muscleGroupState)
                : 'No secondary muscle groups'}

            <br />
            
            Number of movements: {props.movementNumberState}

            <br /><br />

            Workout: {}
        </div>
    )
}
