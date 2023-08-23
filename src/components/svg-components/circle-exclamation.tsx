"use client";

import CompCircleExclamation from "@/components/svg-components/svgs/circle-exclamation.svg"
const Comp = CompCircleExclamation as any;

const IconCircleExclamation = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconCircleExclamation