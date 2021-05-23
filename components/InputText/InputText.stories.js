import { InputText } from './InputText'
import './inputText.css'


export default {
    title: 'Components/Input',
    component: InputText,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small','medium','large']
            }
        }
    }
}


const Template = (args) => <InputText {...args}/>


export const Small = Template.bind({})
Small.args = {
    size: 'small',
    placeholder: 'Small size',

}

Small.storyName = 'Name Change'