import React from "react";

type AccordeonPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=> void
}

export const Accordeon = (props: AccordeonPropsType) => {

        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed && <AccordeonBody/>}
            </div>
        )

}

type AccTitlePropsType = {
    title: string,
    onChange:()=> void
}

const AccordionTitle = (props: AccTitlePropsType) => {
    debugger
    return (
        <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
    );
}
const AccordeonBody = () => {

    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>);
}





