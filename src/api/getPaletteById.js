async function getPaletteById(ids) {
  try {
    const response = await fetch(`http://localhost:8080/api/palettes?ids=${ids.join(',')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if(response.ok){
      return await response.json()
    }
  } catch (error) {
    
  }
  

  
}

export default getPaletteById
