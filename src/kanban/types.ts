export type Lanes  = 'candidates' | 'inProgress' | 'codeReview' | 'completed'

export type BoardItem = {
    title: string,
    lane: Lanes
}