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
        {value: 'neck', label: 'Neck',},
        {value: 'traps', label: 'Traps'},
        {value: 'chest', label: 'Chest'},
        {value: 'frontdelt', label: 'Front delt'},
        {value: 'lateraldelt', label: 'Lateral delt'},
        {value: 'reardelt', label: 'Rear delt'},
        {value: 'shortheadticep', label: 'Short Head Ticep'},
        {value: 'longheadtricep', label: 'Long Head Ticep'},
        {value: 'shortheadbicep', label: 'Short Head Bicep'},
        {value: 'longheadbicep', label: 'Long Head Bicep'},
        {value: 'forearms', label: 'Forearms'},
        {value: 'latwidth', label: 'Lats (width)'},
        {value: 'latthickness', label: 'Lats (thickness)'},
        {value: 'pelvis', label: 'Pelvis'},
    ];
    let lowerMuscleGroupArray = [
        {value: 'lowerback', label: 'Lower Back'},
        {value: 'Glutes', label: 'Glutes'},
        {value: 'adductors', label: 'Adductors'},
        {value: 'abductors', label: 'Abductors'},
        {value: 'quads', label: 'Quads'},
        {value: 'hamstrings', label: 'Hamstrings'},
        {value: 'calves', label: 'Calves'},
        {value:'tibualous', label: 'Tibualous'}
    ];
    let cardioArray = [
        {value: 'steadystate', label: 'Steady state'},
        {value: 'hiit', label: 'HIIT'},
        {value: 'circuit', label: 'Circuit'}
    ];
    let coreMuscleArray = [
        {value: 'abs', label: 'Abs'},
        {value: 'obliques', label: 'Obliques'},
        {value: 'psoas', label: 'Psoas'},
        {value: 'erectorspinae', label: 'Erector Spinae'}
    ]

    // exercise lists 

    let neck = [
        'Side extention',
        'Rear extention',
        'Front extention'
    ];

    let trap = [
        'Seated shrugs',
        'Wide grip shrugs',
        'Clean shrugs',
        'Farmers carry'
    ];

    let chest = [
        'Flat barbell bench',
        'Flat dumbell bench',
        'Cross-body decline hammer strength',
        'Low incline dumbell becnh'
    ];

    let frontdelt = [
       'Barbell overhead press',
       'Seated dumbell press',
       'Javelin press',
       'Straight bar front raise'
    ];

    let lateraldelt = [
       'Dumbell lateral raise',
       'Cable lateral raise',
       'Hanging dumbell lateral raise'
    ];

    let reardelt = [
       'Seated rear delt fly',
       'Standing rear delt fly',
       'Cross-cable rear delt fly',
       'I, T, Y'
    ];

    let shortheadtricep = [
        'Rope tricep extention',
        'Straight bar tricep extention',
        'Bench dips',
    ];

    let longheadtricep = [
        'Single arm dumbell overhead tricep extention',
        'French press',
        'Overhead rope tricep extention',
    ];

    let longheadbicep = [
        'Dumbell hammer curl',
        'Rope hammer curl',
        'Cross-body hammer curl'
    ];

    let shortheadbicep = [
        'Waiter curls',
        'Incline alternating dumbell curl',
        'Standing alternating dumbell curl',
        'Drag curl',
        'Barbell curl',
        'Reverse barbell curl'
    ];

    let forearm = [
        'Reverse wrist curl',
        'Wrist curl',
        'Thumb-up wrist curl'
    ];

    let latwidth = [
        'Pull-ups',
        'Wide neutral grip lat pull down',
        'Narrow neutral grip lat pull down',
        'Dumbell pull over (hips low)'
    ];

    let latthickness = [
        'Single arm dumbell row',
        'Seated row',
        'Low row',
        'Gorilla row',
        'Bent over barbell row'
    ];

    let pelvis = [
        'Kegal pulses',
        'Kegal holds'
    ];
    
    let lowerback = [
        'straight bar deadlift',
        'trapbar deadlift',
        'supermans'
    ];

    let glute = [
        'Long step walking lunge',
        'Long step bulgarian split squat',
        'Glute bridge',
        'Dumbell sumo squat (elevated, T-bell like)'
    ];

    let adductor = [
        'Copenhagen plank (static)',
        'Copenhagen plank (hip drop)',
        'Adductor raise'
    ];

    let abductor = [
        'Banded side steps',
        'Clamshells',
        'Abductor raise'
    ];

    let quad = [
        'Back squat',
        'Front squat',
        'Goblet squat',
        'Front rack walking lunge',
        'Leg extention',
        'Spanish squats',
        'Sissy squats'
    ];

    let hamstring = [
        'Nordic hamstring raise',
        'Glute Hamtring Raise (GHR)',
        'Romanian deadlift',
        'Straight leg deadlift',
        'Reverse hyper',
        'B-stance deadlift'
    ];

    let calf = [
        'Donkey calf raise',
        'Seated calf raise',
        'Standing calf raise',
        'Squeezing ball calf raise'
    ];

    let tibialis = [
        'Leaning against wall tib raise',
        'Tib raise '
    ];

    let steadystate = [
        'Treadmill incline walk',
        'Stair stepper'
    ];

    let hiit = [
        '2:1 work to rest (any cardio)',
        'Hill sprints',
        'Repeat 180m sprints'
    ];

    let circuit = [
        '50 mountain climbers, 25 push-ups, 100 flutter kicks, 1 min jump rope, 1 min rest',
        '2:1 single under : double under pyramid'
    ];

    const [ goalState, setGoalState ] = useState('');
    const [ upperLowerState, setUpperLowerState ] = useState('');
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
                neck={neck}
                trap={trap}
                chest={chest}
                frontdelt={frontdelt}
                lateraldelt={lateraldelt}
                reardelt={reardelt}
                shortheadtricep={shortheadtricep}
                longheadtricep={longheadtricep}
                shortheadbicep={shortheadbicep}
                longheadbicep={longheadbicep}
                forearm={forearm}
                latwidth={latwidth}
                latthickness={latthickness}
                pelvis={pelvis}
                lowerback={lowerback}
                glute={glute}
                adductor={adductor}
                abductor={abductor}
                quad={quad}
                hamstring={hamstring}
                calf={calf}
                tibialis={tibialis}
                steadystate={steadystate}
                hiit={hiit}
                circuit={circuit}
            />
        </>
    );
}