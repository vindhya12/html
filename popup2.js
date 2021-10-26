window.addEventListener('load', ()=>{
    trigger1=document.querySelector('#trigger');
    modal_Wrapper=document.querySelector('.modalWrapper');
    close_btn=document.querySelector('.close-btn');
    realUploadBtn=document.getElementById("file-upload");
    customeBtn=document.getElementById("custom-file-upload");
    customeText=document.getElementById("custom-text");
    previewContainer=document.getElementById("image-preview");
    previewImage=document.querySelector(".img-prev-image");
    previewDefaultText=document.querySelector(".img-prev-default-text");    
    /* to open the popup window when we click Show popup button */
    trigger1.addEventListener('click',function(){
        openModel();
    });

    /* to close the popup window when we click on the cross button */
    close_btn.addEventListener('click',function(){
    closeModel();
    });

    /* when we click on the background then also our popup window will be closed by this function */
    modal_Wrapper.addEventListener('click',function(e){
        if(e.target !==modal_Wrapper) return;
        closeModel();
    });

    customeBtn.addEventListener('click',function(){
        realUploadBtn.click();
    });

    realUploadBtn.addEventListener('change',function(){
        if(realUploadBtn.value){
            customeText.innerHTML=realUploadBtn.value;
            
            const file=this.files[0];

            if(file){
                const reader=new FileReader();

                previewDefaultText.style.display ="none";
                previewImage.style.display ="block";

                reader.addEventListener("load",function(){
                    console.log(this);
                    previewImage.setAttribute("src", this.result);
                });

                reader.readAsDataURL(file);
            }
        }
        else{
            customeText.innerHTML="No file choosen, yet";
        }
    });

    // customeBtn.addEventListener("change",function(){

    //     const file=this.files[0];

    //     if(file){
    //         const reader=new FileReader();

    //         previewDefaultText.style.display ="none";
    //         previewImage.style.display ="block";

    //         reader.addEventListener("load",function(){
    //             console.log(this);
    //             previewImage.setAttribute("src".this.result);
    //         });

    //         reader.readAsDataURL(file);
    //     }
    // });


});

let trigger1;
let modal_Wrapper;
let close_btn;
let realUploadBtn;
let customeBtn;
let customeText;
let previewContainer;
let previewImage;
let previewDefaultText;

function openModel(){
    modal_Wrapper.classList.add('active');
}
function closeModel(){
    modal_Wrapper.classList.remove('active');
}