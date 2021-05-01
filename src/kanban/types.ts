export type LaneType = 'candidates' | 'inProgress' | 'codeReview' | 'completed'

export type BoardItem = {
    title: string,
    currentLane: LaneType
    id: string
}

export type Board = {
    title: string
    num_tasks: number
}

