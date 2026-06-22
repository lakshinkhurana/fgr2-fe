"use client";
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, FileText, ShieldCheck } from 'lucide-react';

export default function ChallanDownloader({ violationData, buttonText = "Download E-Challan", style }) {
  const printRef = useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;

    // Make it temporarily visible for html2canvas
    element.style.display = 'block';
    
    try {
      const canvas = await html2canvas(element, { 
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`E-Challan-${violationData?.id || 'Report'}.pdf`);
    } catch (error) {
      console.error("Error generating PDF", error);
    } finally {
      // Hide it again
      element.style.display = 'none';
    }
  };

  // Mock data fallback
  const data = violationData || {
    id: "V-9921",
    date: "2026-06-21 14:30:00",
    plate: "MH01AB1234",
    type: "No Helmet",
    location: "Sector 42 Junction",
    fine: "₹1,000"
  };

  return (
    <>
      <button 
        onClick={handleDownloadPdf}
        style={{ 
          background: "none", 
          border: "none", 
          color: "var(--color-accent)", 
          cursor: "pointer", 
          display: "flex", 
          alignItems: "center", 
          gap: "0.5rem",
          ...style
        }}
      >
        <FileText size={16} /> {buttonText}
      </button>

      {/* Hidden Printable Template */}
      <div 
        ref={printRef} 
        style={{ 
          display: 'none', 
          position: 'absolute', 
          top: '-9999px', 
          left: '-9999px',
          width: '800px',
          padding: '40px',
          background: 'white',
          color: 'black',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '20px', marginBottom: '20px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', color: '#1a1a1a' }}>TRAFFIC POLICE DEPARTMENT</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>Automated Traffic Enforcement System</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <ShieldCheck size={48} color="#000" />
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>E-CHALLAN</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div style={{ flex: 1 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666', width: '150px' }}>Challan No:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{data.id}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666' }}>Date & Time:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{data.date}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666' }}>Location:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{data.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666', width: '150px' }}>Vehicle No:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '20px' }}>{data.plate}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666' }}>Violation Type:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#ef4444' }}>{data.type}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#666' }}>Fine Amount:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '24px' }}>{data.fine}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: '40px', background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 15px 0' }}>Photographic Evidence</h3>
          <div style={{ width: '100%', height: '300px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
            [ Automated Camera Capture Frame goes here ]
          </div>
        </div>

        <div style={{ fontSize: '12px', color: '#666', borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center' }}>
          This is a computer generated document and does not require a physical signature.
          <br />
          Please pay the fine amount within 15 days to avoid further legal action.
        </div>
      </div>
    </>
  );
}
