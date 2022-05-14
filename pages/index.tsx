import type { NextPage } from 'next'
import { getProviders, getSession, useSession } from "next-auth/react";
import Head from 'next/head'
import { useTheme } from 'next-themes'
// import Image from 'next/image'

import All_feed from '../components/All_feed'
import Charts from './charts'
import Home from './home'


// const ThemeChanger = () => {
//   const { theme, setTheme } = useTheme()

//   return (
//     <div>
//       The current theme is: {theme}
//       <button className="btn" onClick={() => setTheme('light')}>Light Mode</button>
//       <button className="btn" onClick={() => setTheme('dark')}>Dark Mode</button>
//     </div>
//   )
// }

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vtuber Ranking</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        {/* <Home /> */}
        {/* <Charts /> */}
        {/* Model */}
      </main>
    </div>
  )
}

export default Index

export async function getServerSideProps(context: any) {
  // const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
  //   (res) => res.json()
  // );
  // const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
  //   (res) => res.json()
  // );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      // trendingResults,
      // followResults,
      providers,
      session,
    },
  };
}
