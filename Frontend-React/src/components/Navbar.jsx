import { SearchIcon } from '@heroicons/react/solid'
import { TextInput } from '@tremor/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import React from 'react'
import { useDashboard } from './context/DashboardContext';

const Navbar = () => {
  const { activePage } = useDashboard();

  return (
    
    <div id='top' className='relative w-full justify-between items-center p-2'>
      <Breadcrumb>
       <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
       </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='{#}'>{activePage}</BreadcrumbLink>
      </BreadcrumbItem> 
      </Breadcrumb>
      
    </div>
  )
}

export default Navbar