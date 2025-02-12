import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const user = true;
  return (
    <nav className=' py-4 flex justify-between items-center'>
        <Link to=''>
        <img src = '/logo.png' className='h-16' alt = 'logo' />
        </Link>
        <div>
          {!user ? 
          <Button onClick={() => navigate('/auth')}>Login</Button>
          :(
            <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          )}
          </div>
    </nav>
  )
}

export default Header