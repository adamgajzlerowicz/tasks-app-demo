import * as React from 'react'
import {useDeleteTask} from "../queries";
import {RawButton} from "./rawButton";
import {BsFillTrashFill} from "react-icons/bs";
import styled from "styled-components";
import {colors} from "../../design-system";

const ThrashContainer = styled(RawButton)`
  :hover {
    color: ${colors.error}
  }
`

type Props = {
    id: string
}

export const DeleteTask = ({id}:Props) => {
    const deleteTask = useDeleteTask(id)
    return <ThrashContainer onClick={deleteTask}><BsFillTrashFill/></ThrashContainer>
}
