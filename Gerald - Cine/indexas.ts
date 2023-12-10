// Importa las clases y tipos necesarios
import { Cine, Sala, Pelicula, Cliente, Comida, Combo, ListaDeDatos } from './cinx';

// Crea instancias de las clases
const cine = new Cine();
const sala = cine.crearSala(100);
const pelicula = new Pelicula('John Wick');
const cliente = new Cliente('Gerald Paul');
const comestible = new Comida('Nachos con Queso');
const combo = new Combo(comestible, 'Hamburguesa, Coca Cola');

// Agrega la película al cine
cine.agregarPelicula(pelicula);

// Asigna la película a la sala
sala.asignarPelicula(pelicula);

// Selecciona la película, sala, asiento y comestible para el cliente
cliente.seleccionarPelicula(pelicula);
cliente.seleccionarSala(sala);
cliente.seleccionarAsiento(5);
cliente.seleccionarComestible(comestible);

// Agrega el comestible y el combo a la lista de datos
const listaDeDatos = ListaDeDatos.getInstance();
listaDeDatos.agregarComestible(comestible);
listaDeDatos.agregarCombo(combo);

// Registra el cliente como observador de la película
cliente.actualizando(pelicula);

// Imprime la información del cliente
cliente.imprimirInformacion();

// Imprime la información del combo seleccionado
console.log(`Combo seleccionado: ${combo.getNombre()}`);