import * as React from 'react'
import {LaneHeader} from "./laneHeader";
import {BoardItem} from "../types";
import {EmptyLane} from "./emptyLane";
import {LaneItem} from "./laneItem";
import {Stack} from "./stack";
import {AddTaskButton} from "./addTaskButton";

type Props = {
    items: Array<BoardItem>
    title: string
}

export const Lane = ({title, items}: Props) => {
    return <div>
        <LaneHeader title={title} />

        <Stack/>

        {items.length ?
            <>
                {items.map((item, index) => <LaneItem item={item} key={index}/> )}
                <AddTaskButton />
            </>
            : <EmptyLane />
        }

    </div>
}
