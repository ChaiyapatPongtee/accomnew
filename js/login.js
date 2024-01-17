function toggleEyes() {
  const password = document.getElementById('password');
  const eyes_close = document.getElementById('eyes_close')
  const eyes_open = document.getElementById('eyes_open')
  if(password.type === 'text'){
    password.type = "password"
    eyes_close.classList.remove('d-none')
    eyes_open.classList.add('d-none')
  }else{
    password.type = "text"
    eyes_close.classList.add('d-none')
    eyes_open.classList.remove('d-none')
  }
}