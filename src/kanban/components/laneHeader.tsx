import * as React from 'react'
import styled from "styled-components";
import {BsLightningFill, BsPlus, BsThreeDots} from "react-icons/bs";

const LaneHeaderContainer = styled.div`
  display: flex;  
  justify-content: space-between;
`

const LaneHeaderActions = styled.div`
  
`

type Props = {
    title: string
}

export const LaneHeader = ({ title }: Props) => {
    return <LaneHeaderContainer>
        <h4>{title}</h4>
        <LaneHeaderActions>
            <BsPlus /> <BsThreeDots /> <BsLightningFill />
        </LaneHeaderActions>
    </LaneHeaderContainer>
}
