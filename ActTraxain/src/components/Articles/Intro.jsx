import React from 'react';
import screenshot from './captura_pantalla.avif';

const Intro = () => {
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

  return (
    <td style={styles.tableCell}>
      <h1 style={styles.header}>
        ¿Qué es <a style={styles.header} href='https://drive-team.es'>Drive-Team.es</a>?
      </h1>
      <br />
      <br />
      <h5 style={styles.text}>
        <a style={styles.header} href='https://drive-team.es'>Drive-Team.es</a> es la plataforma para calcular automáticamente las dietas de los conductores de camión y autobús, tanto en el transporte nacional como internacional por carretera. Simplemente sube los archivos del tacógrafo, del vehículo o del conductor, y <a style={styles.text} href='https://drive-team.es'>Drive-Team.es</a> te dará un reporte de las actividades, del cumplimiento de jornadas y un desglose de las dietas.
      </h5>
      <br />
      <br />
      <br />
      <br />
      <img src={screenshot} className="d-inline-block" style={{ width: '100%', height: '100%' }} alt="" />
      <br />
      <br />
      <br />
      <h2 style={styles.header}>
        ¿Quién está detrás de <a style={styles.header} href='https://drive-team.es'>Drive-Team.es</a>?
      </h2>
      <br />
      <br />
      <h5 style={styles.text}>
        <a style={styles.text} href='https://drive-team.es'>Drive-Team.es</a> es uno de los productos ofrecidos por <a style={styles.text} href='https://traxain.com'>Traxain</a>. Traxain S.L es una Startup española dedicada a solucionar los problemas del transporte por carretera a través del uso de la tecnología. Trabajamos constantemente para mejorar la vida de todos los implicados en este sector, que es el corazón de toda la economía moderna.
      </h5>
      <br />
      <br />
      <br />
      <h2 style={styles.header}>
        ¿Por qué creamos <a style={styles.header} href='https://drive-team.es'>Drive-Team.es</a>?
      </h2>
      <br />
      <br />
      <h5 style={styles.text}>
        La escasez internacional de conductores de camión ha provocado aumentos significativos en los costes de las empresas de transporte. En este contexto es más necesario que nunca optimizar nuestro flujo de efectivo y hacer el mejor uso posible de nuestros recursos.
        <br />
        <br />
        Para ello <a style={styles.text} href='https://drive-team.es'>Drive-Team.es</a> ofrece 5 capacidades clave:
        <br />
        + Un dashboard para analizar la productividad de cada empleado.
        <br />
        + Previsión y cálculo automático de dietas.
        <br />
        + Previsión y cálculo automático de Complementos por desplazamiento.
        <br />
        + Detección de actividades anómalas en el tacógrafo y aclaración por SMS.
        <br />
        + Cálculo y alertas de cumplimiento de jornadas.
      </h5>
      <br />
      <br />
      <br />
      <h2 style={styles.header}>
        ¿Qué hace especial a <a style={styles.header} href='https://drive-team.es'>Drive-Team.es</a>?
      </h2>
      <br />
      <br />
      <h5 style={styles.text}>
        Lo que hace especial a <a style={styles.text} href='https://drive-team.es'>Drive-Team.es</a> es que utiliza directamente los datos del Tacógrafo digital de las unidades, para lo que trabajamos con nuestro socio Continental. Contar con los datos del Tacógrafo nos permite calcular exactamente los costes en los que tendrá que incurrir la empresa utilizando los datos que son legalmente vinculantes.
        <br />
        <br />
        Así garantizamos no solo ahorramos tiempo y problemas a nuestros clientes, sino que aseguramos que en el futuro no vendrá un exempleado reclamando tiempo que no ha trabajado.
      </h5>
      <br />
      <br />
      <br />
      <h2 style={styles.header}>
        ¿Cómo lo hacemos?
      </h2>
      <br />
      <br />
      <h5 style={styles.text}>
        Nuestro objetivo es que tanto las empresas de transporte como los conductores puedan saber por anticipado cuánto van a cobrar y saber que este cálculo se ha realizado de manera imparcial utilizando los datos del Tacógrafo, que es imposible falsificar.
        <br />
        <br />
        Para ello ofrecemos un Dashboard que permite ver en tiempo real las actividades de los empleados y comprobar el tiempo de conducción, descanso, otros trabajos y disponibilidad. Con este Dashboard se pueden comparar los tiempos de trabajo de los distintos empleados, y se puede ver una estimación de salario que habrá que pagar a final de mes.
        <br />
        <br />
        Adicionalmente nuestro sistema permite, tanto al conductor como al administrador, introducir datos relativos a cada actividad e introducir los datos de origen y destino de cada viaje.
        <br />
        <br />
        En caso de detectar actividades inusuales como tiempos de Disponibilidad u otros trabajos demasiado largos, la plataforma envía un SMS automático al conductor, mandándole un enlace especial en el que puede introducir los detalles de esta actividad. La empresa puede exigir al empleado aportar el detalle de estas actividades en caso de que sospeche de un posible fraude.
      </h5>
      <br />
      <br />
      <br />
      <h2 style={styles.header}>
        ¿Es complicado de instalar?
      </h2>
      <br />
      <br />
      <h5 style={styles.text}>
        Para nada, basta con tener un usuario y una contraseña, y acceder a <a style={styles.text} href='https://drive-team.es'>Drive-Team.es</a> para usarlo.
      </h5>
      <br></br>
        <br></br><br></br>
        <br></br>
      <h2 style={styles.header}>¿No estás convencido aún?</h2>
      <br></br>
        <br></br>
        <h5  style={styles.text}>No hay problema. Ponte en contacto con nosotros escribiendo a <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica"}} href='mailto:ignacio@traxain.com'> ignacio@traxain.com</a>, en <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica"}} href='https://traxain.com'>Traxain.com</a> o al teléfono <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica"}} href='tel:+34638269633'> +34 638269633 </a> y podrás probar <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> sin compromiso.</h5>
        
      <br></br>
        <br></br><br></br>
        <br></br>
      <h2 style={styles.header}>¿No es lo que buscabas?</h2>
      <br></br>
        <br></br>
        <h5  style={styles.text}>Si <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>  no es lo que buscas, ¡Dinos qué buscas! Podemos ponerte en contacto con otros proveedores, o diseñar una solución para tí sin compromiso.
  
        </h5>
              
             <br></br>
              <br></br><br></br>
              <br></br></td>
        )


}

export default Intro