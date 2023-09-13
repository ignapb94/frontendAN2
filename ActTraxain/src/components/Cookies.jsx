
import React from 'react';

import RoundEnumeratedList from './RoundEnumeratedList';

// Define CSS styles as JavaScript objects
const styles = {
  tableCell: {
    width: '80%',
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
    fontSize: 20,
    fontWeight: 'light',
    lineHeight: 1.5,
  },
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    //height: '100%',1500px
    height:"100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust alpha for transparency
    zIndex: 1,
    pointerEvents: 'none'
  };

  const tableContainerStyle = {
    position: 'relative', // Ensure the container is positioned relative
    zIndex: 2, // Place the table container above the overlay
  };

var device

let ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      device = "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      device = "mobile";
    }else{
      device = "desktop";
    }
const width= window.innerWidth
const height= window.innerHeight

const heightBackground = height*1.2
const targetWidthBack = heightBackground*100/width
const backgroundSize = targetWidthBack + "%" + " 120%"

var bakgroundStyle ={ 
    height: '100%', 
    overflow: 'auto',
    backgroundImage: 'url("/earth_photo1.png")',
    //backgroundSize: '50% 50%',
    backgroundSize: backgroundSize,
    //backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    width: '100%',
    zIndex:3,
    backgroundColor: 'rgba(0, 0, 0, 1)', // Adjust opacity (last value) as needed
    //pointerEvents: 'none' esto hace que no se pueda selleccionar ndad
  }

if (device==="mobile"){
bakgroundStyle = { 
height: '100%', 
overflow: 'auto',
backgroundImage: 'url("/earth_photo1.png")',
//backgroundSize: '50% 50%',
backgroundSize: '250% 150%',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat', 
width: '100%',
zIndex:3,
backgroundColor: 'rgba(0, 0, 0, 1)', // Adjust opacity (last value) as needed
//pointerEvents: 'none' esto hace que no se pueda selleccionar ndad
}

};

const paragraphs = [

  "Microsoft Internet Explorer: menú Herramientas > Opciones de Internet > Privacidad > Configuración. ",
  "Firefox: menú Herramientas > Opciones > Privacidad > Cookies. ",
  "Chrome: menú Opciones > Opciones avanzadas > Privacidad. ",
  "Safari: menú Preferencias/Privacidad. ",
  "Safari para IOS (iPhone y iPad): Opción Ajustes > Safari ",
  "Chrome para Android: Configuración > Configuración de sitios web > Cookies"]







const Cookies = () => {
  return (
    <div style={bakgroundStyle}>
    <div style={overlayStyle}></div>
     
     <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={tableContainerStyle}>
     
     <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%'}}>
       <tr  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%'}}>

         <td  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'4%'}}>

         </td>
         <td  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'90%'}}>
           <br></br><br></br><br></br><br></br>
            <td style={styles.tableCell}>
            <h1 style={styles.header}>
            Política de Cookies de Traxain S.L.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h5 style={styles.text}>
            En Traxain SL utilizamos las cookies u otros archivos de funcionalidad similar (en adelante, “cookies”) para saber cómo utilizas nuestros servicios y poder mejorarlos. Traxain SL es responsable de las cookies y del tratamiento de los datos obtenidos a través de estas, ya sean propias o de terceros, decidiendo sobre la finalidad, contenido y uso del tratamiento de la información recabada.
​
<br></br><br></br>
                

          El objetivo de esta política es informarle de manera clara y detallada de qué es una cookie, cuál es su finalidad, qué tipo de cookies utilizamos y cómo configurarlas o en su caso deshabilitarlas.
          <br></br><br></br>
          Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita nuestra página web y que guarda información sobre la navegación que realiza. Algunas cookies resultan esenciales para el buen funcionamiento de las páginas web, como es el caso de las cookies técnicas o de personalización de la interfaz de usuario, aunque otras, como las cookies de análisis o las de publicidad comportamental, requieren que le informemos y recabar su consentimiento para ser utilizadas por nuestra parte. 
          <br></br><br></br>
          A continuación, y con el objetivo de que pueda prestar un consentimiento plenamente informado, le detallamos la información de en qué consiste y cuál es la finalidad de cada tipo de cookie.
          <br></br><br></br>
          as cookies técnicas son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan, incluyendo la gestión y operativa de la página web y habilitar sus funciones y servicios, como, por ejemplo, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, gestionar el pago, … La página web no puede funcionar adecuadamente sin estas cookies por lo que se consideran necesarias y no requieren su consentimiento.
          <br></br><br></br>
          Las cookies de preferencias o personalización permiten a la página web recordar información que cambia la forma en que la página se comporta o el aspecto que tiene de modo que el usuario acceda al servicio con determinadas características que pueden diferenciar sus opciones de uso del sitio web a las de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el usuario realiza una búsqueda o la región en la que el usuario se encuentra. Si es el propio usuario quien elige esas características, por ejemplo, marcando la bandera del idioma, se considera un servicio expresamente solicitado siempre y cuando las cookies obedezcan exclusivamente a la finalidad seleccionada de personalización. Como en el caso anterior, estas cookies no requieren su consentimiento.
          <br></br><br></br>
          Las cookies de análisis o medición son aquellas que permiten comprender cómo interactúan los visitantes con las páginas web y así realizar el análisis estadístico del uso que hacen los usuarios de la web de los servicios prestados. La información recogida se utiliza en la medición de la actividad de los sitios web o aplicación con el fin de introducir mejoras en los productos y servicios ofrecidos por el responsable.
          <br></br><br></br>
          Las cookies de marketing o publicidad comportamental almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar anuncios relevantes y atractivos para el usuario individual, y por lo tanto, más valiosos para los terceros anunciantes.
          <br></br><br></br> 
          Traxain SL está utilizando cookies propias y de terceros de tipo técnicas.
          <br></br><br></br> 
          Si desactiva las cookies, podrá seguir accediendo a la web pero puede que la navegación por esta no sea óptima y alguno de los servicios ofrecidos no funcionen correctamente.
          <br></br><br></br> 
          Si en un futuro Traxain SL llegara a utilizar tipos de cookies diferentes a las contempladas en esta Política de Cookies para prestar nuevos servicios o fuera necesario adaptarla a nuevas exigencias legislativas, se lo notificaremos.
          <br></br><br></br> 
          Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo a través del menú de configuración de su navegador de internet, pudiendo configurarlo para que bloquee las cookies o alerte al usuario cuando un servidor quiera guardarla. Los siguientes enlaces proporcionan información en relación con cómo configurar y/o deshabilitar las cookies para cada uno de los principales navegadores del mercado a fin de que el usuario pueda decidir si acepta o no el uso de cookies.
          <br></br><br></br> 
          <RoundEnumeratedList items={paragraphs} />
          <br></br><br></br> 
   
            </h5>
            
        
            
            </td>
            </td>

            

<td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'4%'}}>

</td>
</tr>
</tbody>
</table>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

{/*<Footer />*/}
</div>
  );
};



export default Cookies;