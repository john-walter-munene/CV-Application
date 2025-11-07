function ProfessionalWork({ workInfo }) {
    const { role, workStartDate, workFinishDate, workOverview, focus } = workInfo;
    
    console.log(`"${workOverview}"`);

    const focusListItems = focus
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map((item, index) => <li key={index}>{item}.</li>);

    return (
        <div className="professional-experience">
            <h2>{role}</h2>

            <p>{workStartDate} — {workFinishDate}</p>

            <p className="overview">{workOverview}</p>

            <ul>{focusListItems}</ul>
        </div>
    );
}

export { ProfessionalWork };