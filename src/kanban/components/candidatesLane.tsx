import * as React from 'react'
import {Lane} from "./lane";
import {Loading} from "./loading";
import {useCandidatesQuery} from "../queries";


export const CandidatesLane = () => {
    const [data, loading] = useCandidatesQuery()

    if (loading) {
        return <Loading />
    }

    const items = data?.docs.map(item => ({
        ...item.data(),
        id: item.id
    })) ?? [] // TODO test

    return <Lane title="Candidates" items={items}/>
}

