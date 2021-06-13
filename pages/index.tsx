import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Post = {
  id: string,
  date: string,
  title: string
}

type Props = {
  allPostsData: Post[];
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <section>
        <Link href='/posts/first-posts'><a>First post</a></Link>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <Link href={`/posts/${id}`}><a>{id}</a></Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;
