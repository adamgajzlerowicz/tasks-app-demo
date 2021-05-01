import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {LaneType} from "../types";
import {EmptyLane} from "./emptyLane";
import {LaneItem} from "./laneItem";
import {Stack} from "./stack";
import {AddTaskButton} from "./addTaskButton";
import styled from "styled-components";
import { useQueryLaneItems} from "../queries";
import {Loading} from "./loading";
import {laneNames} from "../../constants";
import {mediumSize} from "../../design-system";
import {LaneContent} from "./laneContent";

const LaneContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`


type Props = {
    lane: LaneType
}

export const Lane = ({lane}: Props) =>
    <LaneContainer>
        <LaneHeader title={laneNames[lane]} lane={lane}/>
        <Stack/>
        <LaneContent lane={lane}/>
    </LaneContainer>
