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

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    let autoPlay = setInterval(() => moverCarrusel(1), 3000);

    function actualizarIndicadores() {
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    function moverCarrusel(direccion = 1) {
        const primerElemento = carrusel.children[0];

        carrusel.style.transition = "transform 0.5s ease-in-out";
        carrusel.style.transform = `translateX(-${direccion * 33.33}%)`;

        setTimeout(() => {
            carrusel.style.transition = "none";
            if (direccion === 1) {
                carrusel.appendChild(primerElemento);
                index = (index + 1) % dots.length;
            } else {
                const ultimoElemento = carrusel.lastElementChild;
                carrusel.prepend(ultimoElemento);
                index = (index - 1 + dots.length) % dots.length;
            }
            carrusel.style.transform = "translateX(0)";
            actualizarIndicadores();
        }, 500);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(autoPlay);
            
            let diferencia = i - index;

            if (diferencia !== 0) {
                let pasos = Math.abs(diferencia);
                let direccion = diferencia > 0 ? 1 : -1;

                let intervalo = setInterval(() => {
                    moverCarrusel(direccion);
                    pasos--;
                    if (pasos === 0) clearInterval(intervalo);
                }, 600);
            }

            autoPlay = setInterval(() => moverCarrusel(1), 3000);
        });
    });

    actualizarIndicadores();
});
