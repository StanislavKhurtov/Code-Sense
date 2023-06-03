import React from 'react';
import './App.css';
import Accordeon from "./Components/Accordeon/Accordeon";

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
        <div>
            {/*<PageTitle title={'This is Element'}/>
            <PageTitle title={'This is My Friends'}/>
            <Rating value={3}/>*/}
            <Accordeon titleValue={'Menu'} collapsed={true}/>
            <Accordeon titleValue={'User'} collapsed={false}/>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
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
