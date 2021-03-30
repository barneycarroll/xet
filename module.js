export default (map, key, factory) => {
  if(map.has(key))
    return map.get(key)
  
  const value = factory(key, map)
  
  map.set(key, value)

	return value
}
