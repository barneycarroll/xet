const test = require( 'tape' )

const formats = [require('./script.js')]

try {
  require('./module_test.js')

  formats.push(require('./module.js'))
}
catch(e){}

formats.forEach(give => {
  test(
    "When called on a Map without an entry for the supplied key",
  
    assert => {
      assert.test(
        "assigns the output of the supplied factory to that key, with key and Map supplied to factory",

        assert => {
          const map = new Map()

          give(map, 'foo', (x, y) => {
            assert.equal(x, 'foo')
            assert.equal(y, map)

            return 'bar'
          })

          assert.equals(map.get('foo'), 'bar')

          assert.end()
        }
      )
  
      assert.test(
        "returns the value",
  
        assert => {
          assert.equals(
            give( new Map(), 'foo', () => 'bar' ),
  
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
  
          give( map, 'foo', () => executed = true )
  
          assert.equals( executed, false )
  
          assert.end()
        }
      )
  
      assert.test(
        "returns the value assigned to that key",
  
        assert => {
          assert.equals(
            give( map, 'foo', () => 'baz' ),
  
            'bar'
          )
  
          assert.end()
        }
      )
    }
  )
})
