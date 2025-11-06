function ProfessionalWork({ workInfo }) {
    const { role, workStartDate, workFinishDate, workOverview, focus } = workInfo;


    const focusListItems = focus
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map((item, index) => <li key={index}>{item}.</li>);

    return (
        <div>
            <h2>{role}</h2>

            <p>{workStartDate} — {workFinishDate}</p>

            <p>{workOverview}</p>

            <ul>{focusListItems}</ul>
        </div>
    );
}

export { ProfessionalWork };