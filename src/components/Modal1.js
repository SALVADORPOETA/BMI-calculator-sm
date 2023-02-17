import './Modal.css';
import React from 'react';

const Modal1 = ({open, onClose}) => {

    function calculateBmi() {
        let weight = document.getElementById('weight').value
        let height = document.getElementById('height').value

        let bmi = (weight / (height * height) * 703)

        document.getElementById('heading').innerHTML = 'Your BMI is: '
        document.getElementById('bmi-output').innerHTML = bmi.toFixed(2) 

        if (bmi <= 24.9) {
            document.getElementById('message').innerHTML = 'You are underweight'
        } else if (bmi >= 25 && bmi <= 29.9) {
            document.getElementById('message').innerHTML = 'You are at a healthy weight'
        } else {
            document.getElementById('message').innerHTML = 'You are overweight'
        }

    }

    function reload() {
        document.getElementById('weight').value = ''
        document.getElementById('height').value = ''
        document.getElementById('heading').innerHTML = ''
        document.getElementById('bmi-output').innerHTML = ''
        document.getElementById('message').innerHTML = ''
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
                            <label htmlFor="weight">Weight (lbs)</label>
                            <input id="weight" type="numbers"/><br />
                            <label htmlFor="weight">Height (in)</label>
                            <input id="height" type="numbers"/><br />
                        </div>
                        <div className="button-container">    
                            <button className='buttonV' onClick={() => calculateBmi()}>Submit</button> 
                            <button className='buttonV' onClick={() => reload()}>Clear</button> {/*Revisar el htmlonclick onclick*/}
                        </div>
                        <h4 id="heading" > </h4>
                        <p id="bmi-output" ></p>
                        <p id="message" ></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal1
