import * as React from 'react'
import {useTask, useUpdateTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsArrowLeft} from "react-icons/bs";
import {canMoveLeft, getPreviousLane} from "../utils";

type Props = {
    id: string
}

export const MoveLeft = ({ id }: Props) => {
    const editItem = useUpdateTask(id)
    const [data] = useTask(id)

    const movePossible = canMoveLeft(data?.currentLane)

    if (!movePossible) {
        return null
    }

    return <RawButton
        onClick={() => {
            if (data?.currentLane) {
                const newLane =  getPreviousLane(data.currentLane)
                editItem({ currentLane: newLane })
            }
        }}>
        <BsArrowLeft/>
    </RawButton>

}
