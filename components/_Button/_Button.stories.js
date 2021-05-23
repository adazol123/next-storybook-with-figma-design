import { _Button } from './_Button'
import './_button.css'
import Center from '../Center/Center'

export default {
    title: 'Components/Button/_button',
    component: _Button,

}

export const Primary = () => (<Center><_Button variant='primary'> Primary </_Button></Center>)
export const Secondary = () => (<Center><_Button variant='secondary'> Secondary </_Button></Center>)
export const Success = () => (<Center><_Button variant='success'> Success </_Button></Center>)
export const Danger  = () =>( <Center><_Button variant='danger'> Danger  </_Button></Center>)



const Template = args => <_Button {...args}/>

export const Login = Template.bind({})
Login.args = {
    variant: 'success',
    children: 'Sign Up'
}