import * as React from 'react'
import styled from "styled-components";
import {BsLightningFill} from "react-icons/bs";
import {colors} from "../../design-system";
import {LaneType} from "../types";
import {RawButton} from "./rawButton";
import {isLastLane} from "../utils";
import {AddTaskIcon} from "./addTaskIcon";

const LaneHeaderContainer = styled.div`
  display: flex;  
  justify-content: space-between;
`

const LaneHeaderActions = styled.div`
  display: flex;
`

type Props = {
    title: string
    lane: LaneType
}

export const LaneHeader = ({ title, lane }: Props) => {
    const showLightning = isLastLane(lane)

    return <LaneHeaderContainer>
        <h4>{title}</h4>
        <LaneHeaderActions>
            {showLightning ? <RawButton onClick={() => alert('You are amazing!')}><BsLightningFill fill={colors.gold}/></RawButton> : null}
            <AddTaskIcon lane={lane} />
        </LaneHeaderActions>
    </LaneHeaderContainer>
}
