// 3rd party imports
import Head from 'next/head'
import React from 'react'
import Date from '../../components/date/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

// My imports
import styles from '../../styles/pages/Post.module.scss'

interface PostProps {
  postData: any
}

const Post = ({ postData }: PostProps) => {
  return (
    <div
      className="page_container"
      style={{ maxWidth: 'var(--breakpoint-medium)' }}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.post}>
        <h1 className={styles.title}>{postData.title}</h1>
        <h2
          style={{
            marginTop: '0',
            fontSize: '1.5rem',
            marginBottom: '2rem',
            color: 'var(--color-main-gray)',
          }}
        >
          <Date dateString={postData.date} />
        </h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
