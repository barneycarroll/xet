try {module.exports = xet} catch(e){}

function xet(map, key, factory){
  if(map.has(key))
    return map.get(key)
  
  const value = factory()
  
  map.set(key, value)

	return value
}
