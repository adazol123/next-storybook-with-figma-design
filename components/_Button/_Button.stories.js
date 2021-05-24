import { _Button } from './_Button'
import './_button.css'
import Center from '../Center/Center'
import {  actions } from '@storybook/addon-actions'

export default {
    title: 'Components/Button/_button',
    component: _Button,
    argTypes: {
        onClick: { action: 'clicked'}
    }

}

export const Primary = () => (<Center><_Button variant='primary' onClick={() => console.log('Out! That hurts!', process.env.STORYBOOK_THEME)}> PrimaryS </_Button></Center>)
export const Secondary = () => (<Center><_Button variant='secondary'> Secondary </_Button></Center>)
export const Success = () => (<Center><_Button variant='success'> Success </_Button></Center>)
export const Danger  = () =>( <Center><_Button variant='danger'> Danger  </_Button></Center>)


/** Action button add-ons */
const Template = args => <_Button {...args} {...actions('onClick', 'onMouseOver')}/>

export const Login = Template.bind({})
Login.args = {
    variant: 'success',
    children: 'Sign Up'
}