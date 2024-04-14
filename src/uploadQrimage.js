  import React, { useState } from 'react';
  import axios from 'axios';

  function Imageuploader() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
      setSelectedImage(e.target.files[0]);
    };

    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await axios.post('http://localhost:2711/api/v1/qrcode/addqr', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setMessage(response.data.message);
      } catch (error) {
        console.error('Error uploading image: ', error);
        setMessage('Error uploading image.');
      }
    };

    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload Image</button>
        {message && <p>{message}</p>}
      </div>
    );
  }

  export default Imageuploader;
