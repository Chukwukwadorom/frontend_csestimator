import { useState } from "react";
import styles from "./UploadForm.module.css";

const UploadForm = ({ setMeasurements, realMeasurements, consent }) => {
    const [frontImage, setFrontImage] = useState(null);
    const [sideImage, setSideImage] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (event, setImage) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!frontImage || !sideImage) {
            setError("Please upload both images.");
            return;
        }

        setError("");

        const formData = new FormData();
        formData.append("front_image", frontImage);
        formData.append("side_image", sideImage);

        // Check consent before adding real measurements
        if (consent) {
            formData.append("consent", consent); // Send consent status
            formData.append("real_measurements", JSON.stringify(realMeasurements)); // Send real measurements as JSON string
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/predict/", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to get prediction");
            }

            const data = await response.json();
            setMeasurements(data);
            alert("Upload successful!");
        } catch (err) {
            console.error("Error processing images:", err);
            setError("Error processing images.");
        }
    };

    return (
        <div className={`{styles.container} `}>
            <h2>Upload Front & Side Images</h2>

            <input className="form-control" type="file" accept="image/*" onChange={(e) => handleFileChange(e, setFrontImage)} />
            <input className="form-control" type="file" accept="image/*" onChange={(e) => handleFileChange(e, setSideImage)} />

            <button onClick={handleSubmit}>Predict Size</button>

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default UploadForm;
