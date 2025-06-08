import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <a href="static/chinese-runing.mcworld" download>
        逃走中 中文翻译 v1.0
      </a>
      <Main posts={posts} />
    </>
  )
}
