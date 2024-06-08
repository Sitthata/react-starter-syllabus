import React from 'react'
import { ModeToggle } from '../mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import ContactCard from './ContactCard'

const Navbar = () => {
  return (
    <section>
      <div
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl text-nowrap md:text-3xl">Starter Pack</h1>
        <NavigationMenu orientation="vertical">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent className="me-auto">
                <ContactCard />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </section>
  )
}

export default Navbar
