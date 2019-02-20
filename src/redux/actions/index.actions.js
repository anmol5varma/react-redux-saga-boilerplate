import { createAction } from 'redux-actions';

// ******************
//  ACTION CONSTANTS
// ******************

export const SAMPLE_ACTION = 'SAMPLE_ACTION';


// ******************
//  ACTION CREATORS
// ******************

export const sampleAction = createAction(SAMPLE_ACTION);
