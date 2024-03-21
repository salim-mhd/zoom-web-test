import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import http from "../../services/api"; // Import API service
import { meeting_register_url } from "../../services/api.utils"; // Import API endpoint URL
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

// Define the GenerateForm component
export default function GenerateForm() {
  // State variables for form inputs
  const [meetingName, setMeetingName] = useState(""); // State for meeting name
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date
  const [startTime, setStartTime] = useState(""); // State for start time

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selectedDate state when a new date is selected
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if meetingName, selectedDate, and startTime are not empty
    if (meetingName && selectedDate && startTime) {
      try {
        // Split the startTime into hours and minutes
        const [hours, minutes] = startTime.split(":").map(Number);

        // Set the time components to the selectedDate
        selectedDate.setHours(hours);
        selectedDate.setMinutes(minutes);

        // Now selectedDateTime contains the merged date and time
        const selectedDateTime = selectedDate;

        // Prepare request data with meetingName and selectedDateTime
        const requestData = {
          meetingName,
          selectedDateTime,
        };

        // Log the requestData for debugging
        console.log(requestData);

        // Send a POST request to the meeting registration API endpoint
        const response = await http.post(meeting_register_url, requestData);

        // If the response is successful, navigate to the home page
        if (response) {
          navigate("/");
        }

        // Log the response for debugging
        console.log("res", response);
      } catch (error) {
        console.log(error); // Log any errors that occur during the request
      }
    }
  };

  // GenerateForm component JSX
  return (
    <form className="container w-50 border border-1 border-secondary rounded p-5">
      {/* Meeting Name input */}
      <div className="my-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-bold fs-5">
          Meeting Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
        />
      </div>

      {/* Date, Start Time, and End Time inputs */}
      <div className="d-flex flex-wrap align-items-center justify-content-between my-5">
        {/* Date input */}
        <div>
          <div className="form-label fw-bold fs-5">Date</div>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            onChange={handleDateChange}
            className="p-2 rounded"
          />
        </div>

        {/* Start Time input */}
        <div>
          <div className="form-label fw-bold fs-5">Start Time</div>
          <input
            type="time"
            id="startTime"
            className="p-2 rounded"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary w-50 my-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
