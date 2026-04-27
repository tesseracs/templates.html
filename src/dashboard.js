function badgeTone(statusTone) {
  return statusTone === "risk" ? "risk" : "good";
}

function statusTone(readinessScore) {
  return readinessScore >= 80 ? "good" : "risk";
}

function renderSummaryCards(summary) {
  return summary
    .map(
      (item) => `
        <article class="summary-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderMilestones(milestones) {
  return milestones
    .map(
      (milestone) => `
        <article class="timeline-card">
          <div class="timeline-meta">
            <span class="badge" data-tone="neutral">${milestone.stream}</span>
            <span class="badge" data-tone="${badgeTone(milestone.tone)}">${milestone.status}</span>
            <span class="badge" data-tone="neutral">${milestone.due}</span>
          </div>
          <h3>${milestone.title}</h3>
          <p>${milestone.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderFocusAreas(focusAreas) {
  return focusAreas
    .map(
      (item) => `
        <article class="focus-item">
          <div class="focus-meta">
            <span class="badge" data-tone="neutral">${item.owner}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <ul>
            ${item.actions.map((action) => `<li>${action}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderDashboard(root, data, selectedStream) {
  const visibleMilestones =
    selectedStream === "All"
      ? data.milestones
      : data.milestones.filter((milestone) => milestone.stream === selectedStream);
  const streamOptions = ["All", ...new Set(data.milestones.map((milestone) => milestone.stream))];
  const readinessTone = statusTone(data.readinessScore);

  root.innerHTML = `
    <section class="summary-panel" aria-labelledby="overview-title">
      <div class="section-heading">
        <div>
          <h2 id="overview-title">${data.productName} launch overview</h2>
          <p>Use the summary cards to ground the story before you open the detailed workstreams.</p>
        </div>
        <div class="status-pill" data-tone="${readinessTone}">
          Ready score: ${data.readinessScore}/100
        </div>
      </div>
      <div class="summary-grid">
        ${renderSummaryCards(data.summary)}
      </div>
    </section>

    <section class="timeline-panel" aria-labelledby="timeline-title">
      <div class="section-heading">
        <div>
          <h2 id="timeline-title">Milestone tracker</h2>
          <p>Keep the launch narrative tight by grouping cross-functional work in one view.</p>
        </div>
      </div>
      <div class="toolbar">
        <p>Showing ${visibleMilestones.length} milestone${visibleMilestones.length === 1 ? "" : "s"}.</p>
        <label for="stream-filter">
          Stream
          <select id="stream-filter" name="stream-filter">
            ${streamOptions
              .map(
                (stream) =>
                  `<option value="${stream}"${stream === selectedStream ? " selected" : ""}>${stream}</option>`,
              )
              .join("")}
          </select>
        </label>
      </div>
      <div class="timeline-list">
        ${renderMilestones(visibleMilestones)}
      </div>
    </section>

    <section class="focus-panel" aria-labelledby="focus-title">
      <div class="section-heading">
        <div>
          <h2 id="focus-title">Starter notes</h2>
          <p>This section shows how to mix reusable content blocks with richer copy.</p>
        </div>
      </div>
      <div class="focus-list">
        ${renderFocusAreas(data.focusAreas)}
      </div>
    </section>
  `;

  const filter = root.querySelector("#stream-filter");
  if (filter instanceof HTMLSelectElement) {
    filter.addEventListener("change", (event) => {
      const nextValue = event.target.value;
      renderDashboard(root, data, nextValue);
    });
  }
}

export function createLaunchDashboard(root, data) {
  renderDashboard(root, data, "All");
}
