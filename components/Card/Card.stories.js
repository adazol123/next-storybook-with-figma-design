import  { Card }  from './Card'
// import './card.css'
import { withDesign } from 'storybook-addon-designs'


export default {
    title: 'Components/Cards',
    component: Card,
    argTypes: {
      backgroundColor: { control: 'color' },
      card_date : { control: 'date'},
      color: { control: 'color'},
      isActive: { control: 'boolean', options: [ 'true', 'false']},
      variant: { control: {
              type: 'select',
              options: ['primary', 'secondary', 'primaryThemed', 'secondaryThemed']}},
      size: { control: {
            type: 'select',
            options: ['sm', 'md', 'lg', 'xl']}},
            
    },

    decorators: [withDesign],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/3FV5TRPuacbMyhSWjMtNd2/Blog-posts?node-id=74%3A0'
     },

    }
  };


  const Template = (args) => <Card {...args}/>;
  export const Primary = Template.bind({});
  Primary.args = {
     primary: true,
     card_title: 'Messenger De-risks Engineergin Investment Through Prototypes',
     card_content: 'Content Card here',
     card_author: 'Daniel Lozada',
     card_date: 'March 15, 2021'
  }