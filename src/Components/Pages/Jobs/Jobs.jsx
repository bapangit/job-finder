import Button from "Components/Buttons/Button";
import { UserContext } from "Components/Contexts/UserContext";
import { ToastContext } from "Components/Toast/ToastContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 15px;
  width: 100%;
  overflow-y: scroll;
  margin: 20px;
  .job {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    border: 1px solid grey;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    transition: 400ms all;
  }
`;

function Jobs() {
  const { userId } = useContext(UserContext);
  const { setToast } = useContext(ToastContext);

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/fetch-job").then(
      (res) => {
        if (res.data?.length) {
          setJobList(res.data);
        }
      },
      (err) => {
        console.log("err", err.message);
      }
    );
  }, []);

  const apply = async (id) => {
    await axios
      .post("http://localhost:5000/apply-job", { jobId: id, userId: userId })
      .then(
        (res) => {
          if (res.data?.length) {
            console.log(res.data);
            setJobList(res.data);
          }
          console.log(res.data);
          setToast(res.data?.message || "Something Went Wrong.");
        },
        (err) => {
          console.log("err", err.message);
          setToast(err.message);
        }
      );
  };
  return (
    <Container>
      {jobList.map(({ name, company, salary, location, type, _id }, index) => {
        return (
          <div className="job" key={index}>
            <h5
              style={{
                textAlign: "center",
                textTransform: "capitalize",
                margin: "10px 10px 10px 4px",
              }}
            >
              {name}
            </h5>
            <div
              style={{
                margin: "10px",
                fontSize: "14px",
              }}
            >
              <span>company : </span>
              <span>{company}</span>
            </div>
            <div
              style={{
                margin: "10px",
                fontSize: "14px",
              }}
            >
              <span>salary : </span>
              <span>{salary}</span>
            </div>
            <div
              style={{
                margin: "10px",
                fontSize: "14px",
              }}
            >
              <span>location : </span>
              <span>{location}</span>
            </div>
            <div
              style={{
                margin: "10px",
                fontSize: "14px",
              }}
            >
              <span>jon type : </span>
              <span>{type}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                label="Apply"
                onClick={() => {
                  apply(_id);
                }}
              />
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Jobs;
