import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: "1m", target: 100 }, // traffic ramp-up from 1 to 100 users over 1 minute.
    { duration: "1m", target: 100 }, // stay at 100 users for 1 minutes
    { duration: "1m", target: 0 }, // ramp-down to 0 users for the next 1 minute
  ],
};

export default () => {
  const urlRes = http.get(
    "http://ec2-13-229-135-220.ap-southeast-1.compute.amazonaws.com:3000/"
  );
  sleep(1);
};
