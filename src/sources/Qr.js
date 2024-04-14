// QRCodeGenerator.js

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

function QRCodeGenerator() {
  const [upiNumber, setUpiNumber] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:2711/generate-qrcode', { upiNumber });
      setQRCodeURL(response.data.qrCodeURL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter UPI Number"
        value={upiNumber}
        onChange={(e) => setUpiNumber(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeURL && <QRCode value={qrCodeURL} />}
    </div>
  );
}

export default QRCodeGenerator;
