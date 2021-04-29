import * as React from 'react'
import {BoardItem} from "../types";
import {BsCheckCircle} from "react-icons/bs";
import styled from "styled-components";
import {borderRadius, colors} from "../../design-system";

const LaneItemContainer = styled.div`
   background-color: ${colors.background3};
   border-radius: ${borderRadius};
`

type Props = {
   item: BoardItem
}

export const LaneItem = ({ item }: Props) => {
   return <LaneItemContainer>
      <BsCheckCircle />
      {item.title}
   </LaneItemContainer>
}
