import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, Camera, ScanLine, XCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Scan.css';

function Scan() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('upload');

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [cameraError, setCameraError] = useState('');

  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const startCamera = async () => {
    setError('');
    setCameraError('');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error(err);
      setCameraError('Camera access denied or unavailable.');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    } else if (file) {
      setError('Please select a valid image (JPG, PNG, WEBP).');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please drop a valid image file.');
    }
  };

  const clearUpload = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    setPreviewUrl('');
    setError('');
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL('image/jpeg');
      localStorage.setItem('scanned_image', imageDataUrl);

      canvas.toBlob((blob) => {
        const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(blob));
        stopCamera();
      }, 'image/jpeg');
    }
  };

  const handleScan = async () => {
    if (!selectedFile) {
      setError('Please select or capture an image first.');
      return;
    }

    setIsScanning(true);
    setError('');

    try {
      // Save image for result page
      const imageUrl = URL.createObjectURL(selectedFile);
      localStorage.setItem('scanned_image', imageUrl);

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('language', language);

      console.log('Sending language:', language);

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      // ✅ No Authorization header — removed!
      const response = await fetch(`${API_URL}/api/scan`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image. Please try again.');
      }

      const data = await response.json();
      console.log('=== SCAN RESPONSE ===', data);
      console.log('=== PLANT NAME ===', data?.commonName);

      // Data directly from backend
      const plantData = data.plant || data.result || data.data || data;
      console.log('=== PLANT DATA SAVED ===', plantData);

      localStorage.setItem('plant_scan_result', JSON.stringify(plantData));
      navigate('/result');

    } catch (err) {
      console.error(err);
      setError(err.message);
      setIsScanning(false);
    }
  };

  return (
    <div className="scan-container">
      <div className="scan-header">
        <button
          className="btn-outline glow-hover"
          style={{ position: 'absolute', top: '2rem', left: '2rem', padding: '0.5rem' }}
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="glow-text">{t('scanTitle')}</h1>
        <p className="text-secondary">{t('step1Desc')}</p>
      </div>

      <div className="scan-tabs">
        <button
          className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => handleTabChange('upload')}
        >
          <UploadCloud size={20} /> {t('uploadTab')}
        </button>
        <button
          className={`tab-btn ${activeTab === 'camera' ? 'active' : ''}`}
          onClick={() => handleTabChange('camera')}
        >
          <Camera size={20} /> {t('cameraTab')}
        </button>
      </div>

      {error && (
        <div className="error-box" style={{ marginBottom: '1rem', width: '100%', maxWidth: '600px' }}>
          {error}
        </div>
      )}

      <div className="scan-box">
        {isScanning && (
          <div className="scanning-overlay">
            <div className="radar"></div>
            <div className="scan-line"></div>
            <h3 className="neon-text animate-pulse-slow">{t('analyzing')}</h3>
          </div>
        )}

        {activeTab === 'upload' && (
          <>
            <label
              className={`upload-zone ${isDragging ? 'drag-active' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                <>
                  <img src={previewUrl} alt="Preview" className="preview-image" />
                  <button
                    className="password-toggle"
                    style={{ zIndex: 20, background: 'rgba(0,0,0,0.5)', padding: '0.5rem', borderRadius: '50%' }}
                    onClick={clearUpload}
                  >
                    <XCircle size={32} className="text-accent" />
                  </button>
                </>
              ) : (
                <>
                  <UploadCloud size={48} className="text-secondary glow-icon" />
                  <div>
                    <span className="text-accent" style={{ fontWeight: 600 }}>
                      {t('dragDrop')}
                    </span>
                  </div>
                  <span className="text-secondary" style={{ fontSize: '0.8rem' }}>JPG, PNG, WEBP</span>
                </>
              )}
              <input
                type="file"
                style={{ display: 'none' }}
                accept="image/jpeg, image/png, image/webp"
                onChange={handleFileChange}
              />
            </label>

            <button
              className="btn-primary action-btn"
              onClick={handleScan}
              disabled={!selectedFile || isScanning}
            >
              <ScanLine size={20} />
              {isScanning ? t('analyzing') : t('scanBtn')}
            </button>
          </>
        )}

        {activeTab === 'camera' && (
          <>
            {cameraError ? (
              <div className="upload-zone" style={{ borderStyle: 'solid' }}>
                <Camera size={48} className="text-secondary" />
                <p className="text-secondary">{cameraError}</p>
                <button className="btn-outline glow-hover" onClick={startCamera}>
                  Retry Access
                </button>
              </div>
            ) : (
              <div className="camera-container">
                {previewUrl ? (
                  <>
                    <img src={previewUrl} alt="Preview" className="camera-feed" />
                    <button
                      className="password-toggle"
                      style={{ top: '1rem', right: '1rem', zIndex: 20, background: 'rgba(0,0,0,0.5)', padding: '0.5rem', borderRadius: '50%' }}
                      onClick={clearUpload}
                    >
                      <XCircle size={32} className="text-accent" />
                    </button>
                  </>
                ) : (
                  <>
                    <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                    <div className="camera-overlay-controls">
                      <button
                        className="btn-primary"
                        onClick={captureFrame}
                        style={{ borderRadius: '50px', padding: '0.8rem 2rem' }}
                      >
                        <Camera size={20} style={{ display: 'inline', marginRight: '0.5rem', marginBottom: '-4px' }} />
                        {t('captureBtn')}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            <button
              className="btn-primary action-btn"
              style={{ marginTop: '2rem' }}
              onClick={handleScan}
              disabled={!selectedFile || isScanning}
            >
              <ScanLine size={20} />
              {isScanning ? t('analyzing') : t('scanBtn')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Scan;