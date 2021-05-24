import { Default, DefaultAvatar, DefaultLogo } from '../Header/NavigationBar/Navbar.stories'
import '../Header/NavigationBar/navbar.css'


export default {
    title: 'Form/Navigation Bar/Desktop'
}


const ImageSource1 ='https://images.unsplash.com/photo-1610564558732-a36a4e28151c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'

const ImageSource2 = 'https://images.unsplash.com/photo-1609094662790-91ad5248d8e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'

export const Navigation = ( ) => {

    return (
        <div className='navigation-form'>
            <div className='navigation-form-container'>
            <DefaultLogo/>
            <Default/>
            <DefaultAvatar ImageSource={ImageSource1}/>
            </div>
            <div className='navigation-form-container'>
            <DefaultLogo/>
            <Default/>
            <DefaultAvatar ImageSource={ImageSource2}/>
            </div>
        </div>
    )
}