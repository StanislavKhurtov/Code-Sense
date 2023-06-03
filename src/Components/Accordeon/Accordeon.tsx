import React from "react";

type AccordeonPropsType = {
    titleValue: string,
    collapsed: boolean,
}

const Accordeon = (props: AccordeonPropsType) => {
    debugger


    if (!props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordeonBody/>
            </div>
        )
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    )

}
type AccTitlePropsType = {
    title: string,
}

const AccordionTitle = (props: AccTitlePropsType) => {
    debugger
    console.log("AccordionTitle rendering");
    return (
        <h3>{props.title}</h3>
    );
}
const AccordeonBody = () => {
    console.log("AccordeonBody rendering");
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>);
}

export default Accordeon;



