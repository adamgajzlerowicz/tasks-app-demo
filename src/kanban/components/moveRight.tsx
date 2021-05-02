import * as React from 'react'
import {useTask, useUpdateTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsArrowRight} from "react-icons/bs";
import {canMoveRight, getNextLane} from "../utils";

type Props = {
    id: string
}

export const MoveRight = ({ id }: Props) => {
    const editItem = useUpdateTask(id)
    const [data] = useTask(id)

    const movePossible = canMoveRight(data?.currentLane)

    if (!movePossible) {
        return null
    }

    return <RawButton onClick={() => {
        if (data?.currentLane) {
            const newLane = getNextLane(data.currentLane)
            editItem({ currentLane: newLane })
        }
    }}><BsArrowRight/></RawButton>

}
