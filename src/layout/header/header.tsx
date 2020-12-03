// 3rd party imports
import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

// my imports
import styles from './Navbar.module.scss'
import { NavLinks } from './navLinks'

export const Header = (): JSX.Element => {
  const links: { href: string; displayName: string }[] = [
    { href: '/', displayName: 'home' },
    { href: '/work', displayName: 'work' },
    { href: '/about', displayName: 'about' },
    { href: '/writing', displayName: 'writing' },
  ]

  return (
    <div className="center">
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
        <div className={styles.links_container}>
          <NavLinks links={links} />
          <a
            href="https://github.com/StevenMcHenry01"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub
              size="1.8rem"
              color="var(--color-gray-3)"
              className={styles.github}
            />
          </a>
        </div>
      </nav>
    </div>
  )
}
