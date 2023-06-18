import React, {useState} from "react";

type RatingPropsType = {
    value: number, /*value: 0|1|2|3|4|5 */
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log("Rating rendering");

    let [starValue, setStarValue] = useState(0);


    return (
        <div>
            <Star selected={starValue > 0} setValue={() => setStarValue(1)}/>
            <Star selected={starValue > 1} setValue={() => setStarValue(2)}/>
            <Star selected={starValue > 2} setValue={() => setStarValue(3)}/>
            <Star selected={starValue > 3} setValue={() => setStarValue(4)}/>
            <Star selected={starValue > 4} setValue={() => setStarValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    setValue: () => void
}

const Star = (props: StarPropsType) => {
    console.log("Star rendering");

    /*  return props.selected ? <span onClick={props.onClick}><b>star </b></span> :
          <span onClick={props.onClick}>star </span>;*/

    return <span onClick={props.setValue}>{props.selected ? <b> star</b> : " star"}</span>

}