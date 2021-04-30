import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../../design-system";
import {BsPlus} from "react-icons/bs";

const Heading = styled.h5`
  color: ${colors.gray};
  display: flex;
  position: relative;
  align-content: center;
`

const PlusIcon = styled(BsPlus)`
  position: absolute;
  left: -${mediumSize}px;
`

export const AddTaskButton = () => {
    return <Heading><PlusIcon /> Add task</Heading>
}
