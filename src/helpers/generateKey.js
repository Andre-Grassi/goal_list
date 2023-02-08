function generateKey(decimals) {
  return Math.round(Math.random() * decimals)
}

export default generateKey
