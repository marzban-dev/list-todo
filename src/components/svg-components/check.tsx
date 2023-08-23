"use client";

import CompCheck from "@/components/svg-components/svgs/check.svg"
const Comp = CompCheck as any;

const IconCheck = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconCheck