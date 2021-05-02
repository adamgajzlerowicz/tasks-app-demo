import * as React from 'react'
import {Board, LaneType} from "./types";
import {lanes} from "../constants";

export const BoardContext = React.createContext<string | undefined>(undefined);

export const makeBoardOption = (itemData: Board) => {
    const label = `${itemData.title} (${itemData.num_tasks} tasks)`
    return {
        value: itemData.id,
        label
    }
}

export const isLastLane = (lane: LaneType) => lanes[lanes.length - 1] === lane

export const canMoveLeft = (lane: LaneType | undefined) => !lane || lane !== lanes[0]

export const getPreviousLane = (lane: LaneType) => lanes[lanes.indexOf(lane) -1]

export const canMoveRight = (lane: LaneType | undefined) => !lane || lane !== lanes[lanes.length - 1]

export const getNextLane = (lane: LaneType) => lanes[lanes.indexOf(lane) + 1]
