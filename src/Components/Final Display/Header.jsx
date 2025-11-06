function ResumeHeader({headerData}) {

    const { name, generalInformation } = headerData;

    return (<>
        {<Name nameOfHolder={name}/>}
        {<GeneralInformation generalInfoOfHolder={generalInformation}/>}    
    </>);
}

function Name({ nameOfHolder }) {
    return (<h1>{nameOfHolder}</h1>);
}

function GeneralInformation({ generalInfoOfHolder }) {
    return (<div>
        <p>Mobile: {generalInfoOfHolder.mobileOne} / {generalInfoOfHolder.mobileTwo}</p>

        <p>Email: {generalInfoOfHolder.email} || Telegram: {generalInfoOfHolder.telegram}</p>

        <p>GitHub: <a href={generalInfoOfHolder.github}>{generalInfoOfHolder.github}</a></p>

        <p>LinkedIn: <a href={generalInfoOfHolder.linkedIn}>{generalInfoOfHolder.linkedIn}</a></p>
    </div>);
}

export { ResumeHeader };