import { useState } from "react";
import styles from "./RealMeasurementsForm.module.css";

const RealMeasurementsForm = ({ realMeasurements, setRealMeasurements }) => {
    const [consent, setConsent] = useState(false);

    const handleRealMeasurementsChange = (event, field) => {
        setRealMeasurements({
            ...realMeasurements,
            [field]: event.target.value, // Update specific field
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Help Us Improve!</h3>
            <p>Would you like to help improve our app? If yes, you can provide your real measurements below.</p>

            <label  className={styles.label_class}>
            <p>Yep! I’d like to help</p>
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                
            </label>

            {consent && (
                <div>
                    <h4>Enter Your Real Measurements (cm)</h4>
                    {Object.keys(realMeasurements).map((key) => (
                        <input
                            key={key}
                            type="number"
                            placeholder={key.replace("-", " ")}
                            value={realMeasurements[key]}
                            onChange={(e) => handleRealMeasurementsChange(e, key)}
                            className={styles.input_class}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RealMeasurementsForm;
