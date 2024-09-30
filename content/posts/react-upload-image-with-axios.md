---
title: "React Upload Image With Axios"
date: 2024-09-30T22:20:32+07:00
description: allow users to select a file, preview and upload it using a POST request to an API
tags: [js, react, axios]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // Preview for image files

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Client-side validation: Check file type
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (selectedFile && !allowedTypes.includes(selectedFile.type)) {
      alert('Only JPEG or PNG files are allowed');
      return;
    }

    // Client-side validation: Check file size (max 2MB)
    const maxSize = 2 * 1024 * 1024;
    if (selectedFile && selectedFile.size > maxSize) {
      alert('File size exceeds 2MB');
      return;
    }

    setFile(selectedFile);

    // Show a preview if the file is an image
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const filePreviewURL = URL.createObjectURL(selectedFile);
      setPreview(filePreviewURL);
    }
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    // Create FormData to send the file
    const formData = new FormData();
    formData.append('file', file);

    // Upload file using axios
    try {
      const response = await axios.post('https://examplebbmcode.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('File uploaded successfully!');
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {/* Display file preview if it's an image */}
      {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />}
    </div>
  );
};

export default FileUpload;

```
