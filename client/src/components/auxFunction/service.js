
import 'regenerator-runtime/runtime'

  
  export async function fetchUpdate (uri, id, data){
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(uri+'/'+ id, settings);
    console.log("Updated ",response.json());
    }