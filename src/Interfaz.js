import Swal from 'sweetalert2';
import Game from './Game.js';

let btn_player1 = document.getElementById('btn_player1');
let btn_player2 = document.getElementById('btn_player2');
let player1, player2, pj1 = '', pj2 = '', aceptar = 0;
let turno = 1;


const Ataque = {
    "Goku": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(255, 0, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Kame... Kame... Hame... Haaa!!!!",
        "ki": "AAAHHH!!!",
        "curar": "Ta bien!! 💶",
        "imagenBase": "./public/img/Goku/base.png",
        "imagenAtk1": "./public/img/Goku/basico.png",
        "imagenAtk2": "./public/img/Goku/especial.png",
        "imagenCurar": "./public/img/Goku/curar.png"
    },
    "Vegitto": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(0, 0, 255, 0.5))",
        "atk1": "Attaque de ki!!",
        "atk2": "Kame... Kame... Hame... Haaa!!!!",
        "ki": "AAAHHH!!!",
        "curar": "Como nuevo!!! 💶",
        "imagenBase": "./public/img/Vegitto/base.png",
        "imagenAtk1": "./public/img/Vegitto/basico.png",
        "imagenAtk2": "./public/img/Vegitto/especial.png",
        "imagenCurar": "./public/img/Vegitto/curar.png"
    },
    "Trunks": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(128, 0, 128, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Espada del futuro!!",
        "ki": "Haaaa!!!",
        "curar": "Listo para seguir!! 💪",
        "imagenBase": "./public/img/Trunks/base.png",
        "imagenAtk1": "./public/img/Trunks/basico.png",
        "imagenAtk2": "./public/img/Trunks/especial.png",
        "imagenCurar": "./public/img/Trunks/curar.png"
    },
    "Gohan": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(255, 165, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Kamehameha!!!",
        "ki": "AAAHHH!!!",
        "curar": "Me siento mejor!! 💊",
        "imagenBase": "./public/img/Gohan/base.png",
        "imagenAtk1": "./public/img/Gohan/basico.png",
        "imagenAtk2": "./public/img/Gohan/especial.png",
        "imagenCurar": "./public/img/Gohan/curar.png"
    },
    "Veguetta": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(255, 0, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Final Flash!!!",
        "ki": "AAAHHH!!!",
        "curar": "Listo para la batalla!! 💥",
        "imagenBase": "./public/img/Veguetta/base.png",
        "imagenAtk1": "./public/img/Veguetta/basico.png",
        "imagenAtk2": "./public/img/Veguetta/especial.png",
        "imagenCurar": "./public/img/Veguetta/curar.png"
    },
    "Pikoro": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(0, 128, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Makankosappo!!!",
        "ki": "Haaaa!!!",
        "curar": "Regeneración completa!! 🌱",
        "imagenBase": "./public/img/Pikoro/base.png",
        "imagenAtk1": "./public/img/Pikoro/basico.png",
        "imagenAtk2": "./public/img/Pikoro/especial.png",
        "imagenCurar": "./public/img/Pikoro/curar.png"
    },
    "Gogeta": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(255, 215, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Big Bang Kamehameha!!!",
        "ki": "AAAHHH!!!",
        "curar": "Como nuevo!! 💫",
        "imagenBase": "./public/img/Gogeta/base.png",
        "imagenAtk1": "./public/img/Gogeta/basico.png",
        "imagenAtk2": "./public/img/Gogeta/especial.png",
        "imagenCurar": "./public/img/Gogeta/curar.png"
    },
    "Cell": {
        "color": "linear-gradient(to right, rgba(67, 198, 172, 0.5), rgba(0, 255, 0, 0.5))",
        "atk1": "Ataque de ki!!",
        "atk2": "Poder Saiyano",
        "ki": "AAAHHH!!!",
        "curar": "Regeneración completa!! 🧬",
        "imagenBase": "./public/img/Cell/base.png",
        "imagenAtk1": "./public/img/Cell/basico.png",
        "imagenAtk2": "./public/img/Cell/especial.png",
        "imagenCurar": "./public/img/Cell/curar.png"
    }
};

let historial = {
    victoriasJugador1: 0,
    victoriasJugador2: 0,
};

const mostrarHistorial = () => {
    console.log("Mostrando historial...");
    document.getElementById('victorias-jugador1').innerText = historial.victoriasJugador1;
    document.getElementById('victorias-jugador2').innerText = historial.victoriasJugador2;

    revancha();
};

const revancha = () => {
    Swal.fire({
        title: "¿Quieres una revancha?",
        text: "¿Deseas jugar de nuevo con los mismos personajes?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        background: "#007BFF", 
        color: "#FFFFFF", 
        confirmButtonColor: "#28a745", 
        cancelButtonColor: "#dc3545"
    }).then((result) => {
        if (result.isConfirmed) {
            player1 = new Game(player1.getUserName());
            player2 = new Game(player2.getUserName());

            document.getElementById("vida_py1").style.width = "100%";
            document.getElementById("vida_py1").innerText = "100%";
            document.getElementById("ki_py1").style.width = "100%";
            document.getElementById("ki_py1").innerText = "100%";
            document.getElementById("energia_py1").style.width = "100%";
            document.getElementById("energia_py1").innerText = "100%";

            document.getElementById("vida_py2").style.width = "100%";
            document.getElementById("vida_py2").innerText = "100%";
            document.getElementById("ki_py2").style.width = "100%";
            document.getElementById("ki_py2").innerText = "100%";
            document.getElementById("energia_py2").style.width = "100%";
            document.getElementById("energia_py2").innerText = "100%";


            turno = 1;
            actualizarBotones();
        } else {

            location.reload();
        }
    });
};

const alternarTurno = () => {
    turno = turno === 1 ? 2 : 1;
    if (turno === 1) {
        player1.incrementarTurno();
    } else {
        player2.incrementarTurno();
    }
    actualizarBotones();
};

const actualizarBotones = () => {
    if (turno === 1) {
        document.getElementById('btn_atk_py1').disabled = false;
        document.getElementById('btn_esp_py1').disabled = false;
        document.getElementById('btn_ermi_py1').disabled = false;
        document.getElementById('btn_ki_py1').disabled = false;

        document.getElementById('btn_atk_py2').disabled = true;
        document.getElementById('btn_esp_py2').disabled = true;
        document.getElementById('btn_ermi_py2').disabled = true;
        document.getElementById('btn_ki_py2').disabled = true;
    } else {
        document.getElementById('btn_atk_py1').disabled = true;
        document.getElementById('btn_esp_py1').disabled = true;
        document.getElementById('btn_ermi_py1').disabled = true;
        document.getElementById('btn_ki_py1').disabled = true;

        document.getElementById('btn_atk_py2').disabled = false;
        document.getElementById('btn_esp_py2').disabled = false;
        document.getElementById('btn_ermi_py2').disabled = false;
        document.getElementById('btn_ki_py2').disabled = false;
    }
};

const iniciar_player1 = () => {
    document.getElementById('player1').classList.add("d-none");
    aceptar++;
    if (aceptar === 2) {
        document.getElementById('iniciar_juego').classList.remove('d-none');
        let timerInterval;
        Swal.fire({
            title: "INICIAR COMBATE",
            html: "EN <b>3</b> segundos",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timer.textContent = "3";
                    timerInterval = setInterval(() => {
                        let timeLeft = Swal.getTimerLeft();
                        timer.textContent = Math.floor(timeLeft / 1000);
                    }, 1000);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
                Swal.fire({
                    title: "Inicia el jugador 1",
                    text: "El jugador 2 no podrá hacer nada hasta que el jugador 1 haga un movimiento",
                    icon: "success"
                });
                actualizarBotones();
            }
        });
    }
};

const iniciar_player2 = () => {
    document.getElementById('player2').classList.add("d-none");
    aceptar++;
    if (aceptar === 2) {
        document.getElementById('iniciar_juego').classList.remove('d-none');
        let timerInterval;
        Swal.fire({
            title: "INICIAR COMBATE",
            html: "EN <b>3</b> segundos",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timer.textContent = "3";
                    timerInterval = setInterval(() => {
                        let timeLeft = Swal.getTimerLeft();
                        timer.textContent = Math.floor(timeLeft / 1000);
                    }, 1000);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
                Swal.fire({
                    title: "Inicia el jugador 1",
                    text: "El jugador 2 no podrá hacer nada hasta que el jugador 1 haga un movimiento",
                    icon: "success"
                });
                actualizarBotones();
            }
        });
    }
};

let seleccion1 = document.getElementById('player1_seleccion');
seleccion1.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        pj1 = event.target.alt;

        seleccion1.querySelectorAll('img').forEach((img) => {
            img.classList.remove('btn-warning');
            img.classList.add('btn-danger');
        });

        event.target.classList.remove('btn-danger');
        event.target.classList.add('btn-warning');

        console.log("Personaje 1 seleccionado:", pj1);
    }
});

let seleccion2 = document.getElementById('player2_seleccion');
seleccion2.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        pj2 = event.target.alt;

        seleccion2.querySelectorAll('img').forEach((img) => {
            img.classList.remove('btn-warning');
            img.classList.add('btn-danger');
        });

        event.target.classList.remove('btn-danger');
        event.target.classList.add('btn-warning');

        console.log("Personaje 2 seleccionado:", pj2);
    }
});

btn_player1.addEventListener('click', () => {
    let user_name1 = document.getElementById('user_name1').value;
    if (!user_name1) {
        Swal.fire({
            title: "Advertencia para el jugador 1",
            text: "Debes ingresar un nombre de usuario.",
            icon: "warning"
        });
    } else {
        player1 = new Game(user_name1);
        if (!pj1) {
            Swal.fire({
                title: "Advertencia para el jugador 1",
                text: "Debes elegir un personaje.",
                icon: "warning"
            });
        } else {
            document.getElementById('p1').innerText = user_name1.toUpperCase();
            document.getElementById('avatar1').src = `./public/img/${pj1}/base.png`;
            iniciar_player1();
        }
    }
});

btn_player2.addEventListener('click', () => {
    let user_name2 = document.getElementById('user_name2').value;
    if (!user_name2) {
        Swal.fire({
            title: "Advertencia para el jugador 2",
            text: "Debes ingresar un nombre de usuario.",
            icon: "warning"
        });
    } else {
        player2 = new Game(user_name2);
        if (!pj2) {
            Swal.fire({
                title: "Advertencia para el jugador 2",
                text: "Debes elegir un personaje.",
                icon: "warning"
            });
        } else {
            document.getElementById('p2').innerText = user_name2.toUpperCase();
            document.getElementById('avatar2').src = `./public/img/${pj2}/base.png`;
            iniciar_player2();
        }
    }
});

document.getElementById("btn_atk_py1").addEventListener('click', () => {
    if (player1.getKi() < 5 || player1.getEnergia() < 10) {
        Swal.fire({
            icon: "error",
            title: "Sin energía suficiente",
            text: "¡No tienes suficiente ki o energía para atacar!",
            color: "#d33",
            background: "#f5f5f5",
        });
        return;
    } else {
        player1.atk_basico(player2);
        let porcentaje = parseInt((player1.getKi() * 100) / 80);
        document.getElementById('ki_py1').style.width = `${porcentaje}%`;
        document.getElementById('ki_py1').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player1.getEnergia() * 100) / 90);
        document.getElementById("energia_py1").style.width = `${porcentaje}%`;
        document.getElementById("energia_py1").innerText = `${porcentaje}%`;

        let vidaJugador2 = player2.getVida();
        porcentaje = parseInt((vidaJugador2 * 100) / 100);
        document.getElementById("vida_py2").style.width = `${porcentaje}%`;
        document.getElementById("vida_py2").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj1].atk1,
            text: "",
            width: 600,
            color: "#716add",
            background: "transparent",
            imageUrl: `./public/img/${pj1}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Básico",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });

        if (vidaJugador2 <= 0) {
            historial.victoriasJugador1++;
            console.log("Historial actualizado:", historial);
            mostrarHistorial();
        } else {
            alternarTurno();
        }
    }
});

document.getElementById("btn_esp_py1").addEventListener('click', () => {
    if (player1.getKi() < 20 || player1.getEnergia() < 30) {
        Swal.fire({
            icon: "error",
            title: "Sin energía suficiente",
            text: "¡No tienes suficiente ki o energía para atacar!",
            color: "#d33",
            background: "#f5f5f5",
        });
        return;
    } else {
        if (!player1.atk_especial(player2)) {
            Swal.fire({
                icon: "error",
                title: "Ataque especial no disponible",
                text: "Debes esperar 2 turnos para usar el ataque especial nuevamente.",
                color: "#d33",
                background: "#f5f5f5",
            });
            return;
        }

        let porcentaje = parseInt((player1.getKi() * 100) / 80);
        document.getElementById('ki_py1').style.width = `${porcentaje}%`;
        document.getElementById('ki_py1').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player1.getEnergia() * 100) / 90);
        document.getElementById("energia_py1").style.width = `${porcentaje}%`;
        document.getElementById("energia_py1").innerText = `${porcentaje}%`;

        let vidaJugador2 = player2.getVida();
        porcentaje = parseInt((vidaJugador2 * 100) / 100);
        document.getElementById("vida_py2").style.width = `${porcentaje}%`;
        document.getElementById("vida_py2").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj1].atk2,
            text: "",
            width: 600,
            color: "#716add",
            background: "transparent",
            imageUrl: `./public/img/${pj1}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Especial",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });

        if (vidaJugador2 <= 0) {
            historial.victoriasJugador1++;
            console.log("Historial actualizado:", historial);
            mostrarHistorial();
        } else {
            alternarTurno();
        }
    }
});

document.getElementById("btn_ki_py1").addEventListener('click', () => {
    if (player1.getKi() >= 80) {
        Swal.fire({
            icon: "error",
            title: "Tu ki está al 100%",
            text: "¡No puedes regenerar más tu ki!",
            color: "#d33",
            background: "#f5f5f5",
        });
    } else {
        player1.atk_regenerarki();
        let porcentaje = parseInt((player1.getKi() * 100) / 80);
        document.getElementById('ki_py1').style.width = `${porcentaje}%`;
        document.getElementById('ki_py1').innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj1].ki,
            text: "",
            width: 600,
            background: "transparent",
            imageUrl: `./public/img/${pj1}/energia.png`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "regeneración",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });
    }
    alternarTurno();
});

document.getElementById("btn_ermi_py1").addEventListener('click', () => {
    let semilla_Span = document.getElementById('se_p1');
    let contador_semilla = parseInt(semilla_Span.innerText);
    if (contador_semilla > 0) {
        contador_semilla--;
        semilla_Span.innerText = contador_semilla;
        player1.atk_SemillaErmitanio();

        let porcentaje = parseInt((player1.getKi() * 100) / 80);
        document.getElementById('ki_py1').style.width = `${porcentaje}%`;
        document.getElementById('ki_py1').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player1.getEnergia() * 100) / 90);
        document.getElementById("energia_py1").style.width = `${porcentaje}%`;
        document.getElementById("energia_py1").innerText = `${porcentaje}%`;

        porcentaje = parseInt((player1.getVida() * 100) / 100);
        document.getElementById("vida_py1").style.width = `${porcentaje}%`;
        document.getElementById("vida_py1").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj1].curar,
            text: "",
            width: 600,
            background: "transparent",
            imageUrl: `./public/img/${pj1}/curar.png`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "curación",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Sin semillas",
            text: "¡Te has quedado sin semillas, no puedes regenerarte!"
        });
    }
    alternarTurno();
});

document.getElementById("btn_atk_py2").addEventListener('click', () => {
    if (player2.getKi() < 5 || player2.getEnergia() < 10) {
        Swal.fire({
            icon: "error",
            title: "Sin energía suficiente",
            text: "¡No tienes suficiente ki o energía para atacar!",
            color: "#d33",
            background: "#f5f5f5",
        });
        return;
    } else {
        player2.atk_basico(player1);
        let porcentaje = parseInt((player2.getKi() * 100) / 80);
        document.getElementById('ki_py2').style.width = `${porcentaje}%`;
        document.getElementById('ki_py2').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player2.getEnergia() * 100) / 90);
        document.getElementById("energia_py2").style.width = `${porcentaje}%`;
        document.getElementById("energia_py2").innerText = `${porcentaje}%`;

        let vidaJugador1 = player1.getVida();
        porcentaje = parseInt((vidaJugador1 * 100) / 100);
        document.getElementById("vida_py1").style.width = `${porcentaje}%`;
        document.getElementById("vida_py1").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj2].atk1,
            text: "",
            width: 600,
            color: "#716add",
            background: "transparent",
            imageUrl: `./public/img/${pj2}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Básico",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });

        if (vidaJugador1 <= 0) {
            historial.victoriasJugador2++;
            console.log("Historial actualizado:", historial);
            mostrarHistorial();
        } else {
            alternarTurno();
        }
    }
});

document.getElementById("btn_esp_py2").addEventListener('click', () => {
    if (player2.getKi() < 20 || player2.getEnergia() < 30) {
        Swal.fire({
            icon: "error",
            title: "Sin energía suficiente",
            text: "¡No tienes suficiente ki o energía para atacar!",
            color: "#d33",
            background: "#f5f5f5",
        });
        return;
    } else {
        if (!player2.atk_especial(player1)) {
            Swal.fire({
                icon: "error",
                title: "Ataque especial no disponible",
                text: "Debes esperar 2 turnos para usar el ataque especial nuevamente.",
                color: "#d33",
                background: "#f5f5f5",
            });
            return;
        }

        let porcentaje = parseInt((player2.getKi() * 100) / 80);
        document.getElementById('ki_py2').style.width = `${porcentaje}%`;
        document.getElementById('ki_py2').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player2.getEnergia() * 100) / 90);
        document.getElementById("energia_py2").style.width = `${porcentaje}%`;
        document.getElementById("energia_py2").innerText = `${porcentaje}%`;

        let vidaJugador1 = player1.getVida();
        porcentaje = parseInt((vidaJugador1 * 100) / 100);
        document.getElementById("vida_py1").style.width = `${porcentaje}%`;
        document.getElementById("vida_py1").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj2].atk2,
            text: "",
            width: 600,
            color: "#716add",
            background: "transparent",
            imageUrl: `./public/img/${pj2}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Especial",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });

        if (vidaJugador1 <= 0) {
            historial.victoriasJugador2++;
            console.log("Historial actualizado:", historial);
            mostrarHistorial();
        } else {
            alternarTurno();
        }
    }
});


document.getElementById("btn_ki_py2").addEventListener('click', () => {
    if (player2.getKi() >= 80) {
        Swal.fire({
            icon: "error",
            title: "Tu ki está al 100%",
            text: "¡No puedes regenerar más tu ki!",
            color: "#d33",
            background: "#f5f5f5",
        });
    } else {
        player2.atk_regenerarki();
        let porcentaje = parseInt((player2.getKi() * 100) / 80);
        document.getElementById('ki_py2').style.width = `${porcentaje}%`;
        document.getElementById('ki_py2').innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj2].ki,
            text: "",
            width: 600,
            background: "transparent",
            imageUrl: `./public/img/${pj2}/energia.png`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "regeneración",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });
    }
    alternarTurno();
});


document.getElementById("btn_ermi_py2").addEventListener('click', () => {
    let semilla_Span = document.getElementById('se_p2');
    let contador_semilla = parseInt(semilla_Span.innerText);
    if (contador_semilla > 0) {
        contador_semilla--;
        semilla_Span.innerText = contador_semilla;
        player2.atk_SemillaErmitanio();

        let porcentaje = parseInt((player2.getKi() * 100) / 80);
        document.getElementById('ki_py2').style.width = `${porcentaje}%`;
        document.getElementById('ki_py2').innerText = `${porcentaje}%`;

        porcentaje = parseInt((player2.getEnergia() * 100) / 90);
        document.getElementById("energia_py2").style.width = `${porcentaje}%`;
        document.getElementById("energia_py2").innerText = `${porcentaje}%`;

        porcentaje = parseInt((player2.getVida() * 100) / 100);
        document.getElementById("vida_py2").style.width = `${porcentaje}%`;
        document.getElementById("vida_py2").innerText = `${porcentaje}%`;

        Swal.fire({
            title: Ataque[pj2].curar,
            text: "",
            width: 600,
            background: "transparent",
            imageUrl: `./public/img/${pj2}/curar.png`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "curación",
            backdrop: "rgba(0, 0, 0, 0.5)",
            customClass: {
                popup: 'swal2-popup-transparent'
            },
            didOpen: () => {
                document.querySelector('.swal2-popup').style.backgroundColor = "transparent";
                document.querySelector('.swal2-popup').style.boxShadow = "none";
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Sin semillas",
            text: "¡Te has quedado sin semillas, no puedes regenerarte!"
        });
    }
    alternarTurno();
});