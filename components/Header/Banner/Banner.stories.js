import { Banner } from './Banner'
import './banner.css'



export default {
    title: 'Form/Banner'
}

const Template = args => (<Banner {...args}/>)

export const DefaultBanner = Template.bind({})