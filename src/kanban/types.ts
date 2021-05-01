export type LaneType = 'candidates' | 'inProgress' | 'codeReview' | 'completed'

export type BoardItem = {
    title: string,
    currentLane: LaneType
    id: string
}

