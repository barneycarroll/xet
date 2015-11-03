import test from 'tape'
import give from './xet.min'

test(
	"When called on a Map without an entry for the supplied key",

	assert => {
		assert.test(
			"assigns the output of the supplied factory to that key",

			assert => {
				const map = new Map()

				map::give( 'foo', () => 'bar' )

				assert.equals( map.get( 'foo' ), 'bar' )

				assert.end()
			}
		)

		assert.test(
			"returns the value",

			assert => {
				assert.equals(
					new Map()::give( 'foo', () => 'bar' ),

					'bar'
				)

				assert.end()
			}
		)
	}
)

test(
	"When called on a Map with an entry at the supplied key",

	assert => {
		const map = new Map().set( 'foo', 'bar' )

		assert.test(
			"doesn't execute the supplied factory",

			assert => {
				let executed = false

				map::give( 'foo', () => executed = true )

				assert.equals( executed, false )

				assert.end()
			}
		)

		assert.test(
			"returns the value assigned to that key",

			assert => {
				assert.equals(
					map::give( 'foo', () => 'baz' ),

					'bar'
				)

				assert.end()
			}
		)
	}
)


