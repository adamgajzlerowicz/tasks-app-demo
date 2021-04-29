import * as React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import {LaneHeader} from "./laneHeader";

type Props = {
    items: Array<string>
    title: string
}

export const Lane = ({title, items}: Props) => {
    return <div>
        <LaneHeader title={title} />

        <BsCheckCircle/>
    </div>
}
