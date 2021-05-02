import * as React from 'react'
import {useTask, useUpdateTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsArrowRight} from "react-icons/bs";
import {lanes} from "../../constants";

type Props = {
    id: string
}

export const MoveRight = ({ id }: Props) => {
    const editItem = useUpdateTask()
    const [data] = useTask(id)

    const canMoveRight = data?.currentLane !== lanes[lanes.length - 1] // TODO test

    if (!canMoveRight) {
        return null
    }

    return <RawButton onClick={() => {
        if (data?.currentLane) {
            const newLane = lanes[lanes.indexOf(data.currentLane) + 1] // TODO test
            editItem(id, { currentLane: newLane })
        }
    }}><BsArrowRight/></RawButton>

}
