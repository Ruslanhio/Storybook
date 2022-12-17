import React, {useState} from 'react';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import './App.css'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';


const App = (props: any) => {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const[switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className='App'>
            <PageTitle title = {'This is APP component'}/>
            <PageTitle title = {'My friends'}/>
            <UncontrolledRating/>
            <UncontrolledAccordion  titleValue= {'Меню'}  />
            <UncontrolledAccordion  titleValue= {'Настройки'} />
            <Accordion titleValue={'Меню'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn} />
            <OnOff on={switchOn} onChange={(on) =>{setSwitchOn(on)} }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
