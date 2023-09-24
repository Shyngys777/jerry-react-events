import React from 'react';
import QRCodeReact from 'qrcode.react';
function QRCode({ link }) {
    return (
      <div className="qr-code">
        <QRCodeReact value={link} />
      </div>
    );
  }
  
  export default QRCode;