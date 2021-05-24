import { Carousel } from './Carousel'
import './carousel.css'

export default {
    title: 'Form/Carousel',
    component: Carousel
}

const Template = (args) => ( <Carousel {...args} />)

export const DefaultCarousel = Template.bind({})