"use client";

import CompSun from "@/components/svg-components/svgs/sun.svg"
const Comp = CompSun as any;

const IconSun = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconSun