import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import router from 'next/router'

export default function Home() {

  return (
    <>
    <Head>
      <title>Member List Home</title>
      <meta name="keywords" content="members"/>
    </Head>
    <div>
     <h1 className={styles.title}>HomePage</h1>
     <p className={styles.text}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
     <Link href='/members'>
       <a className={styles.btn}>See Members Listing</a>
     </Link>
    </div>
    </>
  )
}
