import * as React from 'react'
import {useDeleteTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsFillTrashFill} from "react-icons/bs";

type Props = {
    id: string
}

export const DeleteTask = ({id}:Props) => {
    const deleteTask = useDeleteTask(id)
    return <RawButton onClick={deleteTask}><BsFillTrashFill/></RawButton>
}
