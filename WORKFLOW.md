# Eye of Odin Project Workflow

This document outlines the key areas and tasks for the Eye of Odin OSINT Digital Footprint Scanner project. Use this as a guide to track progress and identify next steps.

## Project Areas

1.  **Core Functionality (Scanning)**
2.  **API Integrations**
3.  **Frontend (UI/UX)**
4.  **Backend/API Handling**
5.  **Data Management and Storage**
6.  **Reporting and Visualization**
7.  **Documentation**
8.  **Testing and Debugging**
9.  **Deployment**

## Workflow and Tasks

Below are the detailed tasks within each project area. Check off completed tasks and add new tasks as needed.

### 1. Core Functionality (Scanning)

- [ ] Define scanning parameters (e.g., input types: email, phone, name).  

        We have made progress on the implementation:

In src/pages/Index.tsx, we added a basic structure for user input that includes an input field for the value and a select dropdown for the type (email, phone, name). This is the beginning of implementing the handling of these parameters in the frontend.
We have utility functions like searchDeHashed that take the query (input value) and type as parameters. This is part of the backend/API handling of these parameters.
However, the implementation is not yet complete:

Input validation: We haven't added code to validate if the user's input matches the selected type (e.g., ensuring a valid email format when "Email" is selected).
Comprehensive API calling logic: While we have a basic handleSearch function, you might need more sophisticated logic to determine which API to call based on the input type and potentially handle cases where one API fails.
Full frontend integration: The current result display in src/pages/Index.tsx is basic (JSON.stringify). You'll need to fully integrate the display of results based on the input type and the data received from the APIs.
- [x] Implement input validation for different scan types.

        Basic input validation for email, phone, and name has been implemented in `src/pages/Index.tsx`. Further validation might be needed for more robust checks.
- [ ] Integrate user input handling in the frontend.
- [ ] Trigger API calls based on user input and scan type.

### 2. API Integrations

- [x] Integrate Have I Been Pwned (HIBP) API for email breaches.
- [ ] Research and select additional free/low-cost OSINT APIs (e.g., IPinfo free tier, limited Hunter.io/Clearbit).
- [ ] Obtain API keys for selected APIs.
- [ ] Implement API utility functions for each integrated API (e.g., `src/utils/ipinfo.ts`, `src/utils/hunter.ts`).
- [ ] Handle API responses and potential errors.
- [ ] Manage API rate limits (if applicable for free tiers).

### 3. Frontend (UI/UX)

- [ ] Design and build the user interface for the scanning input.
- [ ] Design and build the user interface for displaying scan results.
- [ ] Implement responsive design for different screen sizes.
- [ ] Enhance user experience with loading indicators, error messages, and clear data presentation.
- [ ] Style components using Tailwind CSS and shadcn/ui.

### 4. Backend/API Handling

- [ ] (If using a backend) Create backend endpoints to handle frontend requests and interact with external APIs.
- [ ] (If using a backend) Implement server-side logic for data processing and aggregation.
- [ ] Secure API keys and credentials (using environment variables).

### 5. Data Management and Storage

- [ ] Determine how to store scan results (e.g., in-memory, local storage for a school project).
- [ ] Implement logic to store and retrieve scan results.
- [ ] (Optional for school project) Consider database integration for persistent storage if needed.

### 6. Reporting and Visualization

- [ ] Design how scan results will be presented (e.g., tables, charts).
- [ ] Implement basic result visualization in the UI.
- [ ] (Planned/In Progress based on README) Explore generating reports based on scan findings.
- [ ] (Planned/In Progress based on README) Implement data visualization components (e.g., using Recharts).

### 7. Documentation

- [ ] Update the README.md with project details, features, and setup instructions.
- [ ] Document API integrations and their usage.
- [ ] Document the project workflow and task list (this file).
- [ ] Explain the ethical considerations of using OSINT data.

### 8. Testing and Debugging

- [ ] Write unit tests for utility functions (e.g., API calls, data processing).
- [ ] Test frontend components and user interactions.
- [ ] Debug any errors or issues encountered during development.

### 9. Deployment

- [ ] Prepare the application for deployment.
- [ ] Choose a hosting platform (e.g., Vercel, Netlify, GitHub Pages).
- [ ] Deploy the application.

## How to Use This Workflow

1.  Keep this `WORKFLOW.md` file open while you are working on the project.
2.  As you complete a task, mark it as done by changing `[ ]` to `[x]`.
3.  If you identify a new task, add it to the relevant section.
4.  If you get stuck or lost, refer to this document to see what the next planned steps are.
5.  Feel free to modify this workflow to better suit your development process.

This workflow is a living document, so update it as your project evolves.
