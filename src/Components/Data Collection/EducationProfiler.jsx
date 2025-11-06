import { buildTimeFlexboxer } from "../../utils/utilities";

function EducationSummary({ myResume, onResumeDataChange }) {

    const handleChange = (event) => {
        const { name, value } = event.target;

        onResumeDataChange(prevResume => ({
            ...prevResume, 
            [name]: value,
        }))

    }

    return (<>
        <h2>Education & Certifications</h2>

        <form style={buildTimeFlexboxer}>
            <input type="text" name="school" placeholder="University" value={myResume.school} onChange={handleChange}/>
            <input type="text" name="schoolStartDate" placeholder="Start Date" value={myResume.schoolStartDate} onChange={handleChange} />
            <input type="text" name="schoolFinishDate" placeholder="Finish Date" value={myResume.schoolFinishDate} onChange={handleChange} />
            <input type="text" name="fieldOfStudy"  placeholder="Degree you studied" value={myResume.fieldOfStudy} onChange={handleChange} />
        </form>
    </>);
}

export { EducationSummary };