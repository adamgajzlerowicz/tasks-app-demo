import * as functions from "firebase-functions";
import {performUpdate} from "./utils";

export const updateCountersOnDelete = functions
    .region("europe-central2")
    .firestore
    .document("boards/{boardId}/tasks/{taskId}")
    .onDelete(async (change, context) => {
      await performUpdate(context.params.boardId);
    });
