/* Botón para subir */
window.addEventListener('scroll', function () {
    let btn = document.getElementById('btnSubir');
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

document.getElementById('btnSubir').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Carrusel de cursos */
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
            
            if (i !== index) {
                while (index !== i) {
                    const primerElemento = carrusel.children[0];
                    carrusel.appendChild(primerElemento);
                    index = (index + 1) % dots.length;
                }
                actualizarIndicadores();
            }

            autoPlay = setInterval(() => moverCarrusel(1), 3000);
        });
    });

    actualizarIndicadores();
});

/* Animación */
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function cambiarSlide() {
        slides[index].style.opacity = "0"; 
        index = (index + 1) % slides.length; 
        slides[index].style.opacity = "1"; 
    }

    setInterval(cambiarSlide, 3000); 
});

/* Formulario */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const popup = document.getElementById("popup");
    const contadorElemento = document.getElementById("contador");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); 
                mostrarPopup(); 
            } else {
                alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
            }
        }).catch(() => {
            alert("Error de conexión. Inténtalo más tarde.");
        });
    });

    function mostrarPopup() {
        popup.classList.add("show");

        let tiempoRestante = 10; // 10 segundos
        contadorElemento.textContent = tiempoRestante;

        const intervalo = setInterval(() => {
            tiempoRestante--;
            contadorElemento.textContent = tiempoRestante;

            if (tiempoRestante <= 0) {
                clearInterval(intervalo);
                cerrarPopup();
            }
        }, 1000);
    }

    function cerrarPopup() {
        popup.classList.add("hide");
        setTimeout(() => {
            popup.classList.remove("show", "hide");
        }, 500); 
    }
});
