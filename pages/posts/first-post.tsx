import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

const FirstPost = () => {
  return (
    <Layout home>
      <Head>
        <title>Profile page</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction] { 10 }</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href='/'>Back</Link>
        </p>
      </section>
    </Layout>
  )
}

export default FirstPost;
