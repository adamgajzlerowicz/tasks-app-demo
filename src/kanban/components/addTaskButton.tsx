import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../../design-system";
import {BsPlus} from "react-icons/bs";
import {RawButton} from "./rawButton";
import {LaneType} from "../types";
import {useCreateTask} from "../queries";

const Typography = styled.h5`
  color: ${colors.gray};
  display: flex;
  position: relative;
  align-content: center;
`

const PlusIcon = styled(BsPlus)`
  position: absolute;
  left: -${mediumSize}px;
`

type Props = {
    lane: LaneType
}

export const AddTaskButton = ({ lane }: Props) => {
    const createTask = useCreateTask()

    return <RawButton onClick={() => { createTask({currentLane: lane}) } }>
        <Typography><PlusIcon /> Add task</Typography>
    </RawButton>
}
