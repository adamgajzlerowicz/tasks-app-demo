import * as React from 'react'

import styled from "styled-components";
import {DualRing} from "react-spinners-css";

const LoadingWrapper = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`

export const Loading = () =>
    <LoadingWrapper><DualRing color="black" size={30}/></LoadingWrapper>

