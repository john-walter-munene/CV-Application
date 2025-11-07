import { useState } from 'react';

// Styling and schema handlers.
import '../styles/data-collection.css'
import '../styles/final-display.css'
import { resumeSchema, schemerFlattener, schemaNormalizer } from '../assets/resume-schema';

// Final Display components.
import { ResumeHeader } from './Final Display/Header';
import { CareerProfile } from './Final Display/CareerProfile';
import { Education } from './Final Display/EducationalExperience';
import { ProfessionalWork } from './Final Display/ProfessionalExperience';

// Data Collection Unit components
import { DataCollectionHeader } from './Data Collection/DataCollectionHeader';
import { GeneralInformation } from './Data Collection/GeneralInformation';
import { CareerSummary } from './Data Collection/CareerProfiler';
import { EducationSummary } from './Data Collection/EducationProfiler';
import { ProfesionalSummary } from './Data Collection/ProfesionalProfiler';

const flattenedResumeSchema = schemerFlattener(resumeSchema);

function ResumeApp() {
  const [myResume, setMyResume] = useState(flattenedResumeSchema);
  const [currentMode, setCurrentMode] = useState("data-collection");

  // Check if all form fields are filled to allow submissions. 
  const isFormComplete = Object.values(myResume).every(
    value => value !== "" && !(Array.isArray(value) && value.length === 0)
  );

  const handleToggleMode = () => {
    if (currentMode === "data-collection") {
      // Only switch if form complete
      if (isFormComplete) { setCurrentMode("display");
      } else {
        alert("Please fill in all fields before submitting.");
      }
    } else {
      // Go back to editing
      setCurrentMode("data-collection");
    }
  };

  const modeTogglerButtonText = currentMode === "data-collection" ? "Submit CV" : "Edit CV";
  const normalizedResume = schemaNormalizer(myResume);

  return (
    <div>
      {currentMode === "data-collection" ? (
        <DataCollectionUnit myResume={myResume} onResumeDataChange={setMyResume}/>
      ) : (
        <ResumeAppViewer resumeDataInfo={normalizedResume} />)}

      <button className='toggler' onClick={handleToggleMode}>{modeTogglerButtonText}</button>
    </div>
  );
}

function DataCollectionUnit({ myResume, onResumeDataChange }) {
  return (
    <div className='data-collection-unit'>
      <DataCollectionHeader myResume={myResume} onResumeDataChange={onResumeDataChange} />
      <GeneralInformation myResume={myResume} onResumeDataChange={onResumeDataChange} />
      <CareerSummary myResume={myResume} onResumeDataChange={onResumeDataChange} />
      <EducationSummary myResume={myResume} onResumeDataChange={onResumeDataChange} />
      <ProfesionalSummary myResume={myResume} onResumeDataChange={onResumeDataChange} />
    </div>
  );
}

function ResumeAppViewer({ resumeDataInfo }) {
  const { header, careerProfile, education, workExperience } = resumeDataInfo;

  return (
    <div className='resume-view-unit'>
      <ResumeHeader headerData={header} />
      <CareerProfile profile={careerProfile} />
      <Education educationInfo={education} />
      <ProfessionalWork workInfo={workExperience} />
    </div>
  );
}

export { ResumeApp };