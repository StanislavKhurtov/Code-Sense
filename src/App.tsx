import React from 'react';
import './App.css';
import Accordeon from "./Components/Accordeon/Accordeon";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UnControlAccordeon from "./Components/UnControlledAccordeon/UnControlAccordeon";
import {UncontrolledRating} from "./Components/UnControlledRating/UncontrolledRating";

/*function hello() {
    debugger
    alert("Hello ")
}
hello();
*/

// компонента всегда начинается с заглавной буквы



const App = () => {
    //пишем логику
    console.log("App rendering");
    return (
        //пишем JSX
        <div className={'App'}>
            {/*
            <PageTitle title={'This is Element'}/>
            <PageTitle title={'This is My Friends'}/>
            <Rating value={3}/>
            */}
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
            <UnControlAccordeon title={"Accordeon Click"} />
            <UncontrolledRating/>
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
