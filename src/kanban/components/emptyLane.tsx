import * as React from 'react'
import {BsPlus} from "react-icons/bs";
import styled from "styled-components";
import {borderRadius, colors, mediumSize} from "../../design-system";

const EmptyLaneContainer = styled.div`
  background-color: ${colors.background2};
  padding-top: ${mediumSize}px;
  min-height: 120px;
  display: flex;
  justify-content: center;
  border-radius: ${borderRadius}px;
`

const Heading = styled.h5`
  color: ${colors.gray};
  font-weight: 500;
  display: flex;
  position: relative;
  align-content: center;
`

const PlusIcon = styled(BsPlus)`
  position: absolute;
  left: -${mediumSize}px;
`

export const EmptyLane = () => {
    return <EmptyLaneContainer>
        <Heading><PlusIcon /> Add task</Heading>
    </EmptyLaneContainer>
}
