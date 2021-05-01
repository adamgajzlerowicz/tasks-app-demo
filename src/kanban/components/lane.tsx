import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {LaneType} from "../types";
import {Stack} from "./stack";
import styled from "styled-components";
import {laneNames} from "../../constants";
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
