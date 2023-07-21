import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onclick: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {
    console.log("Rating rendering");

    return (
        <div>
            <Star selected={props.value > 0} onclick={() => props.onclick(1)}/>
            <Star selected={props.value > 1} onclick={() => props.onclick(2)}/>
            <Star selected={props.value > 2} onclick={() => props.onclick(3)}/>
            <Star selected={props.value > 3} onclick={() => props.onclick(4)}/>
            <Star selected={props.value > 4} onclick={() => props.onclick(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    onclick: () => void
}

const Star = React.memo((props: StarPropsType) => {
    console.log("Star rendering");

    return (
        <span onClick={props.onclick}>
      {props.selected ? <b>star </b> : "star "}
    </span>
    );
});