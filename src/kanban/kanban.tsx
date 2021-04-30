import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../design-system";
import {Lane} from "./components/lane";
import {BoardItem } from "./types";

const Container = styled.div`
  padding: ${mediumSize}px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap: ${mediumSize*2}px;
  background-color: ${colors.background};
  min-height: 600px;
`

export const Kanban = () => {
    const items: Array<BoardItem> = [{
        title: "foo",
        lane: "candidates"
    }, {
        title: "bar",
        lane: "inProgress"
    }]
    return <Container>
        <Lane title="Candidates" items={items}/>
        <Lane title="In Progress" items={[]}/>
        <Lane title="QA / Code review" items={items}/>
        <Lane title="Completed" items={[]}/>
    </Container>
}
