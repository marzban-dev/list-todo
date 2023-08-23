"use client";

import CompSpinnerThird from "@/components/svg-components/svgs/spinner-third.svg"
const Comp = CompSpinnerThird as any;

const IconSpinnerThird = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconSpinnerThird