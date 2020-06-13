import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage<{yeah: string}> = ({yeah}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>{yeah}</p>
  </Layout>
)

export const getServerSideProps = () => {
  const yeah = 'yeah'
  console.log(yeah);
  return {
    props: {yeah}
  }
}

export default IndexPage
