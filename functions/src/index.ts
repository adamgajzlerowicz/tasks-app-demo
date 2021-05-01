import * as functions from "firebase-functions";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBY8dOhtotTEc8LblVNHxjW2Et2TFlj4UM",
  authDomain: "tasks-app-demo-312219.firebaseapp.com",
  projectId: "tasks-app-demo-312219",
  storageBucket: "tasks-app-demo-312219.appspot.com",
  messagingSenderId: "22392413963",
  appId: "1:22392413963:web:fb36b0633f0d559d05cc0e",
});

export const updateCounters = functions
    .firestore
    .document("boards/{boardId}/tasks/{taskId}")
    .onWrite(async (change, context) => {
      const boardId = context.params.boardId;
      const result = await firebase.firestore()
          .collection("boards")
          .doc(context.params.boardId)
          .collection("tasks")
          .get();

      await firebase.firestore()
          .collection("boards")
          .doc(boardId)
          .update({
            ["num_tasks"]: result.size,
          });
    });
