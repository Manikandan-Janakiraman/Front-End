import './App.css'
import Banner from './assets/flight.jpg'
import cardbg from './assets/fly.jpg'

const App = () => {
  return (
    <>
      <div className="photography">
        <div className="brand">
          <h1>Soorarai Pottru</h1>
        </div>

      </div>


      <div className="banner">
        <div className="container">
          <img src={Banner} alt="" />
        </div>
      </div>

      <div className="flight">
        <div className="content">
          <h1>Soorarai Pottru</h1>
          <p>
            Soorarai Pottru is an inspiring biographical drama that follows Nedumaaran Rajangam (Maara), a former Air Force captain with an extraordinary dream — to launch a low-cost airline that makes air travel affordable for everyone, especially the common man.
          </p>
          <p>Driven by his determination and fueled by memories of his struggles from a rural background, Maara takes on powerful forces in the aviation industry, including corporate giants who try to crush his ambition.
    </p>
            <p>With the support of his strong-willed wife Bommi, and a few loyal friends, Maara battles financial hurdles, bureaucratic challenges, and personal setbacks. His journey becomes a testament to hope, courage, and the belief that even an ordinary man can achieve extraordinary heights.
            </p>
            <p>The film is inspired by the life of Captain G. R. Gopinath, the founder of Air Deccan.
            </p>
        </div>
        <div className="images">
          <img src="" alt="" />
        </div>
      </div>

      <div className="card">
        <div className="carddetails">
          <div className="cardchild-1">

          </div>
            <div className="cardchild-2">

          </div>
            <div className="cardchild-3">

          </div>
        </div>
      </div>
    </>
  )
}
export default App