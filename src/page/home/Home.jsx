import React, { useEffect, useState } from "react";
import NavbarComponent from "../../component/navbarComponent/NavbarComponent";
import "./Home.scss";
import http from "../../services/api";
import { meetings_url } from "../../services/api.utils";

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  const fetchMeetingDetails = async () => {
    try {
      const response = await http.get(meetings_url);
      const { data } = response;
      const array = data.data.meetings;
      array.reverse();
      setMeetings(array);
    } catch (error) {
      console.error("Error fetching meetings:", error);
    }
  };

  useEffect(() => {
    fetchMeetingDetails();
  }, []);

  return (
    <div className="Home">
      <NavbarComponent option={"home"} />
      <div className="container my-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Meeting Name</th>
              <th scope="col">Link</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {meetings.length > 0 ? (
              meetings.map((meeting, index) => (
                <tr key={index}>
                  <th scope="row">{meeting.id}</th>
                  <td>{meeting.topic}</td>
                  <td><a className="p-1" href={meeting.join_url}>{meeting.uuid}</a></td>
                  <td>{meeting.created_at}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
