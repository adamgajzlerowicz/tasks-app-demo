import * as React from 'react'
import styled from "styled-components";
import {borderRadius, colors, mediumSize} from "../../design-system";
import {AddTaskButton} from "./addTaskButton";
import {LaneType} from "../types";

const EmptyLaneContainer = styled.div`
  background-color: ${colors.background2};
  padding-top: ${mediumSize * 2}px;
  display: flex;
  justify-content: center;
  border-radius: ${borderRadius}px;
  flex-grow: 1;
`

type Props = {
    lane: LaneType
}

export const EmptyLane = ({ lane }: Props) => {
    return <EmptyLaneContainer>
        <AddTaskButton lane={lane}/>
    </EmptyLaneContainer>
}
