"use client";

import CompChevronLeft from "@/components/svg-components/svgs/chevron-left.svg"
const Comp = CompChevronLeft as any;

const IconChevronLeft = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconChevronLeft