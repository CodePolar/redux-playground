import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ListItemType {
    title: string,
    completed: boolean
}

export interface ListState {
    list: ListItemType[],
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
        add: (state: ListState, action: PayloadAction<ListItemType>) => {
            state.list.push(action.payload);
        },
        done: (state: ListState, action: PayloadAction<number>) => {
            state.list[action.payload].completed = true;
        }
    }  
})

export const { add, done } = listSlice.actions;
export const selectList =  (state: RootState) => state.list.list;

export default listSlice.reducer;