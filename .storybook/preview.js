import Center from '../components/Center/Center'
import {withConsole} from '@storybook/addon-console'
import { addDecorator } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/** This is adding the decorator on version 6 of storybook */
export const decorators = [ (Story) => ( <Center><Story/></Center> )]

addDecorator((storyFn, context) => withConsole()(storyFn)(context))


/** This is adding the decorator on version 5 of storybook */
// import { addDecorator } from '@storybook/react'
// addDecorator(story => <Center>{story()}</Center>)