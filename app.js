const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Ejercicios',
        ejercicios: [],
        nuevoEjercicio: ''
    },
    methods: {
        agregarEjercicio() {
            if (this.nuevoEjercicio != "") {
                this.ejercicios.push({
                    nombre: this.nuevoEjercicio,
                    estado: false,
                    numSeries: 0,
                    tiempoDescanso: 0
                });
            }
            this.nuevoEjercicio = '';
            this.localStorageSetItem();
        },
        eliminarEjercicio(arrPosition) {
            this.ejercicios.splice(arrPosition, 1);
            this.localStorageSetItem();
        },
        localStorageSetItem() {
            localStorage.setItem('gym-local', JSON.stringify(this.ejercicios));
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
        if (datosDB === null) {
            this.ejercicios = [];
        } else {
            this.ejercicios = datosDB;
        }
    }

})