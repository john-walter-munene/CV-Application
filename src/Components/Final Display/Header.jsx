function ResumeHeader({ headerData }) {
    const { name, generalInformation } = headerData;

    return (
        <>
            <Name nameOfHolder={name} />
            <GeneralInformation generalInfoOfHolder={generalInformation} />
        </>
    );
}

function Name({ nameOfHolder }) {
    return <h1 className="name">{nameOfHolder}</h1>;
}

function GeneralInformation({ generalInfoOfHolder }) {
    return (
        <div className="general-information">
            <p>
                Mobile: {generalInfoOfHolder.mobileOne} / {generalInfoOfHolder.mobileTwo}
            </p>

            <p>
                Email: <a href={`mailto:${generalInfoOfHolder.email}`}>{generalInfoOfHolder.email}</a> || Telegram: {generalInfoOfHolder.telegram}
            </p>

            <p>
                GitHub: <a href={generalInfoOfHolder.github} target="_blank" rel="noopener noreferrer">{generalInfoOfHolder.github}</a>
            </p>

            <p>
                LinkedIn: <a href={generalInfoOfHolder.linkedIn} target="_blank" rel="noopener noreferrer">{generalInfoOfHolder.linkedIn}</a>
            </p>
        </div>
    );
}

export { ResumeHeader };
