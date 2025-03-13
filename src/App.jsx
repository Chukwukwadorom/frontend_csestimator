import { useState } from "react";
import UploadForm from "./components/UploadForm";
import PredictedMeasurements from "./components/PredictedMeasurements";
import RealMeasurementsForm from "./components/RealMeasurementsForm";
import styles from "./App.module.css"; // Import the CSS module

function App() {
  const [measurements, setMeasurements] = useState(null);
  const [realMeasurements, setRealMeasurements] = useState({
    ankle: "",
    armLength: "",
    bicep: "",
    calf: "",
    chest: "",
    forearm: "",
    height: "",
    hip: "",
    legLength: "",
    shoulderBreadth: "",
    shoulderToCrotch: "",
    thigh: "",
    waist: "",
    wrist: "",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clothing Size Estimator</h1>
      
      {/* Image Upload Component */}
      <UploadForm setMeasurements={setMeasurements} />
      {/* <UploadForm setMeasurements={setMeasurements} realMeasurements={realMeasurements} /> */}

      
      {/* Display Predictions if Available */}
      {measurements && <PredictedMeasurements measurements={measurements} />}
      
      {/* Real Measurements Input Form */}
      <RealMeasurementsForm realMeasurements={realMeasurements} setRealMeasurements={setRealMeasurements} />
    </div>
  );
}

export default App;
