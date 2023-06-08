import React, {useState} from "react";

type RatingPropsType = {
    //value: number,  /*value: 0|1|2|3|4|5 */
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log("Rating rendering");

    let [starValue,setStarValue] = useState(0);

    return (
        <div>
            <Star selected={starValue > 0}/><button onClick={()=>{setStarValue(1)}}>1</button>
            <Star selected={starValue > 1}/><button onClick={()=>{setStarValue(2)}}>2</button>
            <Star selected={starValue > 2}/><button onClick={()=>{setStarValue(3)}}>3</button>
            <Star selected={starValue > 3}/><button onClick={()=>{setStarValue(4)}}>4</button>
            <Star selected={starValue > 4}/><button onClick={()=>{setStarValue(5)}}>5</button>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
}

const Star = (props: StarPropsType) => {
    console.log("Star rendering");
    if (props.selected) {
        return (
            <span><b>star </b></span>
        );
    } else {
        return (
            <span>star </span>
        );
    }


}