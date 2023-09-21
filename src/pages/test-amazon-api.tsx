export default function Test(){
    async function getAccessToken() {
        const url = "https://api.webmanza.com/auth/v2/get-access-token";
        const headers = {
          "Origin": "bookshop.webmanza.com"
        };
        const method = "POST";
      
        try {
          const response = await fetch(url, {
            headers,
            method
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log("🚀 ~ file: test-amazon-api.tsx:17 ~ getAccessToken ~ data:", data)
            
            return data; // You can return the parsed JSON response here
          } else {
            throw new Error(`Request failed with status: ${response.status}`);
          }
        } catch (error) {
          console.error("Error:", error);
          throw error; // You can handle the error as needed
        }
      }
    return <>

    
    <button onClick={getAccessToken}>Click for fetching api data</button>
    </>
}