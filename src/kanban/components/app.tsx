import * as React from 'react'
import {Kanban} from "../kanban";
import {BoardContext} from "../utils";

export const App = () => {
    return <>
        <BoardContext.Provider value={'gmcMohbh9a4GSVFDivFv'}>
            <Kanban />
        </BoardContext.Provider>
    </>
}
