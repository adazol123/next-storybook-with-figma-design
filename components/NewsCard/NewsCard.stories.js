import { NewsCard } from './NewsCard'
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Components/News Card',
    component: NewsCard,
    argTypes: {
        backgroundColor: {control: 'color'},
        textColor: {control: 'color'},
        heading: {control: 'text'},
        tag: {control: 'text'},
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
}

const Template = (args) => <NewsCard {...args}/>

export const Default = Template.bind({});
Default.args = {
    backgroundColor: '#333',
    textColor: 'white',
    heading: 'Heading Figma Design',
    summary: 'Messenger De-risks Engineergin Investment Through Prototypes',
    tag: 'Investing',
    cardImage: 'https://images.unsplash.com/photo-1621692120582-bf52c99ad426?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop',
    imageSource: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop',
    author: 'daniel lozada',
    date: 'March 20, 2021'
}