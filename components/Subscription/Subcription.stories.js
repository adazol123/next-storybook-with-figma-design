import { Small } from '../InputText/InputText.stories'
import { Primary, Success, Login } from '../_Button/_Button.stories'
import Center from '../Center/Center'

export default {
    title: 'Form/Subscription',
    decorators: [story => <Center>{story()}</Center>]
}

export const PrimarySubcription = () => {
    return(
    <div>
        <h2>Email</h2>
        <Small placeholder ='johndoe@email.co'/>
        <h2>Password</h2>
        <Small placeholder='○ ○ ○ ○ ○ ○'/>
        <Login variant='danger'>
             <div>Subscribe</div>
        </Login>


    </div>)
}

PrimarySubcription.storyName= 'Login Form'