import {UncontrolledOnOff} from './UncontrolledOnOff';
import React from 'react';
import {action} from '@storybook/addon-actions'



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('on or off clicked')


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefailtInputValue = () => <input defaultValue={'yo'} />


