import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SurveyState {
  stakeholder: string;
  zone: string;
  consentGiven: boolean;
  // add other survey data fields as required
}

const initialState: SurveyState = {
  stakeholder: '',
  zone: '',
  consentGiven: false
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setStakeholder(state, action: PayloadAction<string>) {
      state.stakeholder = action.payload;
    },
    setZone(state, action: PayloadAction<string>) {
      state.zone = action.payload;
    },
    setConsent(state, action: PayloadAction<boolean>) {
      state.consentGiven = action.payload;
    }
  }
});

export const { setStakeholder, setZone, setConsent } = surveySlice.actions;
export default surveySlice.reducer;

