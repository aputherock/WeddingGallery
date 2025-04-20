alert("🌟 Welcome to my Photo Gallery!\nProject by Apurba Goswami 📸");
const images = document.querySelectorAll('.photo');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});
