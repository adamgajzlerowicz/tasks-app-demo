import * as React from 'react'
import {useTask, useUpdateTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsArrowLeft} from "react-icons/bs";
import {lanes} from "../../constants";

type Props = {
    id: string
}

export const MoveLeft = ({ id }: Props) => {
    const editItem = useUpdateTask(id)
    const [data] = useTask(id)

    const canMoveLeft = data?.currentLane !== lanes[0] // TODO test

    if (!canMoveLeft) {
        return null
    }

    return <RawButton onClick={() => {
        if (data?.currentLane) {
            const newLane = lanes[lanes.indexOf(data.currentLane) -1] // TODO test
            editItem({ ...data, currentLane: newLane })
        }
    }}><BsArrowLeft/></RawButton>

}
