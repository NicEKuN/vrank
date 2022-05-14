import Link from 'next/link'
import { HomeIcon, ChartSquareBarIcon, VideoCameraIcon, BookmarkIcon } from '@heroicons/react/solid'

const SidebarLink: React.FC<any> = ({ Icon}) => {
  return (
    <div className={""}>
      <Icon className="h-[30px]" />
    </div>
  )
}

function Bottombar() {
  return (
    <div className='bottom-0 inset-x-0 fixed '>
      <div className='sm:hidden bg-base-100 flex h-[55px] justify-around px-3 w-full items-center'>
        <Link href="/home">
          <a>
          <SidebarLink Icon={HomeIcon}/>
          </a>
        </Link>
        <Link href="/charts">
          <a>
            <SidebarLink Icon={ChartSquareBarIcon}/>
          </a>
        </Link>
        <Link href="/live_video">
          <a>
            <SidebarLink Icon={VideoCameraIcon}/>
          </a>
        </Link>
        <Link href="/bookmark">
          <a>
            <SidebarLink Icon={BookmarkIcon}/>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default Bottombar