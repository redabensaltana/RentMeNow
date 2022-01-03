const lightbox = document.createElement('div') // create div
lightbox.id = 'lightbox' // have id called lightbox
document.body.appendChild(lightbox)  // inside body

const images = document.querySelectorAll('img') //var that contains all images
images.forEach(image => {
    image.addEventListener('click' , select => {  //when clicking on image run this code
        lightbox.classList.add('active')            //convert to active
        const img = document.createElement('img')   //create the image to show
        img.className ='expand'          //give the img the expand properties           
        img.src = image.src             //take the source of the selected image

        var inner = document.createElement('div');
        inner.className = 'inner'
        inner.append(img)

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild) //check if there is an image and remove it
        }

        lightbox.appendChild(inner)       //inside lightbox
    })
})


lightbox.addEventListener('click', remove => { // remove lightbox on click
   if(remove.target !== remove.currentTarget)  //current target is lightbox 
   return
    lightbox.classList.remove('active')   
})

