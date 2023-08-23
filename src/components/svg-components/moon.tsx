"use client";

import CompMoon from "@/components/svg-components/svgs/moon.svg"
const Comp = CompMoon as any;

const IconMoon = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconMoon