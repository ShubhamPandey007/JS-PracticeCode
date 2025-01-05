// const allImage = document.images
// const allImage = document.getElementsByTagName('img');
// const cssImage = document.getElementsByClassName('css-image');
// const imgId = document.getElementById('css-img');
// const cssImg = document.querySelector('.css-imgae');
// const Imgcss = document.querySelectorAll('#css-imgae');

// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// jsImage.src = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8= '

const allImages = document.querySelectorAll('img')

const imgagesUrl = [
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://as2.ftcdn.net/v2/jpg/06/51/10/21/1000_F_651102196_y8WdERB4RoELqyXxU8Wxgx7pENyezwO6.jpg'
]

// allImages[0].src = imgagesUrl[0]
// allImages[1].src = imgagesUrl[1]
// allImages[2].src = imgagesUrl[2]

////////use for loop to change images url

for(let i=0; i<allImages.length; i++) {
    allImages[i].src = imgagesUrl[i] 
}

////////use forEach to change images url

allImages.forEach((image, i) => {
    image.src = imgagesUrl[i]

}) 