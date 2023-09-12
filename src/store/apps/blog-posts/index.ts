import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    data:null,
    isLoading:false,
    isSuccess:false
}

export const surahSlice = createSlice({
  name: 'surah',
  initialState,
  reducers: {

   
    fetchSurah:(state,action)=>{
        state.data=action.payload;
    },
    loadingSurah:(state)=>{
        
        state.isLoading=true
        state.isSuccess=false;

    },
    handleSuccessStatus:(state)=>{
        state.isLoading=false,
        state.isSuccess=true
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { fetchSurah ,loadingSurah,handleSuccessStatus} = surahSlice.actions

export default surahSlice.reducer