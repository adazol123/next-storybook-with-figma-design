import { Navbar, Avatar, Logo } from './Navbar'

import './navbar.css'


export default {
    title: "Components/Navigation Bar",
    component: Navbar
}


const NavTemplate = args => <Navbar {...args}/>
export const Default = NavTemplate.bind({})


const AvatarTemplate = args => <Avatar {...args} />
export const DefaultAvatar = AvatarTemplate.bind({})
DefaultAvatar.args = {
 ImageSource: 'https://images.unsplash.com/photo-1617175581263-bc0f059cce38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop'
}

const LogoTemplate = args =>  (<Logo {...args} />)
export const DefaultLogo = LogoTemplate.bind({})

