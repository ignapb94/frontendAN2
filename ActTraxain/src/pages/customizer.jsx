import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion  } from 'framer-motion';
import { useSnapshot } from 'valtio';
import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation, headContentAnimation } from '../config/motion'
import { AIPicker, ColorPicker, CustomButton,FilePicker, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state) 
  const [file, setFile] = useState('')
  const [prompt, setPrompt] = useState('')
  const [generatingImg, setGeneratingImg] = useState(false)
  const [activeEditorTab, setActiveEditorTab] = useState("")
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  const generateTableContent = () => {
    switch (activeEditorTab){
      case "colorpicker":
        return <ColorPicker/>
      case "filepicker":
        return <FilePicker
        file={file}
        setFile={setFile}
        readFile={readFile}
        />
      case "aipicker":
        return <AIPicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
          
          />
      default:
        return null;

    }
  }

  const handleSubmit = async (type) => {
    if(!prompt) return alert("please enter a prompt")
    try{
      setGeneratingImg(true)

      const response = await fetch('http://localhost:8080/api/v1/dalle',
      {method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        prompt,
      })
      
    })

    console.log()
    const data = await response.json()

    handleDecals(type, `data:image/png;base64, ${data.photo}`)

    }catch(error){
      alert(error)

    }finally{
      setGeneratingImg(false)
      setActiveEditorTab("")
    }
  }

  const handleDecals = (type, result) => {
    console.log(type)
    console.log(result)
    const DecalType = DecalTypes[type];
    state[DecalType.stateProperty] = result
    if(!setActiveFilterTab[DecalType.filterTab]){
      console.log(DecalType.filterTab)
      handleActiveFilterTab(DecalType.filterTab)
    }
  }
  const handleActiveFilterTab = (tabname) => {
    console.log(tabname)
    switch (tabname) {
      
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabname]
        break;
      case "stylishShirt":
        //state.isFullTexture = !activeFilterTab[tabname]
        state.isFullTexture = true
        break;
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
        break
    }

    setActiveFilterTab((prevState) =>{
      return {
        ...prevState,
        [tabname]:!prevState[tabname]
      }
    })
  }

  const readFile = (type) => {

    console.log(type)
    console.log(file)

    reader(file)
    .then((result) => {
        handleDecals(type, result)
        setActiveEditorTab("")
      })
  }



  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation('left')}
          
          >
            <div className="flex items-center min-h-screen" style={{
              display: 'flex',
              alignItems: 'center', 
              minHeight: '100vh',
            }}>
              <div className='editortabs-container tabs' style={{position:"fixed"}}>
                {EditorTabs.map((tab) => (
                  
                  <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => setActiveEditorTab(tab.name)}
                  />
                  
                ))}
                {generateTableContent()}
              </div>
            </div>

            </motion.div>
            
            <motion.div
        {...slideAnimation}
        className="flex flex-col gap-5"
        style={{
          position: 'fixed',
          top: '5px', /* Adjust the top position to place it where you want */
          right: '5px', /* Adjust the right position to place it where you want */
        }}
      >
        <CustomButton
          type="filled"
          title="Go back"
          handleClick={() => (state.intro = true)}
          style={{
            width: 'fit-content',
            padding: '4px',
            paddingLeft: '12px',
            paddingRight: '12px',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        />
      </motion.div>
            
            
            <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
            >
              {FilterTabs.map((tab) => (
                  <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleClick={() => handleActiveFilterTab(tab.name)}
                  />
                ))}

            </motion.div>
        </>
      )}

    </AnimatePresence>
  )
}

export default Customizer