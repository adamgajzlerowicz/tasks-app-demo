import * as React from 'react'
import {useCollection} from "react-firebase-hooks/firestore";
import {BoardItem} from "./types";
import firebase from "firebase";
import {BoardContext} from "./utils";

export const useCandidatesQuery = () => {
    const board = React.useContext(BoardContext)

    return useCollection<BoardItem>(
        firebase.firestore()
            .collection('boards')
            .doc(board)
            .collection('tasks')
            .where('currentLane', '==', 'candidates'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        })
}
