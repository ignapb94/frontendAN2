import React from 'react';

// Define CSS styles as JavaScript objects
const styles = {
  tableCell: {
    width: '66%',
    textAlign: 'left',
    fontWeight: 'light',
  },
  header: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 32,
  },
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'light',
    fontSize: 20,
    lineHeight: 1.5,
  },
};

const Desp = () => {
  return (
    <td style={styles.tableCell}>
      <h1 style={styles.header}>
        Entendiendo la Directiva 1057/2020: Desplazamiento de trabajadores en transporte internacional por carretera
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5 style={styles.text}>
        Los trabajadores en el transporte internacional por carretera, tanto de viajeros como de mercancías, por su alta movilidad, están sometidos a unas reglas especiales de desplazamiento de trabajadores, contenidas en la directiva 1057/2020, que se aplica a partir del 2 de febrero del pasado año 2022.
        <br></br>
        <br></br>
        Conforme a estas reglas se consideran desplazados los trabajadores que realizan transporte de cabotaje (transporte interior en otros Estados de la UE), así como los que realizan transporte triangular: transporte entre dos Estados de la UE distintos al de establecimiento de la empresa.
        <br></br>
        <br></br>
        Si la fase final de un transporte combinado es un transporte de cabotaje, también se produce desplazamiento.
        <br></br>
        <br></br>
        En el caso del desplazamiento en vacío, se aplica la regla del transporte siguiente: si es un cabotaje o triangular el desplazamiento en vacío también está sometido a desplazamiento porque se considera accesorio al transporte siguiente.
        <br></br>
        <br></br>
        Dentro de un transporte bilateral, con origen o destino en el Estado de establecimiento, se permiten la realización de algunos transportes parciales triangulares sin que se produzca desplazamiento: uno en el viaje de ida y otro en el de vuelta, o los dos en el viaje de vuelta.
        <br></br>
        <br></br>
        Antes de la realización de un desplazamiento, el transporte deberá registrarse en el IMI. Durante la realización del transporte deberán estar accesibles las declaraciones de desplazamiento, junto a los registros del tacógrafo y las cartas de porte de los desplazamientos, en formato papel o electrónico.
        <br></br>
        <br></br>
        Para facilitar el control de los desplazamientos debe registrarse el cruce de fronteras en el tacógrafo.
        <br></br>
        <br></br>
        La principal consecuencia para el desplazamiento es la de que mientras dura se aplican determinadas normas del Estado en que se produce el desplazamiento, especialmente en materia de salarios.
        <br></br>
        <br></br>
      </h5>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </td>
  );
};

export default Desp;