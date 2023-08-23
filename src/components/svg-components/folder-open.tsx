"use client";

import CompFolderOpen from "@/components/svg-components/svgs/folder-open.svg"
const Comp = CompFolderOpen as any;

const IconFolderOpen = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconFolderOpen