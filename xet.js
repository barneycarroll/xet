export default function( key, factory ){
	if( !this.has( key ) )
		this.set( key, factory() )

	return this.get( key )
}