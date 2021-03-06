
import  { Button }  from './Button'
import './button.css'
import { withDesign } from 'storybook-addon-designs'


export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: { control: 'color'},
      isActive: {
        control: 'boolean',
        options: [ 'true', 'false']
      },
      variant: {
        control: {
            type: 'select',
            options: ['primary', 'secondary', 'primaryThemed', 'secondaryThemed']
        }
      },
    },

    decorators: [withDesign],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/3FV5TRPuacbMyhSWjMtNd2/Blog-posts?node-id=29%3A22'
     },

    }
  };

  
  const Template = (args) => <Button {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Solid',
  };

// Primary.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3FV5TRPuacbMyhSWjMtNd2/Blog-posts?node-id=29%3A22'
//  },
// }
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Outline',
    primary: false,
    color:'#2DCC9E',
  };
  
  export const Large = Template.bind({});
  Large.args = {
    size: 'lg',
    label: 'Large',
  };
  
  export const Small = Template.bind({});
  Small.args = {
    size: 'sm',
    label: 'Small',
  };