"use client";

import CompHouse from "@/components/svg-components/svgs/house.svg"
const Comp = CompHouse as any;

const IconHouse = (props : {className?:string; style?:React.CSSProperties}) => {
    return <Comp {...props}/>
}

export default IconHouse