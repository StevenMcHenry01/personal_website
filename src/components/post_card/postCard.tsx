// 3rd party imports
import Link from 'next/link'
import React from 'react'
import Date from '../date/date'

// My imports
import styles from './PostCard.module.scss'

interface PostCardProps {
  id: any
  date: any
  title: any
}

export const PostCard = ({ id, date, title }: PostCardProps) => {
  return (
    <div className={styles.container}>
      <Link href={`/post/${id}`}>
        <a>
          <h1 className={styles.title}>{title}</h1>
        </a>
      </Link>
      <p className={styles.date}>
        <Date dateString={date} />
      </p>
    </div>
  )
}
