export const launchDeskData = {
  productName: "Northstar",
  readinessScore: 84,
  summary: [
    {
      label: "Launch readiness",
      value: "84%",
      detail: "Up 6 points from the last checkpoint.",
    },
    {
      label: "Open blockers",
      value: "2",
      detail: "One legal review and one analytics patch.",
    },
    {
      label: "Milestones this week",
      value: "4",
      detail: "Content sign-off, beta email, QA pass, support brief.",
    },
    {
      label: "Pilot accounts",
      value: "18",
      detail: "Twelve active, six onboarding this week.",
    },
  ],
  milestones: [
    {
      title: "Pricing page content freeze",
      due: "Tue 14:00",
      stream: "Marketing",
      status: "On track",
      tone: "good",
      note: "Copy approved, waiting on final screenshots from design.",
    },
    {
      title: "Telemetry patch validation",
      due: "Wed 10:30",
      stream: "Engineering",
      status: "Needs attention",
      tone: "risk",
      note: "Retry logic is merged, but staging still misses one event path.",
    },
    {
      title: "Success team dry run",
      due: "Thu 15:00",
      stream: "Operations",
      status: "On track",
      tone: "good",
      note: "Deck and macros are ready for rehearsal with support leads.",
    },
    {
      title: "Procurement sign-off",
      due: "Fri 09:00",
      stream: "Finance",
      status: "Needs attention",
      tone: "risk",
      note: "Vendor clause review needs a final pass from legal before send.",
    },
  ],
  focusAreas: [
    {
      title: "This week's winning move",
      owner: "Growth pod",
      summary: "Turn the launch story into a repeatable handoff between product marketing and success.",
      actions: [
        "Ship the walkthrough video before Thursday's pilot webinar.",
        "Package a one-page ROI summary for account managers.",
      ],
    },
    {
      title: "Where to extend next",
      owner: "Frontend starter",
      summary: "Swap the static data source for live API data or local JSON without changing the page shell.",
      actions: [
        "Move filters into URL state for shareable dashboard views.",
        "Break card renderers into smaller modules as the page grows.",
      ],
    },
  ],
};
