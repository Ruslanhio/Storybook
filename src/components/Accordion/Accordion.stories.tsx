import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion node change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UserUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=> setValue(!value)}/>
}