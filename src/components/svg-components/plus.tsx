"use client";

import CompPlus from "@/components/svg-components/svgs/plus.svg"
const Comp = CompPlus as any;

const IconPlus = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconPlus