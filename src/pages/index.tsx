
import { useFetchQuranSurah } from '@/hooks/useFetchQuranSurah'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'


export default function Home() {
  const dispatch=useDispatch()
  const counter =useSelector((state:any)=>state.counter)
  const data =useSelector((state:any)=>state.surahList)
  const {handleFetchingData}=useFetchQuranSurah()
  useEffect(()=>{
    handleFetchingData()

  },[])

  console.log("🚀 ~ file: index.tsx:18 ~ Home ~   data?.data?.isLoading:",   data?.isSuccess)
  if(  data?.isLoading)
  <p>loading.......</p>
  if(  data?.isSuccess){
   
    Swal.fire({
     
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  
 
  return (
   <>
{
  data && data?.data?.data?.map((information:any,index:number)=>{
    return <p key={index}>
      {information.englishName}

    </p>
  })
}
  
   </>
  )
}
