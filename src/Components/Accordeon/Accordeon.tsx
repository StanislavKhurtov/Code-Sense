import React, { useMemo } from "react";

type ItemType = {
    title: string;
    value: any;
};

type AccordeonPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: ItemType[];
    onClick: (value: any) => void;
};

export const Accordeon = (props: AccordeonPropsType) => {

    const accordeonBodyJSX = useMemo(() => {
        return !props.collapsed && (
            <AccordeonBody items={props.items} onClick={props.onClick} />
        );
    }, [props.collapsed, props.items, props.onClick]);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} />
            {accordeonBodyJSX}
        </div>
    );
};

type AccTitlePropsType = {
    title: string;
    onChange: () => void;
};

const AccordionTitle = (props: AccTitlePropsType) => {
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
};

type AccordeonBodyPropsType = {
    items: ItemType[];
    onClick: (value: any) => void;
};

const AccordeonBody = (props: AccordeonBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, index) => (
                <li
                    onClick={() => {
                        props.onClick(el.value);
                    }}
                    key={index}
                >
                    {el.title}
                </li>
            ))}
        </ul>
    );
};