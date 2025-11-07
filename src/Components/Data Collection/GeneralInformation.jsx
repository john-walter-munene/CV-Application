function GeneralInformation({ myResume, onResumeDataChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the correct field using the previous state
    onResumeDataChange(prevResume => ({
      ...prevResume,
      [name]: value
    }));
  };

  return (
    <div className="data-general-information">
      <h2>General Information</h2>

      <form >
        <input type="text" name="name" placeholder="Full Name" value={myResume.name} onChange={handleChange} />
        <input type="number" name="mobileOne" placeholder="First Mobile" value={myResume.mobileOne} onChange={handleChange} />
        <input type="number" name="mobileTwo" placeholder="Second Mobile" value={myResume.mobileTwo} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" value={myResume.email} onChange={handleChange} />
        <input type="text" name="telegram" placeholder="Telegram" value={myResume.telegram} onChange={handleChange} />
        <input type="url" name="github" placeholder="GitHub" value={myResume.github} onChange={handleChange} />
        <input type="url" name="linkedIn" placeholder="LinkedIn" value={myResume.linkedIn} onChange={handleChange} />
      </form>
    </div>
  );
}

export { GeneralInformation };