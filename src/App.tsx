import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {Accordeon} from "./Components/Accordeon/Accordeon";
import {ControlledOnOff} from "./Components/UnControllerOnOFF/ControlledOnOff";


const App = () => {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accColl, setAccColl] = useState<boolean>(true);
    let [switchOn,setSwitchOn] = useState<boolean>(false)




    return (
        <div className={'App'}>
            {/*
            <PageTitle title={'This is Element'}/>
            <PageTitle title={'This is My Friends'}/>
             */}

            {/*<Rating value={ratingValue} onclick={setRatingValue}/>*/}

            {/*
            <Accordeon titleValue={'Menu'} collapsed={true}/>
            <Accordeon titleValue={'User'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>4а5ми6
            <Rating value={4}/>
            <Rating value={5}/>
            */}

            <OnOff/>
            <OnOff/>

            {/*
            <UnControlAccordeon title={"Accordeon Click"}/>
            <UncontrolledRating/>
            */}

            <Accordeon titleValue={'Menu'}
                       collapsed={accColl}
                       onChange={() => {
                           setAccColl(!accColl)
                       }}
            />


            <ControlledOnOff
                on={switchOn}
                onChange={setSwitchOn}
            />
        </div>
    );
}
type PageTitlePropsType = {
    title: string,
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}


export default App;
