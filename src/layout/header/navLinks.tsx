// 3rd party imports
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// My imports
import styles from './Navbar.module.scss'

interface NavLinksProps {
  links: { href: string; displayName: string }[]
}

const determineActive = (href: string, pathname: string): boolean => {
  if (href === '/' && pathname === '/') {
    return true
  } else if (pathname.includes(href) && href !== '/') {
    return true
  } else if (href === '/writing' && pathname.includes('/post')) {
    return true
  } else if (href === '/about' && pathname === '/photos') {
    return true
  } else if (href === '/work' && pathname.includes('/project')) {
    return true
  }
  return false
}

export const NavLinks = ({ links }: NavLinksProps) => {
  const router = useRouter()

  return (
    <div>
      {links.map((link, index) => {
        const isActive = determineActive(link.href, router.pathname)
        return (
          <Link key={index} href={link.href}>
            <a className={`${styles.link} ${isActive && styles.link_active}`}>
              {link.displayName}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
