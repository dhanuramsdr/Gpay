import React from "react";
 import {useNavigate} from "react-router-dom"

function Paygate  ()  {
   const navigate = useNavigate('');

  
 
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Choose Your Subscription Plan</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="card card-subscription text-center">
              <div className="card-header bg-warning">
                <h3 className="card-title">Silver Plan</h3>
              </div>
              <div className="card-body">
                <h2>₹199/month</h2>
                <p>Access to standard features</p>
                <ul className="l">
                  <li>All schematics images</li>
                  <li>Easy understanding borneo</li>
                  <li>Easy understanding circuit ways</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning" onClick={()=>{navigate('/gpaycomponent')}} >Subscribe Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card card-subscription text-center">
              <div className="card-header bg-primary text-white">
                <h3 className="card-title">Golden Plan</h3>
              </div>
              <div className="card-body">
                <h2>₹4999/month EMI</h2>
                <p>4 Months EMI features</p>
                <h3>Life time Dedicated support</h3>
                <h3>Dedicated web application</h3>
                <ul className="l">
                  <li>Daily Live videoclass 30 mins</li>
                  <li>Display OCA Mannual Type / Machines</li>
                  <li>Display Touch</li>
                  <li>Display Polarizer</li>
                  <li>amoled Polarizer</li>
                  <li>Charging Board </li>
                  <li>Premium Phones Mic Speaker</li>
                  <li>Premium Phones Ringer</li>
                  <li>Finger Prints</li>
                  <li>Bottom Flexes</li>
                  <li>Switches</li>
                  <li>Battery</li>
                  <li>Display</li>
                  <li>All Iphone Oca's</li>
                  <li>All Iphone Glass</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Subscribe Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card card-subscription text-center">
              <div className="card-header bg-success text-white">
                <h3 className="card-title">Platinum Plan</h3>
              </div>
              <div className="card-body">
                <h2>₹9999/month EMI</h2>
                <p>6 Months EMI premium features</p>
                <h3>Life time Dedicated support</h3>
                <h3>Dedicated web application</h3>
                <ul className="l">
                  <li>Android And Iphone</li>
                  <li>Daily Live video class 30 mins</li>
                  <li>Passive Ic's</li>
                  <li>Glued ic</li>
                  <li>Digital mic</li>
                  <li>Network ic</li>
                  <li>Lighting Section</li>
                  <li>Power Section</li>
                  <li>Ringer Section</li>
                  <li>wifi Section</li>
                  <li>Sub Power Section</li>
                  <li>Touch ic Section</li>
                  <li>All Camera ic Section</li>
                  <li>All sensor ic section</li>
                  <li>Haptic ic</li>
                  <li>Usb FLashing</li>
                  <li>Free Frp Tool</li>
                  <li>Software Unlock</li>
                  <li>Paid FLash File Free</li>
                  <li>Daily Self Practical works</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-success">Subscribe Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card card-subscription text-center">
              <div className="card-header bg-secondary text-white">
                <h3 className="card-title">Diamond Plan</h3>
              </div>
              <div className="card-body">
                <h2>₹9999/month EMI</h2>
                <p>12 Months EMI Premium Features </p>
                <h3>Life time Dedicated support</h3>
                <h3>Dedicated web application</h3>
                <ul className="l">
                  <li>Android and Iphone</li>
                  <li>Daily Live video class 30 mins</li>
                  <li>Warranty services</li>
                  <li>CPU Functionalities</li>
                  <li>CPU Reball with warranty</li>
                  <li>New CPU Change</li>
                  <li>CPU Functionalities</li>
                  <li>Memory Functionalities</li>
                  <li>Memory Jtag programing</li>
                  <li>Memory Jtag Repartition</li>
                  <li>Daily Self Practical works</li>
                  <li>Iphone Cpu Changes</li>
                  <li>Iphone Cpu swaps</li>
                  <li>Iphone Memory Jc programing</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paygate;