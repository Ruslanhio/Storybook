import UncontrolledAccordion from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';



export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action('accordion node change event fired')

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}