import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {BoardItem} from "../types";
import {EmptyLane} from "./emptyLane";
import {LaneItem} from "./laneItem";
import styled from "styled-components";
import {mediumSize} from "../../design-system";

const LaneContainer = styled.div`
  margin-top: ${mediumSize};
`

type Props = {
    items: Array<BoardItem>
    title: string
}

export const Lane = ({title, items}: Props) => {
    return <LaneContainer>
        <LaneHeader title={title} />
        {items.length ?
            items.map((item, index) => <LaneItem item={item} key={index}/>)
            : <EmptyLane />
        }

    </LaneContainer>
}
