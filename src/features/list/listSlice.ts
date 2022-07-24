import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ListState {
    list: string[],
    loading: string
}

const initialState: ListState = {
    list: [],
    loading: "idl"
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        }
    }  
})

export const { increment } = listSlice.actions;
export const selectList =  (state: RootState) => state.list.list;

export default listSlice.reducer;