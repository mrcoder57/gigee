import React, { useState } from "react";

// Define categories
const categories = [
  "Hiring",
  "Gig Jobs",
  "Sports",
  "Coding Contest",
  "Cultural Events",
  "Festivals",
  "Picnic",
  "Guest Lectures",
  "Workshops",
];

// Define the FormData interface for form data structure
interface FormData {
  title: string;
  description: string;
  price: string;
  location: {
    name: string;
    coordinates: [number, number];
  };
  activities: string[];
  image: string;
  category: string;
  jobStarts: string;
  jobEnds: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  // Use the FormData type for formData state
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: "",
    location: { name: "", coordinates: [0, 0] },
    activities: [],
    image: "",
    category: "Gig Jobs",
    jobStarts: "",
    jobEnds: "",
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle location input changes
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  // Handle coordinate (latitude/longitude) changes
  const handleCoordinatesChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const coordinates = [...formData.location.coordinates];
    coordinates[index] = parseFloat(value);
    setFormData((prev:any) => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates,
      },
    }));
  };

  // Handle step navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="form-container">
      <h1>Multi-Step Gig Form</h1>
      <form>
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="step">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            {formData.category === "Hiring" && (
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </label>
            )}
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* Step 2: Location & Activities */}
        {step === 2 && (
          <div className="step">
            <label>
              Location Name:
              <input
                type="text"
                name="name"
                value={formData.location.name}
                onChange={handleLocationChange}
                required
              />
            </label>
            <label>
              Latitude:
              <input
                type="number"
                name="latitude"
                value={formData.location.coordinates[0] || ""}
                onChange={(e) => handleCoordinatesChange(e, 0)}
                required
              />
            </label>
            <label>
              Longitude:
              <input
                type="number"
                name="longitude"
                value={formData.location.coordinates[1] || ""}
                onChange={(e) => handleCoordinatesChange(e, 1)}
                required
              />
            </label>
            <label>
              Activities (Comma separated):
              <input
                type="text"
                name="activities"
                value={formData.activities.join(", ")}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    activities: e.target.value.split(",").map((item) => item.trim()),
                  }))
                }
              />
            </label>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* Step 3: Job Dates */}
        {step === 3 && (
          <div className="step">
            <label>
              Job Starts:
              <input
                type="datetime-local"
                name="jobStarts"
                value={formData.jobStarts}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Job Ends:
              <input
                type="datetime-local"
                name="jobEnds"
                value={formData.jobEnds}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
