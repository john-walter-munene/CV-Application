import { textAreaStyles } from "../../utils/utilities";

function CareerSummary({ myResume, onResumeDataChange }) {

    const handleChange = (event) => {
        const value = event.target.value;

        // Update Career summary.
        onResumeDataChange(prevResume => ({
            ...prevResume,
            careerProfile: value,
        }));
    }

    return (<div>
        <h2>Career Profile</h2>

        <textarea placeholder="Add a summary of your career ambitions, and goals" style={textAreaStyles}
            value={myResume.careerProfile} onChange={handleChange}
            />
    </div>);
}

export { CareerSummary };