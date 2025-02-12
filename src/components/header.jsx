import {Button} from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className=' py-4 flex justify-between items-center'>
        <Link to=''>
        <img src = '/logo.png' className='h-16' alt = 'logo' />
        </Link>
        <div>
          <Button onClick={() => navigate('/auth')}>Login</Button>
          </div>
    </nav>
  )
}

export default Header