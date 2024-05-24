export function generateShadeColor(hex, amount) {
  let color = parseInt(hex.startsWith('#') ? hex.slice(1) : hex, 16)

  let r = Math.min(255, Math.max(0, (color >> 16) + amount))
  let g = Math.min(255, Math.max(0, ((color & 0x00ff00) >> 8) + amount))
  let b = Math.min(255, Math.max(0, (color & 0x0000ff) + amount))

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export default generateShadeColor
