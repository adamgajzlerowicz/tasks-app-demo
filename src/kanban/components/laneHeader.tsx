import * as React from 'react'
import styled from "styled-components";
import {BsLightningFill} from "react-icons/bs";
import {colors} from "../../design-system";
import {LaneType} from "../types";
import {AddTaskButton} from "./addTaskButton";
import {RawButton} from "./rawButton";
import {lanes} from "../../constants";

const LaneHeaderContainer = styled.div`
  display: flex;  
  justify-content: space-between;
`

const LaneHeaderActions = styled.div``

type Props = {
    title: string
    lane: LaneType
}

export const LaneHeader = ({ title, lane }: Props) => {
    const showLightning = lanes[lanes.length - 1] === lane // TODO test

    return <LaneHeaderContainer>
        <h4>{title}</h4>
        <LaneHeaderActions>
            <AddTaskButton lane={lane} showLabel={false} />
            {showLightning && <RawButton onClick={() => alert('You are amazing!')}><BsLightningFill fill={colors.gold}/></RawButton>}
        </LaneHeaderActions>
    </LaneHeaderContainer>
}
