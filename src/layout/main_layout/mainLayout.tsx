// 3rd party imports
import Head from 'next/head'
import React from 'react'

// My imports
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import styles from './MainLayout.module.scss'
import { HowIsYourDay } from '../../components/how_is_your_day/howIsYourDay'

interface MainLayoutProps {
  children: any
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.main_layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.main_content}>{children}</div>
      <HowIsYourDay />
      <Footer />
    </div>
  )
}
