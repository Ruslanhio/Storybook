import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;

}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)


    function AccordionBody() {
        console.log('AccordionBody rendering')
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }

    const AccordionTitle = (props: AccordionTitlePropsType) => <h3 onClick={() => {
        props.onClick()
    }}>--- {props.title} ---</h3>


    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {/*  <button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


export default UncontrolledAccordion
