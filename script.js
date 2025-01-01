const turnVisible = document.getElementById('show-contact');
const invisibleForm = document.querySelector('.invisible-contact');
turnVisible.addEventListener('click', () =>{
    invisibleForm.style.display = 'block';
})