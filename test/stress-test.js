import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: "10m", target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: "30m", target: 200 }, // stay at higher 200 users for 30 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get(
    "http://ec2-13-229-135-220.ap-southeast-1.compute.amazonaws.com:3000/"
  );
  sleep(1);
};