import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Is learning new stuff.</p>
        <p>
          David is learning new stuff to broaden his horizons.
        </p>
      </section>
    </Layout>
  )
}