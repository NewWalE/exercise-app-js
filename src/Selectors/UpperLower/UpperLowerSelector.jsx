import React from "react";
import Select from "react-select"

export default function UpperLowerSelector(props) {

    return(
        <>
            <p>Are you doing upper, lower, or full body?</p>
            <Select
                options={props.upperLowerArray}
                onChange={props.handleUpperLowerSelect}
                isDisabled={props.goalState === '' ? true : false}
            />
        </>
    );
}