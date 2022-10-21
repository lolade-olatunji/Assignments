const scriptURL = 'https://script.google.com/macros/s/AKfycbzR2vi9TY-zTYGo7Oef9KruugD86gxk7KdXvZ7rCMm7-WoKT_vZWos4N7hkzqbDuMSY/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });