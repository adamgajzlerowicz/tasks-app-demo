import * as React from 'react'
import {useCollection, useDocumentData} from "react-firebase-hooks/firestore";
import {Board, BoardItem, LaneType} from "./types";
import firebase from "firebase/app";

import {BoardContext} from "./utils";


export const useBoardList = () => {
    return useCollection<Board>(
        firebase.firestore()
            .collection('boards'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        })
}

export const useQueryLaneItems = (lane: LaneType) => {
    const board = React.useContext(BoardContext)

    return useCollection<BoardItem>(
        firebase.firestore()
            .collection('boards')
            .doc(board)
            .collection('tasks')
            .where('currentLane', '==', lane),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        })
}

export const useTask = (id: string) => {
    const board = React.useContext(BoardContext)

    return useDocumentData<BoardItem>(
        firebase.firestore()
            .collection('boards')
            .doc(board)
            .collection('tasks')
            .doc(id),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        })
}

export const useUpdateTask = (id: string) => {
    const board = React.useContext(BoardContext)

    return React.useCallback( (data: Partial<BoardItem>) =>
        firebase.firestore()
            .collection('boards')
            .doc(board)
            .collection('tasks')
            .doc(id)
            .set(data)
    ,[board, id])
}

export const useCreateTask = () => {
    const board = React.useContext(BoardContext)

    return React.useCallback( (data: Partial<BoardItem>) =>
            firebase.firestore()
                .collection('boards')
                .doc(board)
                .collection('tasks')
                .add(data)
        ,[board])
}

export const useDeleteTask = (id: string) => {
    const board = React.useContext(BoardContext)

    return React.useCallback( () =>
            firebase.firestore()
                .collection('boards')
                .doc(board)
                .collection('tasks')
                .doc(id)
                .delete()
        ,[board, id])
}
