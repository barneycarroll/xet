export default (map, key, factory) => {
  if(map.has(key))
    return map.get(key)
  
  const value = factory()
  
  map.set(key, value)

	return value
}
