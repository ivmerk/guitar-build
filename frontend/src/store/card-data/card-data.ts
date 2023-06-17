import { createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../types/state';
import { NameSpace } from '../../const';
import { loadCardsAction, postCardAction } from '../api-action';

const initialState: CardData = {
  cards: [],
  selectedCard: null,
  sameTypeCards: [],
  hasError: false,
  isCardsLoading: false,
};

export const cardData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCardsAction.pending, (state) => {
        state.isCardsLoading = true;
        state.hasError = false;
      })
      .addCase(loadCardsAction.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.isCardsLoading = false;
        state.hasError = false;
      })
      .addCase(loadCardsAction.rejected, (state) => {
        state.hasError = true;
        state.isCardsLoading = false;
      })
      .addCase(postCardAction.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      });
  },
});
