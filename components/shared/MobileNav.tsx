import React from 'react'
import NavItems from './NavItems'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
  
const MobileNav = () => {
  return (
<nav className="md:hidden">
<Sheet>
  <SheetTrigger className="align-middle">
    <Image src="/assets/icons/menu.svg" alt='menu' width={24} height={25}/>
    </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image src="/assets/images/logo.svg" alt="logo" width={130} height={40} />
    <Separator  className='border border-gray-100'/>
<NavItems/>
  </SheetContent>
</Sheet>

</nav>
    )
}

export default MobileNav