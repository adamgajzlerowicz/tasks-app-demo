import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {BoardItem} from "../types";
import {EmptyLane} from "./emptyLane";
import {LaneItem} from "./laneItem";
import {Stack} from "./stack";
import {AddTaskButton} from "./addTaskButton";
import styled from "styled-components";

const LaneContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const AddTaskButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

type Props = {
    items: Array<BoardItem>
    title: string
}

export const Lane = ({title, items}: Props) => {
    return <LaneContainer>
        <LaneHeader title={title} />

        <Stack/>

        {items.length ?
            <>
                {items.map((item, index) => <LaneItem item={item} key={index}/> )}
                <AddTaskButtonContainer>
                    <AddTaskButton />
                </AddTaskButtonContainer>
            </>
            : <EmptyLane />
        }

    </LaneContainer>
}
