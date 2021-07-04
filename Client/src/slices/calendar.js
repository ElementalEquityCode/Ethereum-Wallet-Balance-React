import { createSlice } from '@reduxjs/toolkit';
import { calendarApi } from '../__fakeApi__/calendarApi';

const initialState = {
  events: [],
  isModalOpen: false,
  selectedEventId: null,
  selectedRange: null
};

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getEvents(state, action) {
      state.events = action.payload;
    },
    createEvent(state, action) {
      state.events.push(action.payload);
    },
    selectEvent(state, action) {
      state.isModalOpen = true;
      state.selectedEventId = action.payload;
    },
    updateEvent(state, action) {
      const event = action.payload;

      state.events = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }

        return _event;
      });
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
    selectRange(state, action) {
      const { start, end } = action.payload;

      state.isModalOpen = true;
      state.selectedRange = {
        start,
        end
      };
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedEventId = null;
      state.selectedRange = null;
    }
  }
});

export const { reducer } = slice;

export const getEvents = () => async (dispatch) => {
  const data = await calendarApi.getEvents();

  dispatch(slice.actions.getEvents(data));
};

export const createEvent = (createData) => async (dispatch) => {
  const data = await calendarApi.createEvent(createData);

  dispatch(slice.actions.createEvent(data));
};

export const selectEvent = (eventId) => async (dispatch) => {
  dispatch(slice.actions.selectEvent(eventId));
};

export const updateEvent = (eventId, update) => async (dispatch) => {
  const data = await calendarApi.updateEvent({
    eventId,
    update
  });

  dispatch(slice.actions.updateEvent(data));
};

export const deleteEvent = (eventId) => async (dispatch) => {
  await calendarApi.deleteEvent(eventId);

  dispatch(slice.actions.deleteEvent(eventId));
};

export const selectRange = (start, end) => (dispatch) => {
  dispatch(slice.actions.selectRange({ start, end }));
};

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export default slice;
