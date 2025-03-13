import styles from "./PredictedMeasurements.module.css";

const PredictedMeasurements = ({ measurements }) => {
    return (
        <div className={`${styles.container} m-3`}>
            <h3>Predicted Measurements</h3>
            {Object.entries(measurements).map(([key, value]) => (
                <p key={key}>
                    <strong>{key.replace("-", " ").toUpperCase()}:</strong> {value} cm
                </p>
            ))}
        </div>
    );
};

export default PredictedMeasurements;
