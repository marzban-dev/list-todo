"use client";

import CompArrowRightFromBracket from "@/components/svg-components/svgs/arrow-right-from-bracket.svg"
const Comp = CompArrowRightFromBracket as any;

const IconArrowRightFromBracket = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconArrowRightFromBracket