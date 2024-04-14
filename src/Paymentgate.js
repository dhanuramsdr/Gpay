import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Paymentgate() {
  const [backendData, setBackendData] = useState([]);
  const [accountnumber, setAccountnumber] = useState([]);
  const [qrCodeData, setQRCodeData] = useState('');

  useEffect(() => {
    // Fetch data from backend when component mounts
    handleSubmite();
    handleSubmites();
    generateQRCode(); // Generate QR code when component mounts
  }, []); // Empty dependency array to run the effect only once

  const handleSubmite = () => {
    axios.get('http://localhost:2711/api/v1/upinumber/getupi')
      .then((res) => {
        console.log(res.data);
        setBackendData(res.data); // Assuming res.data is an array of objects
      })
      .catch((err) => {
        console.log(err);
        alert('An error occurred while fetching data');
      });
  }

  const handleSubmites = () => {
    axios.get('http://localhost:2711/api/v1/accountnumber/getaccnumber')
      .then((res) => {
        console.log(res.data);
        setAccountnumber(res.data); // Assuming res.data is an array of objects
      })
      .catch((err) => {
        console.log(err);
        alert('An error occurred while fetching data');
      });
  }

  const generateQRCode = async () => {
    try {
      const response = await axios.get(`http://localhost:2711/api/v1/qrcode/getqr`);
      setQRCodeData(response.data); // Set the QR code data to state
    } catch (error) {
      console.error(error);
      alert('An error occurred while generating QR code');
    }
  };

  return (
    <div>
      <div className="row">
        {/* UPI Number Card */}
        <div className="col-md-4">
          {accountnumber.length > 0 && (
            <Card>
              <Card.Body>
                <Card.Title>UPI Number</Card.Title>
                {backendData.map((data, index) => (
                  <div key={index}>
                    <Card.Text>
                      UPI Number: {data.upinumber}
                    </Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          )}
        </div>

        {/* Account Number Card */}
        <div className="col-md-4">
          {backendData.length > 0 && (
            <Card>
              <Card.Body>
                <Card.Title>Account Number</Card.Title>
                {accountnumber.map((data, index) => (
                  <div key={index}>
                    <Card.Text>
                      Account Number: {data.Accountnumber}
                    </Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          )}
        </div>

        {/* QR Code Card */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>QR Code</Card.Title>
              {qrCodeData && <img src={qrCodeData} alt="QR Code" />} {/* Display QR code if data is available */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Paymentgate;
