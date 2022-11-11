import './style.css';
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import Swal from 'sweetalert2';

const button = document.querySelector('button');
const password = document.querySelector('p');

button.addEventListener('click', () => {
  const randompassword = nanoid();
  password.innerText = randompassword;
});

password.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  Swal.fire(
    'Copiado!',
    'Você copiou sua senha!',
    'success',
  );
});
