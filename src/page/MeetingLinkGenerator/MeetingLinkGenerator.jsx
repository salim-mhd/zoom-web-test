import React from "react";
import "./MeetingLinkGenerator.scss"; // Importing styles for MeetingLinkGenerator component
import NavbarComponent from "../../component/navbarComponent/NavbarComponent"; // Importing NavbarComponent
import GenerateForm from "../../component/form/GenerateForm"; // Importing GenerateForm component

export default function MeetingLinkGenerator() {
  // MeetingLinkGenerator component
  return (
    <div>
      {/* NavbarComponent */}
      <NavbarComponent option={"generatorMeeting"} />
      <div>
        <div className="text-center fs-1 fw-bold my-5">Generate Meeting</div>{" "}
        {/* Heading */}
        <GenerateForm /> {/* GenerateForm component */}
      </div>
    </div>
  );
}
