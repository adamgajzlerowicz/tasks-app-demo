import * as React from 'react'
import styled from "styled-components";
import {BsLightningFill, BsPlus, BsThreeDots} from "react-icons/bs";
import {colors} from "../../design-system";

const LaneHeaderContainer = styled.div`
  display: flex;  
  justify-content: space-between;
`

const LaneHeaderActions = styled.div`
  
`

const Header = styled.h4`
  font-weight: 500;
`

type Props = {
    title: string
}

export const LaneHeader = ({ title }: Props) => {
    return <LaneHeaderContainer>
        <Header>{title}</Header>
        <LaneHeaderActions>
            <BsPlus /> <BsThreeDots /> <BsLightningFill fill={colors.gold}/>
        </LaneHeaderActions>
    </LaneHeaderContainer>
}
