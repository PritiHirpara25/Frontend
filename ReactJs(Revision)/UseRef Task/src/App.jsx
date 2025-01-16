import './App.css'
import Counter from './Counter'
import Focus from './Focus'
import OwnCom from './OwnCom'
import Video from './Video'

function App() {

  return (
    <div className='grid grid-cols-2 m -5'>
      <div>
        <h1 className='text-2xl font-bold'>1.Focusing a text input</h1>
        <Focus />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>2. Scrolling an image into view</h1>
      </div>
      <div>
        <h1 className='text-2xl font-bold'>3. Playing and pausing a video</h1>
        <Video/>
      </div>
      <div>
        <h1 className='text-2xl font-bold'>4. Exposing a ref to your own component</h1>
        <OwnCom />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>5. Click counter</h1>
        <Counter />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>6. A stopwatch</h1>
      </div>
    </div>
  )
}

export default App
