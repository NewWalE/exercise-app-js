import React from 'react';
import Select from 'react-select';

export default function GoalSelector(props) {


    return (
        <div>
            <p>What is the goal of today's workout?</p>
            <Select
                options={props.goalArray}
                onChange={props.handleGoal}
                placeholder='My goal is to improve...'
            />
        </div>
    );
}