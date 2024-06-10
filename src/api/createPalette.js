async function createPalette(collection) {
  const response = await fetch(`https://back-colors.containers.cloud.ru/api/palettes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(collection),
  })
  return await response.json()
}

export default createPalette
