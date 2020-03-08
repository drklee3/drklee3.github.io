const animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: '/js/data.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
});

animation.onComplete = () => {
    console.log("complete")
    const card = document.getElementById("card");
    card.classList.add("visible")
}

console.log("hi")