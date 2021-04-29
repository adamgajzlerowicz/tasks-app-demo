import * as React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import {LaneHeader} from "./laneHeader";
import {BoardItem} from "../types";

type Props = {
    items: Array<BoardItem>
    title: string
}

export const Lane = ({title, items}: Props) => {
    return <div>
        <LaneHeader title={title} />

        <BsCheckCircle/>
    </div>
}
