import {useContext, useEffect, useState, useRef, lazy, useCallback} from 'react'
import React from 'react'
import imageCompression from "browser-image-compression";


// const persistAxiosDataLazy = lazy(() => import('../../PersistAxios.jsx'))
function CompressImage(props) {

   const [selectedImage, setSelectedImage] = useState();
    const [compressedImage, setCompressedImage] = useState()

    const handleReadFile = async (file) => {
        const options = {
            maxSizeMB: 10,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            preserveExif: true,
            fileType: 'image/webp',
            initialQuality: 0.8,
            alwaysKeepResolution: true
        }

        try {
            const compressedFile = await imageCompression(file, options);
            const readerOriginal = new FileReader();
            const readerCompressed = new FileReader();

            console.log(`Original image size: ${file.size / 1024 / 1024} MB`);
            console.log(`Compressed image size: ${compressedFile.size / 1024 / 1024} MB`);
            readerOriginal.onloadend = () => setSelectedImage(readerOriginal.result);
            readerOriginal.readAsDataURL(file);

            readerCompressed.onloadend = () => setCompressedImage(readerCompressed.result);
            readerCompressed.readAsDataURL(compressedFile);
        } catch (error) {
            console.error('Error compressing image: ', error);
        }
    }

    const handleFileInput = e => {
        const file = e.target.files?.[0];
        if (file) handleReadFile(file);
    };

    const handleDrop = e => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) handleReadFile(file);
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
            <input type="file" accept="image/*" onChange={handleFileInput} style={{ marginBottom: '1em' }}/>
            <h3>Or drag & drop image here</h3>

            <div style={{display: 'flex'}}>
                {selectedImage && <img className={'img'} src={selectedImage} alt="original"/>}
                {compressedImage && <img className={'img'} src={compressedImage} alt="compressed"/>}
            </div>

        </div>
    );
}


export default CompressImage
