import './ContactScreen.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

const ContactScreen = () => {
  return (
    <div className='contactScreen py-3'>

      <p className='contactScreen__title'>Reach me through</p>

      <div className='contactScreen__info'>
        <ContactInfo 
          Icon={MailOutlineIcon} 
          title='Email'
          text='thetpaingmyo1995@gmail.com'
          duration={0.3}
          delay={0}
          initialPosition='-100vw'
        />
        <ContactInfo 
          Icon={PhoneAndroidIcon} 
          title='Mobile' 
          text='+95 9421103246'
          duration={0.3}
          delay={0.3}
          initialPosition='-100vw'
        />
      </div>
    </div>
  )
}

export default ContactScreen
