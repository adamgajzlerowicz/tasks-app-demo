import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {LaneType} from "../types";
import {EmptyLane} from "./emptyLane";
import {LaneItem} from "./laneItem";
import {Stack} from "./stack";
import {AddTaskButton} from "./addTaskButton";
import styled from "styled-components";
import { useQueryLaneItems} from "../queries";
import {Loading} from "./loading";
import {laneNames} from "../../constants";
import {mediumSize} from "../../design-system";

const LaneContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const AddTaskButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${mediumSize}px;
`

type Props = {
    lane: LaneType
}

export const Lane = ({lane}: Props) => {
    const [data, loading] = useQueryLaneItems(lane)

    if (loading) {
        return <Loading />
    }

    const ids = data?.docs.map(item => item.id) ?? []

    return <LaneContainer>
        <LaneHeader title={laneNames[lane]} lane={lane}/>

        <Stack/>

        {ids.length ?
            <>
                {ids.map((item, index) => <LaneItem id={item} key={index}/> )}
                <AddTaskButtonContainer>
                    <AddTaskButton lane={lane} />
                </AddTaskButtonContainer>
            </>
            : <EmptyLane lane={lane} />
        }

    </LaneContainer>
}
