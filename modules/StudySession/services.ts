import { CreateStudySessionData, StudySessionData } from "./models";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import db from "@/air-flashcards/modules/Firestore";
import { stringLength } from "@firebase/util";

const STUDY_SESSIONS_COLLECTION = "collections/LBz0PhXuEiPEyIy6JloU/studySessions";

export const createStudySession = async (data: CreateStudySessionData) => {
  const docRef = await addDoc(collection(db, STUDY_SESSIONS_COLLECTION), {
    mode: data.mode,
    date: data.date,
    completed: false,
    cardsAmount: data.cardsAmount,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
};

export interface UpdateStudySession extends Omit<StudySessionData, "completed"> {
  sessionId: string;
}

export const updateStudySession = async (data: UpdateStudySession) => {
  const sessionRef = doc(db, STUDY_SESSIONS_COLLECTION, data.sessionId);
  await updateDoc(sessionRef, {
    mode: data.mode,
    date: data.date,
    completed: false,
    cardsAmount: data.cardsAmount,
  });
  console.log("actualizado", sessionRef.id);
};
