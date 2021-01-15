import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='text-muted'>
        &copy; Thet Paing Myo{' '}
        <small>
          {new Date().getFullYear()}
        </small>
      </span>
    </div>
  )
}

export default Footer
