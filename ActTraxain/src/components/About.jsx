


import Intro from './Articles/Intro'
import CMRDig from './Articles/CMRDig'
import './About.css'

import Desp from './Articles/Desp'
import React, { useState } from 'react';





const About = () => {

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
      

  



  // Creamos un estado local para almacenar la lista de entradas y la entrada seleccionada
  const [blogList, setBlogList] = useState([
    { id: 1, title: '¿Qué es Drive-Team.es?', 
    summary: 'Saca provecho a los datos de tus tacógrafos. Traxain te ayuda usando los datos legalmente válidos del tacógrafo para calcular y controlar tus gastos en personal', 
    content: <Intro/> },
    { id: 2, title: '¿Qué pasa con el CMR digital?', 
    summary: 'Se está debatiendo en el Congreso una medida en el proyecto de ley de Movilidad Sostenible que establece la obligatoriedad de utilizar documentos de control digitales para el transporte, incluyendo el transporte internacional, a partir del 1 de octubre de 2024. Esta medida puede representar un avance en términos de transparencia y control en el sector del transporte.', 
    content: <CMRDig/> },
    { id: 3, title: 'Entendiendo la Directiva 1057/2020: Desplazamiento de trabajadores en transporte internacional por carretera', 
    summary: 'La Directiva 1057/2020 regula desplazamientos de trabajadores en transporte internacional, incluyendo cabotaje y triangular. Estos deben registrarse en IMI y seguir normas del Estado, especialmente salariales. Se requiere acceso a declaraciones, tacógrafo y cartas de porte durante el transporte.', 
    content: <Desp/> }]);

    let actualState 
    if(device==="mobile"){
      actualState = useState(null);
    } else {
      actualState = useState(blogList[0]);
    }
    const [selectedBlog, setSelectedBlog] = actualState;


  // Función que se ejecuta cuando se hace clic en una entrada de blog
  const handleBlogClick = (blog) => {
    window.scrollTo(0, 0)
    if (blog === selectedBlog && device==="mobile") {
      setSelectedBlog(null);
    } else {
      setSelectedBlog(blog);
    }
  };

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

  let BlogList

  console.log(device)

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    //height: '100%',1500px
    height:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust alpha for transparency
    zIndex: 1,
    pointerEvents: 'none'
  };

  const tableContainerStyle = {
    position: 'relative', // Ensure the container is positioned relative
    zIndex: 2, // Place the table container above the overlay
  };

  if (device==="mobile"){

    console.log("about mobile")

                      BlogList = <div>
                                        <h1 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica",fontWeight:"light"}}></h1>
                                        {/* Si se ha seleccionado una entrada de blog, la mostramos */}
                                        {selectedBlog && (
                                          <div>
                                            <p>{selectedBlog.content}</p>
                                          </div>
                                        )}
                                        <ul nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{listStyleType: "none", zIndex:50}}>
                                          {blogList.map((blog) => (
                                            <li
                                            key={blog.id}
                                            onClick={() => handleBlogClick(blog)}
                                            className="clickable-element"
                                            style={{
                                              border: '1px solid #ccc', // Grey border
                                              borderRadius: '10px',      // Rounded corners
                                              padding: '10px',         // Add padding for spacing
                                              margin: '10px',
                                              zIndex:60,
                                            }}
                                          >
                                            <div id="content" className="mt-3">
                                              <div className="card mb-4">
                                                <div
                                                  className="card-body"
                                                  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                  style={{ width: '100%' }}
                                                >
                                                  <table
                                                    nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                    style={{ textAlign: 'left', width: '100%' }}
                                                  >
                                                    <tbody
                                                      nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                      style={{ textAlign: 'left', width: '100%' }}
                                                    >
                                                      <tr
                                                        nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                        style={{ width: '100%', textAlign: 'left' }}
                                                      >
                                                        <td
                                                          nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                          style={{ width: '100%', textAlign: 'left' }}
                                                        >
                                                          <h2
                                                            nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                            style={{
                                                              color: 'white',
                                                              fontFamily: 'Helvetica',
                                                              fontSize: 30
                                                            }}
                                                          >
                                                            {blog.title}
                                                          </h2>
                                                          <h4
                                                            nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                            style={{
                                                              color: 'white',
                                                              fontFamily: 'Helvetica',
                                                              fontWeight: 'light',
                                                              lineHeight: 1.5,
                                                            }}
                                                          >
                                                            <br></br>
                                                            <br></br>
                                          
                                                            {blog.summary}...
                                                          </h4>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          ))}
                                        </ul>
                                        
                                </div>


                    }else{
                      
                      console.log("about desktop")

                      BlogList = <div>
                                        <h1 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica",fontWeight:"light"}}></h1>
                                        <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"left",width:'100%', zIndex:50}}>
                                    
                                    <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"top",width:'100%'}}>
                                        <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%',textAlign:"top"}}>
                                          <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'30%',textAlign:"top", verticalAlign: 'top'}}>
                                           

                                        <ul nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{listStyleType: "none",textAlign:"top"}}>
                                          {blogList.map((blog) => (
                                            <li
                                            key={blog.id}
                                            onClick={() => handleBlogClick(blog)}
                                            style={{
                                              border: '1px solid #ccc',
                                              borderRadius: '10px',
                                              padding: '10px',
                                              margin: '10px',
                                              backgroundColor: 'transparent', // Default background color
                                              transition: 'background-color 0.3s', // Add smooth transition
                                            }}
                                            className="clickable-element"
                                            onMouseEnter={(e) => {
                                              e.currentTarget.style.backgroundColor = 'blue'; // Change to blue on hover
                                            }}
                                            onMouseLeave={(e) => {
                                              e.currentTarget.style.backgroundColor = 'transparent'; // Change back to green on hover out
                                            }}
                                          >
                                              <div id="content" className="mt-3">
                                                <div className="card mb-4" >
                                                  <div className="card-body" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "100%" }}>

                                                      <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"left",width:'100%'}}>
                                    
                                                          <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{textAlign:"left",width:'100%'}}>
                                                              <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%',textAlign:"left"}}>
                                                                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%',textAlign:"left"}}>
                                                                  <h2  
                                                                  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                                                                  style={{
                                                                    color: 'white',
                                                                    fontFamily: 'Helvetica',
                                                                    fontSize: 30
                                                                  }}>
                                                                    {blog.title}
                                                                  </h2>
                                                                  <h4 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:'white',fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>
                                                                  <br></br><br></br>

                                                                  {blog.summary}...
                                                                  
                                                                  </h4>
                                                                  
                                                                  

                                                                  
                                                                </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                                </div>
                                            </li>
                                          ))}
                                        </ul>
                                        </td>
                                        <td  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'5%',textAlign:"left"}}></td>
                                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'60%',textAlign:"left"}}>
                                        {/* Si se ha seleccionado una entrada de blog, la mostramos */}
                                        {selectedBlog && (
                                          <div>
                                            <p>{selectedBlog.content}</p>
                                          </div>
                                        )}
                                        </td>
                                      </tr>
                                      </tbody>
                                      </table>
                                </div>


                    
                    }

    return(
    <div style={bakgroundStyle}>
       <div style={overlayStyle}></div>
        
        <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={tableContainerStyle}>
        
        <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%'}}>
          <tr  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'100%'}}>

            <td  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'4%'}}>

            </td>
            <td  nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'80%'}}>
              <br></br><br></br><br></br><br></br>
              {BlogList}
            </td>

            

              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'4%'}}>
              
              </td>
          </tr>
        </tbody>
        </table>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        {/*<Footer />*/}
        </div>
            


    )
}


export default About