// 3rd party imports
import React from 'react'
import { PostCard } from '../../components/post_card/postCard'

// My imports
import styles from './WritingsList.module.scss'

interface WritingsListProps {
  posts: any
}

export const WritingsList = ({ posts }: WritingsListProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Writing</h1>
      {posts.map(({ id, date, title }: any) => {
        return <PostCard key={id} id={id} date={date} title={title} />
      })}
    </div>
  )
}
