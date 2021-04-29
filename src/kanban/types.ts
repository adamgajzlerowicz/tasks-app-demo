export type Lanes  = 'candidates' | 'inProgress' | 'codeReview' | 'completed'

export type BoardItem = {
    completed: boolean,
    title: string,
    lane: Lanes
}
