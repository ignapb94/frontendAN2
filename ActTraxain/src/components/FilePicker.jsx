import React from 'react'
import CustomButton from './CustomButton'


const FilePicker = ({ file, setFile, readFile }) => {
  const buttonContainerStyle = {
    marginTop: '4px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3px',
    width:'100%',
    textAlign: "center"
  };
  const customButtonStyle = {};
  return (
    <div className='filepicker-container'>
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}
          />
        <label htmlFor="file-upload" className='filepicker-label'>
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file =='' ? "No file selected" : file.name}

        </p>

      </div>
      <div style={buttonContainerStyle}>
        <table style={{width:"100%"}}>
          <tr  style={{width:"100%"}}>
            <td style={{width:"50%"}}>
            <CustomButton
              type="outlineLong"
              title="Logo  "
              handleClick={() => readFile('logo')}
              customStyles={customButtonStyle}
            />
            </td>
            <td style={{width:"50%"}}>
            <CustomButton
          type="filledLong"
          title="  Full  "
          handleClick={() => readFile('full')}
          customStyles={customButtonStyle}
        />
            </td>
          </tr>
          
        </table>
        
        
      </div>
    </div>
  )
}

export default FilePicker