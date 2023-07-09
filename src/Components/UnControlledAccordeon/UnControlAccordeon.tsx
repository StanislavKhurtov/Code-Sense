import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UnControlAccordeonPropsType = {
    title: string,
}

export const UnControlAccordeon = (props: UnControlAccordeonPropsType) => {

    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});


    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.title} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {state.collapsed && <AccordeonOnBody/>}
        </div>
    )
}

type AccTitlePropsType = {
    title: string,
    onClick: () => void
}

const AccordionTitle = (props: AccTitlePropsType) => {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

const AccordeonOnBody = () => {
    return (
        <ul>
            <li>first</li>
            <li>second</li>
            <li>three</li>
        </ul>);
};





