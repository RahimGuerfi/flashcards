import { createSlice } from "@reduxjs/toolkit";

//Slice
const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload;
      const topic = { ...action.payload, quizIds: [] };
      state.topics[id] = topic;
    },
    addQuizToTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

//actions
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
//selectors
export const selectTopics = (state) => state.topics.topics;
//reducer
export default topicsSlice.reducer;
