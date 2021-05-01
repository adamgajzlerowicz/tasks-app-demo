export type LaneType = 'candidates' | 'inProgress' | 'codeReview' | 'completed'

export type BoardItem = {
    id: string
    title: string,
    currentLane: LaneType
}

export type Board = {
    id: string
    title: string
    num_tasks: number
}

