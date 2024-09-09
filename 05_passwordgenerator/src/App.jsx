import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
    if (numberAllowed) {
      str += '9876543210'
    }
    if (charAllowed) {
      str += '{}[]()!@#$%^&*-_+=/'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed]) // memento setPassword

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPassword = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText('You should not copy passwords')
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3'
          >Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={21}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              id='num'
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='num'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              id='sp-char'
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='sp-char'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
