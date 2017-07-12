module.exports = function xet( map, key, factory ){
	if( !map.has( key ) )
		map.set( key, factory() )

	return map.get( key )
}
