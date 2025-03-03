window.addEventListener('scroll', function () {
    let btn = document.getElementById('btnSubir');
    if (window.scrollY > 300) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
});

document.getElementById('btnSubir').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});