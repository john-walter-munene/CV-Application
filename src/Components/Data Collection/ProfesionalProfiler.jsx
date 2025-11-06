import { buildTimeFlexboxer } from "../../utils/utilities";
import { textAreaStyles } from "../../utils/utilities";

function ProfesionalSummary({ myResume, onResumeDataChange }) {

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "focus") {
      // Split by full stop but keep all items as-is (even empty or partially typed)
      const focusItems = value.split(".");
      onResumeDataChange(prevResume => ({
        ...prevResume,
        focus: focusItems,
      }));
      return;
    }

    // Default for other fields
    onResumeDataChange(prevResume => ({
      ...prevResume,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Professional Work Experience</h2>

      <form style={buildTimeFlexboxer}>
        <input type="text" name="role" placeholder="Career" value={myResume.role} onChange={handleChange} />
        <input type="text" name="workStartDate" placeholder="Start Date" value={myResume.workStartDate} onChange={handleChange} />
        <input type="text" name="workFinishDate" placeholder="Finish Date" value={myResume.workFinishDate} onChange={handleChange} />
        <input type="text" name="workOverview" placeholder="Simple description" value={myResume.workOverview} onChange={handleChange} />
        <textarea name="focus" placeholder="Add key focus areas, separated by periods" style={textAreaStyles}
            value={myResume.focus.join(".")} /* join without trimming spaces */ onChange ={handleChange} />
      </form>
    </div>
  );
}

export { ProfesionalSummary };
