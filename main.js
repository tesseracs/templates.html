import { launchDeskData } from "./src/data.js";
import { createLaunchDashboard } from "./src/dashboard.js";

const root = document.getElementById("app");

if (root) {
  createLaunchDashboard(root, launchDeskData);
}
