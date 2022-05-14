const SidebarLink: React.FC<any> = ({Icon, text}) =>{
  return (
    <div className={"flex items-center justify-center xl:justify-start font-normal text-xl space-x-3 hoverAnimation mt-2 mb-2"}>
        <Icon className="h-8" />
        <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink