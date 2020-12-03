// 3rd party imports
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

// My imports
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contents}>
        <p>Steven McHenry ©{new Date().getFullYear()}</p>
        <div className={styles.icons_container}>
          <a
            href="https://github.com/StevenMcHenry01"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillGithub
              size={'1.7rem'}
              className={`${styles.icon} ${styles.github}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/stevenmchenry01/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillLinkedin
              size={'1.7rem'}
              className={`${styles.icon} ${styles.linkedin}`}
            />
          </a>
          <a
            href="https://twitter.com/StevenMcHenry01"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillTwitterCircle
              size={'1.7rem'}
              className={`${styles.icon} ${styles.twitter}`}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
