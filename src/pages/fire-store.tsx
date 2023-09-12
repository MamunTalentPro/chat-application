// pages/index.tsx
import { db } from '@/firestore';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
 
interface DataItem {
  id: string;
 name: string;
  // Define your data fields with appropriate types here
}
const dbInstance = collection(db, 'test');
    
export default function Home() {
  const [data, setData] = useState<any>();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        getDocs(dbInstance)
        .then((data) => {
       
          
         const newData =   data.docs.map((item)=>{
                return { ...item.data(), id: item.id }
            })
            setData(newData)
            
           
        })
      
        // const documents: DataItem[] = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const saveNote = async() => {
 const docRef =await   addDoc(dbInstance, {
        id: "2",
        name: "test12"
    })
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const addedData = docSnapshot.data();
        console.log("🚀 Data added to Firestore:", addedData);
    } else {
        console.log("🚀 Document does not exist in Firestore.");
    }
       
}

  return (
    <div>
      <h1>Firestore Data</h1>
      <button onClick={saveNote}>Save</button>
      
      <ul>
        {
            data && data.map((item:any,index:number)=>{
                return <p key={index}>
{item.name}
                </p>

            })
        }
        
      </ul>
    </div>
  );
}
