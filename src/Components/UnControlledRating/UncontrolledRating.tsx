import React, {useState} from "react";

type RatingPropsType = {
    //value: number,  /*value: 0|1|2|3|4|5 */
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log("Rating rendering");

    let [starValue, setStarValue] = useState(0);

    const selectStar = (value: number) => {
        setStarValue(value);
    }

    return (
        <div>
            <Star selected={starValue > 0} onClick={() => selectStar(1)}/>
            <Star selected={starValue > 1} onClick={() => selectStar(2)}/>
            <Star selected={starValue > 2} onClick={() => selectStar(3)}/>
            <Star selected={starValue > 3} onClick={() => selectStar(4)}/>
            <Star selected={starValue > 4} onClick={() => selectStar(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    onClick: () => void
}

const Star = (props: StarPropsType) => {
    console.log("Star rendering");

    if (props.selected) {
        return (
            <span onClick={props.onClick}><b>star </b></span>
        );
    } else {
        return (
            <span onClick={props.onClick}>star </span>
        );
    }


}