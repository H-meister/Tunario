if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

function uploadFile(url, fileInputId, listId) {
  const fileInput = document.getElementById(fileInputId);
  const formData = new FormData();
  formData.append(fileInputId, fileInput.files[0]);

  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(listId);
      const li = document.createElement('li');
      li.textContent = data.filename;
      list.appendChild(li);
    })
    .catch(err => console.error(err));
}
