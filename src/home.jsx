import React, { useState } from "react";

import UpperLowerSelector from "./Selectors/UpperLower/UpperLowerSelector";
import MuscleGroupSelector from "./Selectors/MuscleGroup/MuscleGroupSelectorParent";
import ExerciseSelector from "./Selectors/ExerciseSelector/ExerciseSelector";
import GoalSelector from "./Selectors/GoalSelector";
import WorkoutGeneration from "./WorkoutGenerator/workoutGen";

export default function Home() {

    let goalArray = [
        {value: 'Power', label: 'Power'},
        {value: 'Strength', label: 'Strength'},
        {value: 'Hypertrophy', label: 'Hypertrophy'},
        {value: 'Endurance', label: 'Endurance'}
    ];
    let upperLowerArray = [
        {value: 'Upper body', label: 'Upper body'},
        {value: 'Lower body', label: 'Lower body'},
        {value: 'Full body', label: 'Full body'}
    ];
    let upperMuscleGroupArray = [
        {value: 'Neck', label: 'Neck',},
        {value: 'Traps', label: 'Traps'},
        {value: 'Chest', label: 'Chest'},
        {value: 'Front delt', label: 'Front delt'},
        {value: 'Lateral delt', label: 'Lateral delt'},
        {value: 'Rear delt', label: 'Rear delt'},
        {value: 'Short Head Ticep', label: 'Short Head Ticep'},
        {value: 'Long Head Ticep', label: 'Long Head Ticep'},
        {value: 'Short Head Bicep', label: 'Short Head Bicep'},
        {value: 'Long Head Bicep', label: 'Long Head Bicep'},
        {value: 'Forearms', label: 'Forearms'},
        {value: 'Lats (width)', label: 'Lats (width)'},
        {value: 'Lats (thickness)', label: 'Lats (thickness)'},
        {value: 'Pelvis', label: 'Pelvis'},
        {value: 'Lower Back', label: 'Lower Back'}
    ];
    let lowerMuscleGroupArray = [
        {value: 'Lower Back', label: 'Lower Back'},
        {value: 'Glutes', label: 'Glutes'},
        {value: 'Adductors', label: 'Adductors'},
        {value: 'Abductors', label: 'Abductors'},
        {value: 'Quads', label: 'Quads'},
        {value: 'Hamstrings', label: 'Hamstrings'},
        {value: 'Calves', label: 'Calves'},
        {value:'Tibualous', label: 'Tibualous'}
    ];
    let cardioArray = [
        {value: 'Steady state', label: 'Steady state'},
        {value: 'HIIT', label: 'HIIT'},
        {value: 'Circuit', label: 'Circuit'}
    ];
    let coreMuscleArray = [
        {value: 'Abs', label: 'Abs'},
        {value: 'Obliques', label: 'Obliques'},
        {value: 'Psoas', label: 'Psoas'},
        {value: 'Erector Spinae', label: 'Erector Spinae'}
    ]

    // exercise lists 

    let neckExercises = [
        'Side extention',
        'Rear extention',
        'Front extention'
    ];

    let trapExercises = [
        'Seated shrugs',
        'Wide grip shrugs',
        'Clean shrugs',
        'Farmers carry'
    ];

    let chestExercises = [
        'Flat barbell bench',
        'Flat dumbell bench',
        'Cross-body decline hammer strength',
        'Low incline dumbell becnh'
    ];

    let frontdeltExercises = [
       'Barbell overhead press',
       'Seated dumbell press',
       'Javelin press',
       'Straight bar front raise'
    ];

    let lateraldeltExercises = [
       'Dumbell lateral raise',
       'Cable lateral raise',
       'Hanging dumbell lateral raise'
    ];

    let reardeltExercises = [
       'Seated rear delt fly',
       'Standing rear delt fly',
       'Cross-cable rear delt fly'
    ];

    let shortheadtricepExercises = [
        'Rope tricep extention',
        'Straight bar tricep extention',
        'Bench dips',
    ];

    let longheadtricepExercises = [
        'Single arm dumbell overhead tricep extention',
        'French press',
        'Overhead rope tricep extention',
    ];

    let longheadbicepExercises = [
        'Dumbell hammer curl',
        'Rope hammer curl',
        'Cross-body hammer curl'
    ];

    let shortheadbicepExercises = [
        'Waiter curls',
        'Incline alternating dumbell curl',
        'Standing alternating dumbell curl',
        'Drag curl',
    ];

    let forearmExercises = [
        'Reverse wrist curl',
        'Wrist curl',
        'Thumb-up wrist curl'
    ];

    let latwidthExercises = [
        'Pull-ups',
        'Wide neutral grip lat pull down',
        'Narrow neutral grip lat pull down',
        'Dumbell pull over (hips low)'
    ];

    let latthicknessExercises = [
        'Single arm dumbell row',
        'Seated row',
        'Low row',
        'Gorilla row',
        'Bent over barbell row'
    ];

    let pelvisExercises = [
        'Kegal pulses',
        'Kegal holds'
    ];
    
    let lowerbackExercises = [
        'straight bar deadlift',
        'trapbar deadlift',
        'supermans'
    ];

    let gluteExercises = [
        'Long step walking lunge',
        'Long step bulgarian split squat',
        'Glute bridge',
        'Dumbell sumo squat (elevated, T-bell like)'
    ];

    let adductorExercises = [
        'Copenhagen plank',
        'Adductor raise'
    ];

    let abductorExercises = [
        'Banded side steps',
        'Clamshells',
        'Abductor raise'
    ];

    let quadExercises = [
        'Back squat',
        'Front squat',
        'Goblet squat',
        'Front rack walking lunge',
        'Leg extention',
        'Spanish squats',
        'Sissy squats'
    ];

    let hamstringExercises = [
        'Nordic hamstring raise',
        'Glute Hamtring Raise (GHR)',
        'Romanian deadlift',
        'Straight leg deadlift',
        'Reverse hyper',
        'B-stance deadlift'
    ];

    let calfExercises = [
        'Donkey calf raise',
        'Seated calf raise',
        'Standing calf raise',
        'Squeezing ball calf raise'
    ];

    let tibialisExercises = [
        'Leaning against wall tib raise',
        'Tib machine raise (either hammer strength or at-home style one'
    ];

    let steadystateExercises = [
        'Treadmill incline walk',
        'Stair stepper'
    ];

    let hiitExercises = [
        '2:1 work to rest',
        'Hill sprints',
        'Repeat 180m sprints'
    ];

    let circuitExercises = [
        '50 mountain climbers, 25 push-ups, 100 flutter kicks, 1 min jump rope, 1 min rest',
        '2:1 single under : double under pyramid'
    ];

    const [ goalState, setGoalState ] = useState('');
    const [upperLowerState, setUpperLowerState] = useState('');
    const [ muscleGroupState, setMuscleGroupState ] = useState('');
    const [ primaryMuscleState, setPrimaryMuscleState ] = useState('');
    const [ movementNumberState, setMovementNumberState ] = useState(1);
    const [ superSetState, setSuperSetState ] = useState(false);
    const [ coreState, setCoreState ] = useState(false);
    const [ cardioState, setCardioState ] = useState(false);
    const [ typeOfCardioState, setTypeOfCardioState ] = useState('');
    const [ coreMuscleState, setCoreMuscleState ] = useState('');

    const handleUpperLowerSelect = (selectedOption) => {
        setUpperLowerState(selectedOption);
    }

    const handleMuscleGroupSelect = (selectedOptions) => {
        setMuscleGroupState(selectedOptions);
    }

    const handleCore = () => {
        setCoreState(!coreState);
    }

    const handleCardio = () => {
        setCardioState(!cardioState);
    }

    const handleSuperSet = () => {
        setSuperSetState(!superSetState);
    }

    const handleMovementNumber = (e) => {
        setMovementNumberState(e.target.value);
    }

    const handlePrimaryMuscle = (selectedOption) => {
        setPrimaryMuscleState(selectedOption)
    }

    const handleGoal = (selectedOption) => {
        setGoalState(selectedOption)
    }

    const handleTypeOfCardio = (selectedOption) => {
        setTypeOfCardioState(selectedOption)
    }

    const handleCoreMuscle = (selectedOptions) => {
        setCoreMuscleState(selectedOptions)
    }

    return(
        <>
            <h3>
                <ol>
                    <li>
                        asks goal (power, strength, hypertrophy, endurance 
                        [need to only apply to number of compounds])
                    </li>
                    <li>asks body section (upper/lower)</li>
                    <li>asks muscleGroups</li>
                    <li>allows for selection of prime muscle
                        groups from muscleGroupState
                    </li>
                    <li>number of exercises (assumes 1 heavy compound to start)</li>
                    <li>if you want super sets (assumes anything that isn't
                        primary is an accessory)
                    </li>
                    <li>if you are doing abs</li>
                    <li>if you are doing cardio (if yes what kind [HIIT, steady state])</li>
                     --------------------------------------------------------------------
                     <br />
                     Generates workout
                </ol>
            </h3>

            <GoalSelector
                goalArray={goalArray}
                handleGoal={handleGoal}
            />

            <UpperLowerSelector
                upperLowerArray={upperLowerArray}
                handleUpperLowerSelect={handleUpperLowerSelect}
                goalState={goalState}
            />

            <MuscleGroupSelector
                upperMuscleGroupArray={upperMuscleGroupArray}
                lowerMuscleGroupArray={lowerMuscleGroupArray}
                upperLowerState={upperLowerState}
                handleMuscleGroupSelect={handleMuscleGroupSelect}
                muscleGroupState={muscleGroupState}
                handlePrimaryMuscle={handlePrimaryMuscle}
            />

            <br />

            <ExerciseSelector
                handleCore={handleCore}
                handleCoreMuscle={handleCoreMuscle}
                handleCardio={handleCardio}
                handleTypeOfCardio={handleTypeOfCardio}
                handleMovementNumber={handleMovementNumber}
                handleSuperSet={handleSuperSet}
                movementNumberState={movementNumberState}
                coreMuscleState={coreMuscleState}
                typeOfCardioState={typeOfCardioState}
                coreState={coreState}
                cardioState={cardioState}
                superSetState={superSetState}
                primaryMuscleState={primaryMuscleState}
                muscleGroupState={muscleGroupState}
                setCoreMuscleState={setCoreMuscleState}
                setTypeOfCardioState={setTypeOfCardioState}
                coreMuscleArray={coreMuscleArray}
                cardioArray={cardioArray}
            />

            <br />

            <WorkoutGeneration
                movementNumberState={movementNumberState}
                primaryMuscleState={primaryMuscleState}
                muscleGroupState={muscleGroupState}
                coreMuscleState={coreMuscleState}
                typeOfCardioState={typeOfCardioState}
                neckExercises={neckExercises}
                trapExercises={trapExercises}
                chestExercises={chestExercises}
                frontdeltExercises={frontdeltExercises}
                lateraldeltExercises={lateraldeltExercises}
                reardeltExercises={reardeltExercises}
                shortheadtricepExercises={shortheadtricepExercises}
                longheadtricepExercises={longheadtricepExercises}
                shortheadbicepExercises={shortheadbicepExercises}
                longheadbicepExercises={longheadbicepExercises}
                forearmExercises={forearmExercises}
                latwidthExercises={latwidthExercises}
                latthicknessExercises={latthicknessExercises}
                pelvisExercises={pelvisExercises}
                lowerbackExercises={lowerbackExercises}
                gluteExercises={gluteExercises}
                adductorExercises={adductorExercises}
                abductorExercises={abductorExercises}
                quadExercises={quadExercises}
                hamstringExercises={hamstringExercises}
                calfExercises={calfExercises}
                tibialisExercises={tibialisExercises}
                steadystateExercises={steadystateExercises}
                hiitExercises={hiitExercises}
                circuitExercises={circuitExercises}
            />
        </>
    );
}