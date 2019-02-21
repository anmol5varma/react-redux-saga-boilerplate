import { createAction } from 'redux-actions';

// ******************
//  ACTION CONSTANTS
// ******************

export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const SET_SAMPLE_ACTION = 'SET_SAMPLE_ACTION';


// ******************
//  ACTION CREATORS
// ******************

export const sampleAction = createAction(SAMPLE_ACTION);
export const setSampleAction = createAction(SET_SAMPLE_ACTION);
