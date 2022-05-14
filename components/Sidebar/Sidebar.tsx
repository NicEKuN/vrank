import { HomeIcon, ChartSquareBarIcon, VideoCameraIcon, BookmarkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import SidebarLink from './SidebarLink'

function Sidebar() {
  return (
    <div className=''>
      <div className="hidden sm:inline-flex xl:item-start mx-4 pt-5 fixed w-fit flex-col">
        <div className="hidden text-xl xl:inline hoverAnimation ">
        <Link href="/">
          <a>
            Vtuber Ranking
          </a>
        </Link>
      </div>
        <div>
          <Link href="/home">
            <a>
              <SidebarLink Icon={HomeIcon} text="Home" />
            </a>
          </Link>
          <Link href="/charts">
            <a>
              <SidebarLink Icon={ChartSquareBarIcon} text="Chart" />
            </a>
          </Link>
          <Link href="/live_video">
            <a>
              <SidebarLink Icon={VideoCameraIcon} text="Live / Video" />
            </a>
          </Link>
          <Link href="/bookmark">
            <a>
              <SidebarLink Icon={BookmarkIcon} text="Bookmark" />
            </a>
          </Link>
          <button className="mt-4 hidden xl:inline bg-[#1d9bf0] text-white rounded-full w-[180px] h-[54px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
            Tweet
          </button>

        </div>
      </div>
    </div>
  )
}

export default Sidebar