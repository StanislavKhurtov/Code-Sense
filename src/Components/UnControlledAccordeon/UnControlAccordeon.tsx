import React, {useState} from "react";

type UnControlAccordeonPropsType = {
    title: string,
}


const UnControlAccordeon = (props: UnControlAccordeonPropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    console.log(collapsed)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {collapsed && <AccordeonOnBody/>}
        </div>
    )
}

type AccTitlePropsType = {
    title: string,
    onClick:()=>void
}

const AccordionTitle = (props: AccTitlePropsType) => {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

const AccordeonOnBody = () => {
    return (
        <ul >
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>);
};

export default UnControlAccordeon;



