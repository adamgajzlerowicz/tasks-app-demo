import * as React from 'react'
import {LaneItem} from "./laneItem";
import {AddTaskButton} from "./addTaskButton";
import {EmptyLane} from "./emptyLane";
import {LaneType} from "../types";
import {useQueryLaneItems} from "../queries";
import {Loading} from "./loading";
import styled from "styled-components";
import {mediumSize} from "../../design-system";

const AddTaskButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${mediumSize}px;
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

    if (!ids.length) {
        return <EmptyLane lane={lane}/>
    }

    return <>
        {ids.map((item, index) => <LaneItem id={item} key={index}/> )}
        <AddTaskButtonContainer>
            <AddTaskButton lane={lane} />
        </AddTaskButtonContainer>
    </>
}
