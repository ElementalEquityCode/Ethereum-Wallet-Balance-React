import { createSlice } from '@reduxjs/toolkit';
import objFromArray from '../utils/objFromArray';
import { chatApi } from '../__fakeApi__/chatApi';

const initialState = {
  activeThreadId: null,
  contacts: {
    byId: {},
    allIds: []
  },
  threads: {
    byId: {},
    allIds: []
  },
  participants: [],
  recipients: []
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getContacts(state, action) {
      const contacts = action.payload;

      state.contacts.byId = objFromArray(contacts);
      state.contacts.allIds = Object.keys(state.contacts.byId);
    },
    getThreads(state, action) {
      const threads = action.payload;

      state.threads.byId = objFromArray(threads);
      state.threads.allIds = Object.keys(state.threads.byId);
    },
    getThread(state, action) {
      const thread = action.payload;

      if (thread) {
        state.threads.byId[thread.id] = thread;

        if (!state.threads.allIds.includes(thread.id)) {
          state.threads.allIds.push(thread.id);
        }

        state.activeThreadId = thread.id;
      } else {
        state.activeThreadId = null;
      }
    },
    markThreadAsSeen(state, action) {
      const threadId = action.payload;
      const thread = state.threads.byId[threadId];

      if (thread) {
        thread.unreadCount = 0;
      }
    },
    resetActiveThread(state) {
      state.activeThreadId = null;
    },
    getParticipants(state, action) {
      state.participants = action.payload;
    },
    addRecipient(state, action) {
      const recipient = action.payload;
      const exists = state.recipients.find((_recipient) => _recipient.id === recipient.id);

      if (!exists) {
        state.recipients.push(recipient);
      }
    },
    removeRecipient(state, action) {
      const recipientId = action.payload;

      state.recipients = state.recipients.filter((recipient) => recipient.id !== recipientId);
    }
  }
});

export const { reducer } = slice;

export const getContacts = () => async (dispatch) => {
  const data = await chatApi.getContacts();

  dispatch(slice.actions.getContacts(data));
};

export const getThreads = () => async (dispatch) => {
  const data = await chatApi.getThreads();

  dispatch(slice.actions.getThreads(data));
};

export const getThread = (threadKey) => async (dispatch) => {
  const data = await chatApi.getThread(threadKey);

  dispatch(slice.actions.getThread(data));
};

export const markThreadAsSeen = (threadId) => async (dispatch) => {
  await chatApi.markThreadAsSeen(threadId);

  dispatch(slice.actions.markThreadAsSeen(threadId));
};

export const resetActiveThread = () => (dispatch) => {
  dispatch(slice.actions.resetActiveThread());
};

export const getParticipants = (threadKey) => async (dispatch) => {
  const data = await chatApi.getParticipants(threadKey);

  dispatch(slice.actions.getParticipants(data));
};

export const addRecipient = (recipient) => (dispatch) => {
  dispatch(slice.actions.addRecipient(recipient));
};

export const removeRecipient = (recipientId) => (dispatch) => {
  dispatch(slice.actions.removeRecipient(recipientId));
};

export default slice;
