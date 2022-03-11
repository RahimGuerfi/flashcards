import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

//Slice
const initialState = {
  quizzes: {}
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

//actions
export const { addQuiz } = quizzesSlice.actions;

export const addQuizthunk = (payload) => {
  return (dispatch) => {
    // dispatch multiple actions here
    dispatch(addQuiz(payload));
    dispatch(
      addQuizToTopic({
        topicId: payload.topicId,
        quizId: payload.id
      })
    );
  };
};

//selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
//reducer
export default quizzesSlice.reducer;
