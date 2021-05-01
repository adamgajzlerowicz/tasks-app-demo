import {LaneType} from "./kanban/types";

export const laneNames: Record<LaneType, string> = {
    candidates: 'Candidates',
    inProgress: 'In Progress',
    codeReview: 'QA / Code review',
    completed: 'Completed'
}

export const lanes = Object.keys(laneNames) as Array<LaneType>
