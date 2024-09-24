---
title: "jQuery Drag Drop Upload File"
date: 2024-09-24T23:24:54+07:00
description: Enable drag-and-drop for file uploads.
tags: [js, jquery]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
$('#dropzone').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragging');
}).on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragging');
}).on('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragging');
    
    var files = e.originalEvent.dataTransfer.files;
    uploadFiles(files);
});

function uploadFiles(files) {
    var formData = new FormData();
    $.each(files, function(i, file) {
        formData.append('file[]', file);
    });

    $.ajax({
        url: '/upload-files',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log('Files uploaded successfully!');
        }
    });
}

```
