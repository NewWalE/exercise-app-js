export default function WorkoutGeneration(props) {

    let primaryMuscleGroupLabel = props.primaryMuscleState.label;
    let secondaryMuscleGroupArray = [];
    let allMuscleGroups = [props.primaryMuscleState.value]

    
    function secondaryMuscleGroups(muscleGroups) {
        let secondaryMuscleGroup = [];
        for (let i = 0; i < muscleGroups.length; i++) {
            if (muscleGroups[i].value !== props.primaryMuscleState.value) {
                secondaryMuscleGroup.push(muscleGroups[i].label);
            }
        }
        return secondaryMuscleGroup.map((element, index) => <li key={index}>{element}</li>);
    };

    // function movementLogicPrimary(item) {
    //     let primaryMuscleGroup = item.value;
    // }
    
    // function movementLogicSecondary(item) {
    //     for (let i = 0; i < item.length; i++) {
    //       item[i] = item[i];
    //     }
    // }

    function generateWorkout() {
        let count = 0
        console.log(allMuscleGroups)
        // while (count < props.movementNumberState) {

        // }
    }
    generateWorkout();

    return (
        <div>
            <button type="button">
                Generate Workout
            </button>


            {/* Render this only if primaryMuscleState is properly checked */}
            {/* {props.primaryMuscleState.value ? movementLogicPrimary(props.primaryMuscleState) : null} */}

            <br /><br />

            Primary Muscle Group: {primaryMuscleGroupLabel}

            <br /><br />

            Secondary Muscle Groups: {props.muscleGroupState && props.muscleGroupState.length > 1 ?
                secondaryMuscleGroups(props.muscleGroupState)
                : 'No secondary muscle groups'}

            <br />
            
            Number of movements: {props.movementNumberState}

            <br /><br />

            Workout: 
        </div>
    )
}
