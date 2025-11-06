function DataCollectionHeader() {
    const resumeHeaderIcon = '/Images/Article.png';

    const ImageStyles = {
        width: '50px',
        height: '50px',
    };

    return (<div>
        <img src={resumeHeaderIcon} alt="Article" style={ImageStyles} />

        <h1>CV Generator</h1>
    </div>);
}

export { DataCollectionHeader };