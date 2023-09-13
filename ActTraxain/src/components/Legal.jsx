
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

const paragraphs = ["Titular: Traxain SL - NIF: B02963429  ",
                    "Domicilio social: Calle Rosa de Lima 52, 28290, Las Rozas de Madrid, Madrid, España",
                    "Teléfono: 638269633 - Correo electrónico: ignacio@traxain.com",
                    "Página web: traxain.com"]

const paragraphs2 = ["Gestión y contratación de los productos y servicios ofrecidos por nuestra empresa",
"Canalizar las solicitudes de información, sugerencias y reclamaciones que nos pueda hacer llegar",
"Mantenerle informado sobre eventos, ofertas, productos y servicios que puedan resultar de su interés a través de distintos canales de comunicación siempre y cuando Ud. haya prestado su consentimiento.",
"Gestión de la relación laboral, en el caso de nuestros empleados",
"Gestión de la relación comercial mantenida con nuestros proveedores",
"Gestión de la selección de personal"]

const paragraphs3 = ["Su ejercicio es gratuito, salvo que se trate de solicitudes manifiestamente infundadas o excesivas (p. ej., carácter repetitivo), en cuyo caso Traxain SL podrá cobrar un canon proporcional a los costes administrativos soportados o negarse a actuar",
"Puede ejercer los derechos directamente o por medio de tu representante legal o voluntario",
"Debemos responder a su solicitud en el plazo de un mes, aunque, si se tiene en cuenta la complejidad y número de solicitudes, se puede prorrogar el plazo en otros dos meses más.",
"Tenemos la obligación de informarle sobre los medios para ejercitar estos derechos, los cuales deben ser accesibles y sin poder denegarle el ejercicio del derecho por el solo motivo de optar por otro medio. Si la solicitud se presenta por medios electrónicos, la información se facilitará por estos medios cuando sea posible, salvo que nos solicite que sea de otro modo.",
"Si Traxain SL no da curso a la solicitud, le informará, a más tardar en un mes, de las razones de su no actuación y la posibilidad de reclamar ante una Autoridad de Control",
]





const Legal = () => {
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
            Política de Privacidad de Traxain S.L.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h5 style={styles.text}>
            Traxain SL pone a su disposición a través de la página web traxain.com la presente política de privacidad con la finalidad de informarle, de forma detallada, sobre cómo tratamos sus datos personales y protegemos su privacidad y la información que nos proporciona. En caso de introducir modificaciones en un futuro sobre la misma se lo comunicaremos a través de la página web o a través de otros medios de modo que pueda conocer las nuevas condiciones de privacidad introducidas. 

​
                <br></br>
                En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales le informamos de lo siguiente:
                <br></br>
                Responsable del Tratamiento
                <RoundEnumeratedList items={paragraphs} />
            </h5>
            
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>¿Con qué finalidad tratamos sus datos personales?</h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            En Traxain SL recabamos y tratamos su información personal con carácter general para gestionar la relación que mantenemos con Ud. siendo las principales finalidades que tenemos identificadas las siguientes:
            <br></br>
            ​<br></br>
            Responsable del Tratamiento
                <RoundEnumeratedList items={paragraphs2} />
            </h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>¿Cómo recabamos su información? </h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            Recabamos su información personal a través de diferentes medios, pero siempre será informado en el momento de la recogida mediante cláusulas informativas sobre el responsable del tratamiento, la finalidad y la base legal del mismo, los destinatarios de los datos y el periodo de conservación de su información, así como la forma en que puede ejercer los derechos que le asisten en materia de protección de datos.

            ​<br></br>
            ​<br></br>
            En general, la información personal que tratamos se limita a datos identificativos (nombre y apellidos, fecha de nacimiento, domicilio, DNI, teléfono y correo electrónico), servicios contratados y datos de pago y facturación. 
            <br></br>
            ​<br></br>
            En los casos de gestión y selección de personal recogemos los datos académicos y profesionales para poder atender a las obligaciones derivadas del mantenimiento de la relación laboral o en su caso, entrar a formar parte de nuestra plantilla. 

            ​<br></br>
            ​<br></br>
            Traxain SL utiliza redes sociales y esta es otra forma de llegar a usted. La información recogida a través de los mensajes y comunicaciones que publica puede contener información personal que se encuentra disponible online y accesible al público. Estas redes sociales cuentan con sus propias políticas de privacidad donde se explica cómo utilizan y comparten su información, por lo que Traxain SL le recomienda que las consulte antes de hacer uso de estas para confirmar que está de acuerdo con la forma en que su información es recogida, tratada y compartida.
            <br></br>
            ​<br></br>
            A través de nuestra página web recabamos información personal relacionada con su navegación a través del uso de cookies. Para conocer de manera clara y precisa las cookies que utilizamos, cuáles son sus finalidades y cómo puede configurarlas o deshabilitarlas, consulte nuestra Política de Cookies.

            ​<br></br>
            ​<br></br>
            Al utilizar nuestra app móvil y para prestarle los servicios que ofrece, hacemos uso de los datos de geolocalización de su dispositivo móvil si tiene activada dicha funcionalidad. Si no tiene activada la geolocalización, le informaremos y pediremos su permiso previamente con una notificación. La mayoría de los dispositivos móviles proporcionan a los usuarios la posibilidad de desactivar estos servicios a voluntad, normalmente a través del menú de configuración del dispositivo. Si tiene dudas en relación con cómo activar/desactivar esta funcionalidad, consulte la página web del fabricante de su dispositivo o contacte con su operador telefónico.
            </h5>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>Responsabilidad del usuario  </h1>
            <br></br>​<br></br>
            <h5 style={styles.text}>
            Al facilitarnos sus datos a través de canales electrónicos, el usuario garantiza que es mayor de 14 años y que los datos facilitados a Traxain SL son verdaderos, exactos, completos y actualizados. A estos efectos, el usuario confirma que responde de la veracidad de los datos comunicados y que mantendrá convenientemente actualizada dicha información de modo que responda a su situación real, haciéndose responsable de los datos falsos e inexactos que pudiera proporcionar, así como de los daños y perjuicios, directos o indirectos, que pudieran derivarse.
            </h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>¿Cuánto conservamos su información? </h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            En Traxain SL sólo conservamos su información por el periodo de tiempo necesario para cumplir con la finalidad para la que fue recogida, dar cumplimiento a las obligaciones legales que nos vienen impuestas y atender las posibles responsabilidades que pudieran derivar del cumplimiento de la finalidad por la que los datos fueron recabados. 

            <br></br>​
            ​<br></br>
            En el caso de que quiera entrar a formar parte de nuestra plantilla y opte a uno de nuestros puestos de trabajo, los datos proporcionados pasarán a formar parte de nuestra bolsa de empleo y se conservarán mientras dure el proceso selectivo y por un máximo de 90 días o hasta que Ud. ejerza su derecho de supresión.

            ​<br></br>
            ​<br></br>
            En todo caso, y por regla general, mantendremos su información personal mientras exista una relación contractual que nos vincule o usted no ejerza su derecho de supresión y/o limitación del tratamiento, en cuyo caso, la información será bloqueada sin darle uso más allá de su conservación, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pudiera derivarse algún tipo de responsabilidad que tuviera que ser atendida.
            </h5>
            <br></br>
            <br></br>
            <br></br>
            ​<br></br>
            <br></br>
            <h1 style={styles.header}>¿A quién comunicamos sus datos?

            </h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            En general, en Traxain SL no compartimos su información personal, salvo aquellas cesiones que debemos realizar en base a obligaciones legales impuestas.
            ​<br></br>
            ​<br></br>
            No obstante, para desarrollar y prestarle el servicio solicitado cedemos sus datos a otras empresas colaboradoras.
            ​<br></br>
            ​<br></br>
            Puede comunicarnos su oposición a la cesión de sus datos, aunque en ese caso, no sería posible prestarle el servicio solicitado.
            ​<br></br>
            ​<br></br>
            Aunque no se trata de una cesión de datos, para prestarle el servicio solicitado puede ser que terceras empresas, que actúan como proveedores nuestros, accedan a su información para llevar a cabo el servicio que les hemos contratado. Estos encargados acceden a sus datos siguiendo nuestras instrucciones y sin que puedan utilizarlos para una finalidad diferente y manteniendo la más estricta confidencialidad.

            ​​<br></br>
            ​<br></br>

            Asimismo, su información personal estará a disposición de las Administraciones Públicas, Jueces y Tribunales, para la atención de posibles responsabilidades nacidas del tratamiento.</h5>
            ​<br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>Transferencias internacionales de datos

            </h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            No existen transferencias internacionales de sus datos a países fuera del Espacio Económico Europeo (EEE).
            <br></br>
            ​<br></br>
            Con nuestros proveedores hemos acordado que, para la prestación del servicio contratado, hagan uso de servidores ubicados en el EEE y si, en un futuro, necesitásemos hacer uso de servidores localizados fuera del territorio de la UE, se adoptarán las medidas adecuadas, que serán incorporadas a esta Política de Privacidad, garantizando que dichos proveedores se hallan bajo el acuerdo de Privacy Shield o que existen otras garantías adecuadas.
            </h5>
​​              <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styles.header}>¿Cuáles son sus derechos con relación al tratamiento de sus datos y cómo puede ejercerlos?
            </h1>
            <br></br>​<br></br>
            <h5 style={styles.text}>
            La normativa en materia de protección de datos permite que pueda ejercer sus derechos de acceso, rectificación, supresión y portabilidad de datos y oposición y limitación a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando proceda. 
            <br></br>
            ​<br></br>
            Estos derechos se caracterizan por lo siguiente:
            <br></br>
            <RoundEnumeratedList items={paragraphs3} />
            <br></br>
            <br></br>
            Para ejercer sus derechos Traxain SL pone a su disposición los siguientes medios:
            <br></br>
            1. Mediante solicitud escrita y firmada dirigida a Traxain SL, Calle Rosa de Lima 52, 28290, Las Rozas de Madrid, Madrid, España y Ref. Ejercicio de Derechos LOPD.
            <br></br>
            2. Enviando formulario escaneado y firmado a la dirección de correo electrónico a ignacio@traxain.com indicando en el asunto Ejercicio de Derechos LOPD.
            <br></br>
            En ambos casos, deberá acreditar su identidad acompañando fotocopia o en su caso, copia escaneada, de su DNI o documento equivalente para poder verificar que sólo damos respuesta al interesado o su representante legal, debiendo aportar en este caso documento acreditativo de la representación.
            <br></br>
            ​<br></br>
            Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el ejercicio de sus derechos, le informamos que podrá presentar una reclamación ante la autoridad nacional de control dirigiéndose a estos efectos a la Agencia Española de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.
            <br></br>
            </h5>
            <h1 style={styles.header}>¿Cómo protegemos su información?
            </h1>
            <br></br>
            ​<br></br>
            <h5 style={styles.text}>
            En Traxain SL nos comprometemos a proteger su información personal. 
            ​<br></br>
            ​<br></br>
            Utilizamos medidas, controles y procedimientos de carácter físico, organizativo y tecnológico, razonablemente fiables y efectivos, orientados a preservar la integridad y la seguridad de sus datos y garantizar su privacidad. 

            ​<br></br>
            ​<br></br>
            Además, todo el personal con acceso a los datos personales ha sido formado y tiene conocimiento de sus obligaciones con relación a los tratamientos de sus datos personales.

            ​<br></br>
            ​<br></br>

            En el caso de los contratos que suscribimos con nuestros proveedores incluimos cláusulas en las que se les exige mantener el deber de secreto respecto a los datos de carácter personal a los que hayan tenido acceso en virtud del encargo realizado, así como implantar las medidas de seguridad técnicas y organizativas necesarias para garantizar la confidencialidad, integridad, disponibilidad y resiliencia permanentes de los sistemas y servicios de tratamiento de los datos personales.

            ​<br></br>
            ​<br></br>

            Todas estas medidas de seguridad son revisadas de forma periódica para garantizar su adecuación y efectividad.
            <br></br>
            ​<br></br>
            Sin embargo, la seguridad absoluta no se puede garantizar y no existe ningún sistema de seguridad que sea impenetrable por lo que, en el caso de cualquier información objeto de tratamiento y bajo nuestro control se viese comprometida como consecuencia de una brecha de seguridad, tomaremos las medidas adecuadas para investigar el incidente, notificarlo a la Autoridad de Control y, en su caso, a aquellos usuarios que se hubieran podido ver afectados para que tomen las medidas adecuadas. 
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



export default Legal;