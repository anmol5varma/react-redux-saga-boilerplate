import {
    SAMPLE_ACTION
  } from '../actions/index.actions';
  
  const initialState = {
    value: null,
  };
  
  export default function sample(state = initialState, { type, payload }) {
    switch (type) {
      case SAMPLE_ACTION: {
        return {
          value: payload,
        };
      }
      default: {
        return state;
      }
    }
  }