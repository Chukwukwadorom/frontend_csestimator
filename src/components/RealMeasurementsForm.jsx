import styles from "./RealMeasurementsForm.module.css";

const RealMeasurementsForm = ({ realMeasurements, setRealMeasurements, consent, setConsent }) => {
    const handleRealMeasurementsChange = (event, field) => {
        setRealMeasurements({
            ...realMeasurements,
            [field]: event.target.value, // Update specific field
        });
    };

    return (
        <div className={`${styles.container} m-4`}>
            <h3 className={styles.heading}>Help Us Improve!</h3>
            <p>Would you like to help improve our app? If yes, you can provide your real measurements below.</p>

            <div className={`${styles.label_class} d-flex align-items-center`}>
                <p className="m-0">Yep! I’d like to help</p>
                <input 
                    className="form-check-input ms-2"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                />
            </div>


            {consent && (
                <div>
                    <h4>Enter Your Real Measurements (cm)</h4>
                    {Object.keys(realMeasurements).map((key) => (
                        <input
                            key={key}
                            type="number"
                            placeholder={key.replace("-", " ")}
                            value={realMeasurements[key] || ""}
                            onChange={(e) => handleRealMeasurementsChange(e, key)}
                            className={`{styles.input_class} form-control`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RealMeasurementsForm;
