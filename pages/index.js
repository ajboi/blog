import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Heading from '../components/heading'
import PostsContainer from '../components/postscontainer'
import Button from '../components/button'
import { getTests } from '../prismic-config'


export default function Home(props) {
  return (
    <Layout>
      <Heading heading='Recent Updates' />
      <PostsContainer />
      <Button link='/' text={props.test} />
    </Layout>
  )
}

export async function getStaticProps () {
  var test = await getTests()
  return {
    props: { test },
    revalidate: 1
  }
}