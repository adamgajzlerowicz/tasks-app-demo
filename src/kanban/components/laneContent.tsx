import * as React from 'react'
import {LaneItem} from "./laneItem";
import {AddTaskButton} from "./addTaskButton";
import {EmptyLane} from "./emptyLane";
import {LaneType} from "../types";
import {useQueryLaneItems} from "../queries";
import {Loading} from "./loading";
import styled from "styled-components";
import {mediumSize} from "../../design-system";
import {Draggable, Droppable} from 'react-beautiful-dnd';

const AddTaskButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${mediumSize}px;
`

const LaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

type Props = {
    lane: LaneType
}

export const LaneContent = ({lane}: Props) => {
    const [data, loading] = useQueryLaneItems(lane)

    if (loading) {
        return <Loading />
    }

    const ids = data?.docs.map(item => item.id) ?? []

    return <Droppable droppableId={lane} key={lane}>
        {(provided, snapshot) => {
            console.log(provided.droppableProps);
            return <LaneContainer ref={provided.innerRef}>
                {!ids.length
                    ? <EmptyLane lane={lane}/>
                    : <>
                        {ids.map((id, index) =>
                            <Draggable key={id} draggableId={id} index={index}>
                                {(provided, snapshot) => {
                                    return (
                                        <LaneItem id={id} provided={provided}/>
                                    );
                                }}
                            </Draggable>)}
                        <AddTaskButtonContainer>
                            <AddTaskButton lane={lane}/>
                        </AddTaskButtonContainer></>}
                {provided.placeholder}
            </LaneContainer>;
        }
        }
    </Droppable>
}
