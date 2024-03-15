const dropzone= document.querySelector(".dropzone");
const fileinput=document.querySelector("#fileinput");
const browsebutton = document.querySelector(".browsebutton");

const host="http://innshare.herokuapp.com/"
const uploadURL='$(host)api/files'

dropzone.addEventListener("dragover",(e)=>{
   e.preventDefault()

    if(!dropzone.classList.contains("dragged")){

    dropzone.classList.add("dragged");}
});

dropzone.addEventListener("dragleave",(e)=>{
    e.preventDefault()
    dropzone.classList.remove("dragged")
   const files=e.dataTransfer.files;
   console.log(files) 
   if (files.length){
    fileinput.files=files;
   }

})
browsebutton.addEventListener("click", ()=>{
    fileinput.click()
})

const uploadfile=()=>{
    const files= fileinput.files[0]
    const formdata= new formdata()
    formdata.append(file)

  const xhr= new XMLHttpRequest();
  xhr.onreadystatechange= ()=>{
    console.log(xhr.readyState)
  }
  xhr.open("POST", uplaodURl)
  xhr.send(formdata)