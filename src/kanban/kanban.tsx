import * as React from 'react'
import styled from "styled-components";
import {mediumSize} from "../design-system";
import {Lane} from "./components/lane";
import {BoardItem } from "./types";

const Container = styled.div`
  padding: ${mediumSize}px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap: ${mediumSize*2}px;
`

export const Kanban = () => {
    const items: Array<BoardItem> = [{
        title: "foo",
        completed: false,
        lane: "candidates"
    }, {
        title: "bar",
        completed: true,
        lane: "inProgress"
    }]
    return <Container>
        <Lane title="Candidates" items={items}/>
        <Lane title="In Progress" items={items}/>
        <Lane title="QA / Code review" items={items}/>
        <Lane title="Completed" items={items}/>
    </Container>
}
