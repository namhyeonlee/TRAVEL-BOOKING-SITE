//add btn 클릭하면 파일 선택창이 나타나도록, x를 누르거나 다른 곳에 포거스 되면 닫아지도록
const addBtn = document.querySelector('.add>a');
const addfile = document.querySelector('.addfile');
const addfileImg = document.querySelector('#imagefile');
const close = document.querySelector('.addfile_close');
const body = document.querySelector('body');


addBtn.addEventListener('click', ()=>{
    if(addfile.style.display=='block'){
        addfile.style.display='none';
    }else {
        addfile.style.display='block';
    }
   
});

//다른 영역 클릭시

body.addEventListener('click', (e) => {
    var target = e.target;
    if (target === addBtn || target==addfileImg) {
        return;
    }
   addfile.style.display='none';
});

close.addEventListener('click', ()=>{
    addfile.style.display='none';
});

//preview image
function setThumbnail(event){
   
    var reader = new FileReader();

    reader.onload = function(event){
      
       var img = document.createElement('img');
       img.setAttribute('src', event.target.result);
       document.querySelector('#imgPreview').appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
}