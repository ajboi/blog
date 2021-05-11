import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Heading from '../components/heading'
import PostsContainer from '../components/postscontainer'
import Button from '../components/button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Heading heading='Recent Updates' />
      <PostsContainer />
      <Button link='/' text='Read more' />
    </Layout>
  )
}
