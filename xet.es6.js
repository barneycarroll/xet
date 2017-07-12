export default ( map, key, factory ){
	if( !map.has( key ) )
		map.set( key, factory() )

	return map.get( key )
}
