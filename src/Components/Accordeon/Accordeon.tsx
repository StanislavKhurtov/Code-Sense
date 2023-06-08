import React from "react";

type AccordeonPropsType = {
    titleValue: string,
    collapsed: boolean,
}

const Accordeon = (props: AccordeonPropsType) => {

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordeonBody/>}
            </div>
        )

}

type AccTitlePropsType = {
    title: string,
}

const AccordionTitle = (props: AccTitlePropsType) => {
    debugger
    return (
        <h3>{props.title}</h3>
    );
}
const AccordeonBody = () => {

    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>);
}

export default Accordeon;



