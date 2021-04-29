import * as React from 'react'
import {BoardItem} from "../types";
import {BsCheckCircle} from "react-icons/bs";
import styled from "styled-components";
import {borderRadius, colors, mediumSize} from "../../design-system";

const LaneItemContainer = styled.div`
   padding: ${mediumSize}px;
   background-color: ${colors.background3};
   border-radius: ${borderRadius}px;
   margin-bottom: ${mediumSize}px;
   min-height: 100px;
   box-shadow: 0 3px 15px rgba(0,0,0,0.2);
   display: flex;
   flex-direction: row;
`

const CircleIcon = styled(BsCheckCircle)`
  margin-right: ${mediumSize/2}px;
`

type Props = {
   item: BoardItem
}

export const LaneItem = ({ item }: Props) => {
   return <LaneItemContainer>
      <CircleIcon color={colors.gray2}/>
      {item.title}
   </LaneItemContainer>
}
