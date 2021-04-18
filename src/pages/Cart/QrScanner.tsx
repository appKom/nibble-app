import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { useEnablePurchase } from "state/cart";

const QrScanner = () => {
  const enablePurchase = useEnablePurchase();
  const [isScanning, setIsScanning] = useState(false);

  // TODO Handle error
  const handleError = (error: any) => {
    console.log(error);
  };

  const handleScan = (data: string | null) => {
    if (data) {
      setIsScanning(false);
      enablePurchase();
    }
  };

  if (isScanning)
    return (
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    );

  return <button onClick={() => setIsScanning(true)}>Scan QR</button>;
};

export default QrScanner;
