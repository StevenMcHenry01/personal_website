import React from 'react'
import { WritingsList } from '../layout/writings_list/writingsList'
import { getSortedPostsData } from '../lib/posts'

// My imports

const Writing = ({ allPostsData }: any) => {
  return (
    <div className="page_container">
      <WritingsList posts={allPostsData} />
    </div>
  )
}

export default Writing

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
