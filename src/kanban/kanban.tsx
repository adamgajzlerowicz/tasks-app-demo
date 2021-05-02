import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../design-system";
import {Lane} from "./components/lane";
import {lanes, selectorHeight} from "../constants";
import {LaneType} from "./types";
import { DragDropContext } from 'react-beautiful-dnd';
import {useUpdateTask} from "./queries";
import {isLane} from "./utils";

const Container = styled.div`
  padding-top: ${mediumSize}px;
  padding-left: ${mediumSize}px;
  padding-right: ${mediumSize}px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap: ${mediumSize*2}px;
  background-color: ${colors.background};
  min-height: calc(100vh - ${selectorHeight}px);
  min-width: 800px;
`

export const Kanban = () => {
    const updateTask = useUpdateTask()

    return <Container>
        <DragDropContext onDragEnd={async ({draggableId, destination}) => {
            if (destination?.droppableId && isLane(destination.droppableId)) {
                // await updateTask(draggableId, { currentLane: destination.droppableId})
            }
        }}>
            {lanes.map((lane: LaneType) => <Lane lane={lane} key={lane}/> )}
        </DragDropContext>
    </Container>
}
