document.getElementById('loanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    pan: document.getElementById('pan').value,
    loan: document.getElementById('loan').value,
    loandetails: document.getElementById('loandetails').value,
  };

  fetch('http://localhost:3000/submit_form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
