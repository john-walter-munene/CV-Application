function Education({ educationInfo }) {
    const { school, schoolStartDate, schoolFinishDate, fieldOfStudy } = educationInfo;

    return (
        <div className="education-summary">
            <h2>Education Summary and Certifications</h2>
            
            <h3>{school}</h3>

            <p>{schoolStartDate} — {schoolFinishDate}</p>

            <p>{fieldOfStudy}</p>
        </div>
    );
}

export { Education };