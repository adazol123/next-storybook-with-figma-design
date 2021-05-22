
import Button from './Button'
import './button.css'
import { withDesign } from 'storybook-addon-designs'


export default {
    title: 'Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: { control: 'color'}
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
    label: 'Button',
  };

// Primary.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3FV5TRPuacbMyhSWjMtNd2/Blog-posts?node-id=29%3A22'
//  },
// }
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Button',
    primary: false,
  };
  
  export const Large = Template.bind({});
  Large.args = {
    size: 'large',
    label: 'Button',
  };
  
  export const Small = Template.bind({});
  Small.args = {
    size: 'small',
    label: 'Button',
  };