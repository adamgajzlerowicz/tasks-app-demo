import * as React from 'react'
import {Board} from "./types";

export const BoardContext = React.createContext( '' );

export const makeBoardOption = (itemData: Board) => {
    const label = `${itemData.title} (${itemData.num_tasks} tasks)`
    return {
        value: itemData.id,
        label
    }
}
