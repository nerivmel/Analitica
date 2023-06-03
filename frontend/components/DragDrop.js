import { useState, useRef } from "react"
import Image from 'next/image';
import imagen from '../images/icons8-documento-64.png';


const DragDrop = () => {
    const [file, setFiles] = useState(null)
    const inputRef = useRef();
    

    const handleDragOver = (event) => {
        event.preventDefault();
        console.log("dragging over")
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }   

    const handleUpload = () => { 
        alert("Archivo subido correctamente")
        setFiles(null)
    };

    // if(handleUpload) return (
    //     <>
    //     <div className="alert">Archivo subido correctamente</div>
    //     </>
    // )

    if(file) return (
        <div className="uploads">
            <ul>
                {Array.from(file).map((file, idx) => <li key={idx}>{file.name}</li> )}
            </ul>
            <div className="actions">
                <button className="button-drag" onClick={() => setFiles(null)}>Cancelar</button>
                <button className="button-drag" onClick={handleUpload}>Subir</button>
            </div>
        </div>
    )

    return (
        <>
        {!file && (

            <div className="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <Image className="img1" src={imagen} />
                <h1 className="titulo-drag">Arrastre y suelte archivos</h1>
                <h1 className="td">O</h1>

                <input 
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(event) => setFiles(event.target.file)}
                    hidden
                    ref={inputRef}
                  />
                <button  className="tb" onClick={() => inputRef.current.click()}>Seleccione archivos</button>

            </div>
        )}
        </>

    )

};

export default DragDrop