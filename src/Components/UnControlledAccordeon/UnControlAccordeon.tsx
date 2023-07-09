import React, {useReducer} from "react";

type UnControlAccordeonPropsType = {
    title: string,
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "Toggle-collapsed":
            return !state;
        default:
            throw new Error("Bad action type")
    }
    return state;
}

export const UnControlAccordeon = (props: UnControlAccordeonPropsType) => {

    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    console.log(collapsed)

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.title} onClick={() => dispatch({type: "Toggle-collapsed"})}/>
            {collapsed && <AccordeonOnBody/>}
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





