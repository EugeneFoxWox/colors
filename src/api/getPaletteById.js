async function getPaletteById(ids) {
  const response = await fetch(`http://localhost:8080/api/palettes?ids=${ids.join(',')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await response.json()
}

export default getPaletteById
