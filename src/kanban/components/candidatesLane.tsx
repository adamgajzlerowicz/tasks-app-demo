import * as React from 'react'
import {Lane} from "./lane";
import {useCollection} from "react-firebase-hooks/firestore";
import {BoardItem} from "../types";
import firebase from "firebase";
import {Loading} from "./loading";

type Props = {
    board: string
}

export const CandidatesLane = ({ board }: Props) => {
    const [data, loading] = useCollection<BoardItem>(
        firebase.firestore()
            .collection('boards')
            .doc(board)
            .collection('tasks')
            .where('currentLane', '==', 'candidates'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) {
        return <Loading />
    }

    const items = data?.docs.map(item => ({
        ...item.data(),
        id: item.id
    })) ?? [] // TODO test

    return <Lane title="Candidates" items={items}/>
}

