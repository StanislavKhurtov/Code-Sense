import React, {useState} from "react";

type UnControlAccordeonPropsType = {
    title: string,
}


const UnControlAccordeon = (props: UnControlAccordeonPropsType) => {

    let [collapsed, setCollapsed] = useState(false);
    console.log(collapsed)

    const styleBtn = {
        transition: "1s",
        backgroundColor: 'blue',
        border: "1px solid #000",
        padding: "5px 10px",
    }

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button style={styleBtn} onClick={() => setCollapsed(!collapsed)}>Toggle</button>
            {collapsed && <AccordeonOnBody/>}
        </div>
    )

}

type AccTitlePropsType = {
    title: string,
}

const AccordionTitle = (props: AccTitlePropsType) => {

    return (
        <h3>{props.title}</h3>
    );
}

const AccordeonOnBody = () => {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>);
};

export default UnControlAccordeon;



