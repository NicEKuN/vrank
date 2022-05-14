import type { NextPage } from 'next';
import Head from 'next/head';

import TopChart from '../components/TopChart';

export const getServerSideProps = async () => {
    const data = await fetch('https://api.holotools.app/v1/channels?limit=10').then((res)=>(res.json()));
    return {
      props: {data}, // will be passed to the page component as props
    }
}

const Home: NextPage<any> = ({data}) => {

    return (
        <div className=''>
            <Head>
                <title>Home / Vtuber Ranking</title>
            </Head>
            <div className=''>
                <div className='flex'>

                    <div className='sm:w-[85vw] sm:max-w-[600px] w-screen min-h-screen flex-col justify-start items-center '>
                        <div className='bg-black rounded-b-md sticky top-0 bg-opacity-20 h-[50px] w-full backdrop-blur'>
                            <div className='flex justify-between items-center h-full px-4  font-bold text-lg'>
                                <div>Home</div>
                            </div>
                        </div>
                        
                        <TopChart channels={data?.channels} total={data?.total} />

                        
                    </div>

                    <div className='lg:inline-flex hidden mx-4 flex-col w-[25vw] max-w-[350px]'>
                        <div className='bg-black bg-opacity-20 h-[50px] rounded-full w-full backdrop-blur sticky top-0 z-10 flex justify-center items-center'> Search</div>
                        <div className='sticky top-20 flex-col'>
                            <div className='bg-black bg-opacity-20 w-full h-[500px] rounded-md'>
                                <div className='flex justify-center items-start'>
                                    Short Cut
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Home