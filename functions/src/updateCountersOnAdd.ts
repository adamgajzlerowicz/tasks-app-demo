import * as functions from "firebase-functions";
import {performUpdate} from "./utils";

export const updateCountersOnAdd = functions
    .region("europe-central2")
    .firestore
    .document("boards/{boardId}/tasks/{taskId}")
    .onWrite(async (change, context) => {
      await performUpdate(context.params.boardId);
    });
