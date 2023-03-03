import React, { useState } from 'react';
import './Modal.css';

const Modal1 = ({open, onClose}) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault()

    if (weight !== '' && height !== '') {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(2))

      // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are at a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  }
  
  if (!open) return null
  return (
    <div onClick={onClose} className='overlay1' >
      <div onClick={(e)=> {
        e.stopPropagation()
      }} className="modalContainer1">
        <img src="https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/assorted_running/path_woman.jpg&nw=780" alt="/" className='img1' />           
        <div className="modalRight1">
          <p onClick={onClose} className="closeBtn1">X</p>
          <div className="content1">
          <div className="center">
            <h2>BMI Calculator</h2>
              <div className="center">
                <form onSubmit={calcBmi} >
                  <div>
                    <label>Weight (lbs)</label>
                    <input value={weight} onChange={(e) => setWeight(e.target.value) } />
                  </div>
                  <div>
                    <label>Height (in)</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value) } />
                  </div>
                  <div>
                    <button className="buttonV" type="submit" >Submit</button>
                    <button className="buttonV" onClick={reset} type="submit" >Clear</button>
                    <div>
                      <h3>
                        Your BMI is:
                      </h3>  
                        {bmi}
                      <p>{message}</p>
                    </div>
                  </div>
                </form>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal1
