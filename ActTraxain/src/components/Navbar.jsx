import React, { Component, useContext, useState } from 'react'

// import logoAvif from '../logonuevo.avif'
// import logoPNG from '../logonuevo.png'

// import Logout from './Logout'
import { Link, NavLink } from 'react-router-dom'



class Navbar extends Component {



  async componentDidMount() {
    try{
    let winWidth = await window.innerWidth

    let winHeight = await window.innerHeight
    await this.setState({ winWidth: winWidth })

    await this.setState({ winHeight: winHeight })
    let device = await this.getDeviceType()
    await this.setState({ device: device })
  } catch (err) {
    await this.setState({ errorHappened: true })
    await this.setState({ errorMsg: 'Se ha producido un error en el navegador' })

  }
  }

  async getDeviceType() {
    try {
      let ua = await navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al detectar el tiempo de dispositivo' })

    }
  };


  constructor(props) {
    super(props)
    this.state = {
      winWidth: 0,
      winHeight: 0,
      device: ""
    }
  }


  render() {
    try{

      let field0 
      let field1 
      let field3

      let width = this.state.winWidth


      if (this.props.userRole) {
        if (this.state.device === "desktop") {
          field3 = <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%"}}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%"}}>
                  <NavLink className="btn btn-sm btn-block nav-btn" 
                          nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" 
                              to="/">
                    Inicio  
                  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                  <NavLink  className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  
                          to="/sobre-drive-team">
                    Nosotros
                  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%" }}>

                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <form onSubmit={(event) => {
                    event.preventDefault()

                    this.props.showNavigatorModal()

                  }} style={{ width:"100%" }}>
                    <button  style={{ width:"100%" }} type="submit" class="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg">
                      Más acciones
                    </button>
                  </form>
                </div>
              </td>
              
            </tr>

          </table>
        } else {
          field3 = <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "70%" }}>
                <table>
                  <tr>
                    <td>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                        <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color: "#28BAC1", textDecoration: "none", width: "100%"}} to="/">Inicio</NavLink>
                      </div>
                    </td>
                  </tr>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                    <td>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                        <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#28BAC1", textDecoration: "none", width: "100%"}} to="/sobre-drive-team">Nosotros</NavLink>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>

              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                <div>
                  <form onSubmit={(event) => {
                    event.preventDefault()

                    this.props.showNavigatorModal()

                  }}>

                    <button style={{ fontSize: 17 }} type="submit" className="button"><b>+</b></button>

                  </form>
                </div>
              </td>

            </tr>


          </table>

        }
      } else {
        if (this.state.device === "desktop") {
          field3 = <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <NavLink  className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  to="/"> Inicio  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                  <NavLink className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  to="/sobre-drive-team">Nosotros</NavLink>
                </div>
              </td>
            </tr>

          </table>
        } else {
          field3 = <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#28BAC1", textDecoration: "none", width: "100%" }} to="/">Inicio</NavLink>
                </div>
              </td>
            </tr>
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#28BAC1", textDecoration: "none", width: "100%" }} to="/sobre-drive-team">Nosotros</NavLink>
                </div>
              </td>
            </tr>

          </table>

        }
      }





      if (this.props.userRole === "admin") {
        let field0Text = "Calcular Complementos"
        if (this.props.showANDirecto) {
          field0Text = "Salir del calculador"
        }

        field0 = <form onSubmit={(event) => {
          event.preventDefault()

          this.props.selectANDirecto()

        }}>
          <button type="submit" className="button" >{field0Text}</button>

        </form>

        field1 = <form onSubmit={(event) => {
          event.preventDefault()

          this.props.usersEmployeeLoad()

        }}>




          <button type="submit" className="button" >Cargar empleados</button>

        </form>



      }








      let navigator
      if(this.props.userRole){
        if (this.state.device === 'desktop') {
          return (<nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }}>
    
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "90%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
    
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
    
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "25%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
    
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
    
                    {field3}
    
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{  textAlign: "center", verticalAlign: "middle", width: "12%"}}>
                    <Logout />
    
                  </td>
    
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "0%" }}>
    
                </tr>
              </tbody>
            </table>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>
    
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
              {/*Balance*/}
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
              {/*Payments*/}
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
    
            </div>
    
          </nav>
          )
        } else {
          return (
    
            <nav style={{ height: "7%", width: "100%" }} className="navbar fixed-top bg-white flex-md-nowrap p-1 shadow">
    
              <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#484848", height: "100%", width: "100%" }}>
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                  <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%" }}>
                        <h1><a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>
    
                          <img src={logoAvif} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80px", height: "80%" }} alt="" 
                          onError={(e) => {
                            e.target.src = logoPNG;
    
                          }}/>
                        </a>
                        </h1>
                      </td>
    
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "100%" }}>
    
    
    
                      </td>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%", height: "100%" }}>
                        {field3}
                      </td>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "10%" }}>
                    </tr>
    
                  </tbody>
                </table>
    
    
    
              </div>
    
    
            </nav>
    
    
          )
    
    
        }
      } else {
        if (this.state.device === 'desktop') {
          return (<nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }}>
    
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "90%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
    
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
    
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "40%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
    
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
    
                    {field3}
    
                  </td>
    
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "0%" }}>
    
                </tr>
              </tbody>
            </table>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>
    
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
              {/*Balance*/}
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
              {/*Payments*/}
            </div>
    
            <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
    
            </div>
    
          </nav>
          )       
        } else {
          return (
    
            <nav style={{ height: "7%", width: "100%" }} className="navbar fixed-top bg-white flex-md-nowrap p-1 shadow">
    
              <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#484848", height: "100%", width: "100%" }}>
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                  <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%" }}>
                        <h1><a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>
    
                          <img src={logoAvif} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80px", height: "80%" }} alt="" 
                          onError={(e) => {
                            e.target.src = logoPNG;
    
                          }}/>
                        </a>
                        </h1>
                      </td>
    
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "100%" }}>
    
    
    
                      </td>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%", height: "100%" }}>
                        {field3}
                      </td>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "10%" }}>
                    </tr>
    
                  </tbody>
                </table>
    
    
    
              </div>
    
    
            </nav>
    
    
          )
    
    
        }
      }
      


  } catch(err) {
    setTimeout(() => window.location.reload(), 2000);
    return (<div>Error al cargar el Navegador</div>)


  }
}

}

export default Navbar;