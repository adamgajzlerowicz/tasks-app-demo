import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../design-system";
import {Lane} from "./components/lane";
import {CandidatesLane} from "./components/candidatesLane";

const Container = styled.div`
  padding-top: ${mediumSize}px;
  padding-left: ${mediumSize}px;
  padding-right: ${mediumSize}px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap: ${mediumSize*2}px;
  background-color: ${colors.background};
  min-height: 100vh;
`

export const Kanban = () => {
    return <Container>
        <CandidatesLane />
        <Lane title="In Progress" items={[]}/>
        <Lane title="QA / Code review" items={[]}/>
        <Lane title="Completed" items={[]}/>
    </Container>
}
