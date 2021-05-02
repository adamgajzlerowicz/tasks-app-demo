import * as React from 'react'
import {Board, LaneType} from "./types";
import {lanes} from "../constants";

export const BoardContext = React.createContext( '' );

export const makeBoardOption = (itemData: Board) => {
    const label = `${itemData.title} (${itemData.num_tasks} tasks)`
    return {
        value: itemData.id,
        label
    }
}

export const isLane = (lane: string): lane is LaneType =>
    lanes.includes(lane as LaneType)

