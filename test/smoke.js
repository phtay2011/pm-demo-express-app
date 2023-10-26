import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: "1m", // This can be shorter or just a few iterations
};

export default () => {
  const url =
    "http://ec2-13-229-135-220.ap-southeast-1.compute.amazonaws.com:3000/";
  // Test 1 - ensure website is up
  const websiteTest = http.get(url);

  // Test 2 - ensure api can store data
  const payload = JSON.stringify({
    name: "paul",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const apiTest = http.post(url, payload, params);
  sleep(1);
};
