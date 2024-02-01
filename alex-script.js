const heart = document.querySelector(".likeHeart");
let count = 0;


heart.addEventListener('click', function() {
    count++
    this.classList.toggle('active')
    document.querySelector('.likeCount').innerHTML = `${count} likes`
})