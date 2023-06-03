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


/*const Accordeon2 = (props: AccordeonPropsType) => {

    if (!props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordeonBody/>
            </div>
        )
    }else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}*/


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



