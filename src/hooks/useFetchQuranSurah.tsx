import { fetchSurah, handleSuccessStatus, loadingSurah } from "@/store/apps/blog-posts";
import { useDispatch } from "react-redux";

export const useFetchQuranSurah=()=>{
    const dispatch=useDispatch()


   const handleFetchingData=()=>{
    dispatch(loadingSurah())
    fetch('http://api.alquran.cloud/v1/surah')
    .then(response => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      dispatch(handleSuccessStatus())
      return response.json();
    })
    .then(data => {
        
      // Handle the data here
      console.log(data);
      dispatch(fetchSurah(data))
    })
    .catch(error => {
      // Handle errors here
      console.error('Fetch error:', error);
    });
   }


    return {
        handleFetchingData,

    }

}