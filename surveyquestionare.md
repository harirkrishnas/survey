Libraries you need to use
Material-UI (MUI)** need pre-built UI components (buttons, modals, forms) that can be deeply customized.
Redux: State Management,

now as the each user clicks on their respective box and the box should have a button to click "attend survey" and they will be taken to a survey page, as this is a multidimensional survey and as this survey has states and the survey is designed for each of these users and as they click on the survey the will be taken to the survey page, where 


Requirements
Req 1, For Social Entrepreneurs the form works in two stages as in the first stage they have to attend the survey and in the second stage they will be given a canvas to design their production process, we will design the canvas later, you have to create a multi stage flow where first comes the survey and second comes the canvas for process flow design.
Req 2: Social Entrepreneurs & Digital Platform Providers & IT Service Companies surveys are seprated based on zones and as they choose the zone the questions will change as this needs to be managed by state management.
Req 3, Before starting the survey an introductin page should come to help the user guide through the survey process, here you need to create custom content and in the bottom you have to create a conscent option for user to click and accept or reject and go back to the landing page.
Req 4: The elements under each question needs to be planned properly and create the most efficient components and elements to model them for example check box or information feeding box or rating scale or all other aspects, you have to understand each question and its answering mechanism and use React Hook Forms as well as other elements from material ui to designing a high quality high user experiance survey model.
Req 5, After the survey each user should get a popup on survey completion and thank you screen

Libraries to use


Survey form 
Questionnaire Model for Social Entrepreneurs

This survey instrument is designed to capture comprehensive data from social entrepreneurs operating in varied conflict environments. It is divided into two major parts: a core module (common to all respondents) and conflict‐phase–specific modules (branch logic based on the respondent’s current context).

---

## PART I: CORE MODULES

### 1. Introduction and Consent
- **Welcome Message & Purpose:**  
  “Thank you for participating in our study on how digital platforms and production processes transform Social Enterprises even in challenging conflict zones. Your insights will contribute to developing an innovative, process-based economic framework (i‑Economy).”
- **Instructions:**  
  - Answer all sections as fully as possible.
  - Use provided scales for quantitative ratings and add qualitative comments when prompted.
  - If a question does not apply, please indicate “N/A” with a brief explanation.
  - You will be directed via branch logic to the conflict-phase module that fits your current environment.
- **Consent:** (Checkboxes)  
  - [ ] I consent to participate in this research study.  
  - [ ] I understand that my responses will be anonymized and used solely for research purposes.

---

### 2. Demographic and Contextual Information
**Objective:** Capture personal details, organizational profile, and connectivity context.
- **Personal & Managerial Details:**
  1. Name (Optional): ____________________________
  2. Current Role in the Enterprise (e.g., Founder, Manager, Employee): ____________________________
  3. Age (years): ____________________________
  4. Gender: [ ] Male  [ ] Female  [ ] Other
  5. Highest Educational Qualification:  
     - [ ] No Formal  
     - [ ] High School  
     - [ ] Bachelor’s  
     - [ ] Master’s  
     - [ ] PhD
  6. Years of Experience in the Industry: ____________________________
  7. **Rate your digital literacy:**  
     (1 = Very Low, 5 = Very High): [1] [2] [3] [4] [5]  
  8. *(Optional Open-Ended):* Describe a recent instance (up to 250 words) where your digital skills drove an operational innovation.

- **Organizational Profile:**
  9. Enterprise Name: ____________________________
  10. Enterprise Type:  
      - [ ] Service  
      - [ ] Production  
      - [ ] Trade  
      - [ ] Agribusiness  
      - [ ] Technology  
      - [ ] Other: __________
  11. Business Lifecycle Stage:  
      - [ ] Idea/Pre‑idea  
      - [ ] Startup  
      - [ ] Growth  
      - [ ] Mature/Scaling
  12. Is your enterprise formally registered? [ ] Yes  [ ] No
  13. Number of Full-Time Employees: ____________________________
  14. Annual Revenue Range:  
      - [ ] < US$50K  
      - [ ] US$50K – US$200K  
      - [ ] US$200K – US$500K  
      - [ ] > US$500K

- **Location and Digital Connectivity:**
  15. Address/Region: ____________________________
  16. Zone Classification (based on conflict exposure):  
      - [ ] High-Intensity Conflict Zone  
      - [ ] Moderate Conflict Zone  
      - [ ] Stable/Low-Conflict Zone
  17. Digital Connectivity Status:  
      - [ ] Poor  
      - [ ] Fair  
      - [ ] Good  
      - [ ] Excellent

---

### 3. Conflict Context & Geographic Indicators
**Objective:** Map local conflict exposure, safety, infrastructure, and environmental conditions.
- 1. Frequency of conflict-related disruptions on your operations:  
   - [ ] Daily  [ ] Weekly  [ ] Monthly  [ ] Rarely
- 2. **Rate the overall conflict impact** on your enterprise (1 = Not Affected, 5 = Severely Affected):  
   [1] [2] [3] [4] [5]
- 3. Rate the overall perceived safety in your area:  
   [1] [2] [3] [4] [5]
- 4. Reliability of local transportation and logistics:  
   - [ ] Very Unreliable  
   - [ ] Unreliable  
   - [ ] Moderately Reliable  
   - [ ] Reliable  
   - [ ] Very Reliable
- 5. Effectiveness of local governance and external aid (NGOs, government support):  
   - [ ] Not Effective  
   - [ ] Somewhat Effective  
   - [ ] Effective  
   - [ ] Very Effective
- 6. Rate the quality of local infrastructure (electricity, water, ICT, transportation):  
   [1] [2] [3] [4] [5]
- 7. *(Open-Ended):* Describe any recent improvements or challenges in local infrastructure.

---

### 4. Organizational State and Operational Performance
**Objective:** Assess production, process efficiency, and digital readiness.
- **Production & Operational Metrics:**
  1. Rate your production capacity (1 = Very Low, 5 = Very High): [1] [2] [3] [4] [5]
  2. Rate the quality of your production output: [1] [2] [3] [4] [5]
  3. Do you face operational bottlenecks? [ ] Yes  [ ] No  
     If Yes, please specify: ____________________
- **Digital & Resource Readiness:**
  4. Level of digital adoption currently in your enterprise:  
     - [ ] None  
     - [ ] Basic (e.g., email, basic website)  
     - [ ] Moderate (e.g., cloud software, CRM)  
     - [ ] Advanced (e.g., AI, IoT integration)
  5. Approximately what percentage of your processes are automated? ______%
  6. Rate your organization’s readiness to adopt advanced digital/AI tools (1 = Not Ready, 5 = Fully Ready):  
     [1] [2] [3] [4] [5]
  7. *(Open-Ended):* Describe any innovative digital practices that have enhanced your operations.
- **Organizational Maturity:**
  8. Enterprise Stage:  
     - [ ] Startup/Emerging  
     - [ ] Developing  
     - [ ] Established  
     - [ ] Mature/Scaling

---

### 5. Production System & Process Specification (Interactive Module)
**Objective:** Use an interactive tool to diagram and derive key production indices.
- **Instructions:**  
  - Drag-and-drop to arrange “swimlanes” for Upstream (sourcing/design), Core (manufacturing), and Downstream (marketing/distribution).
  - Select resource types (e.g., Human Capital, Technology) and process operators (Sequential, Concurrent, Coupling, Interactive Sum).
- **Output:**  
  The system will generate your production equation, compute the Internal Production Index (IPI), and yield resource efficiency ratios.

---

### 6. Digital Capability Assessment
**Objective:** Evaluate your digital tools, investment frequency, and overall readiness.
1. Which digital tools do you currently use? (Select all that apply)  
   - [ ] Website/Online Store  
   - [ ] Social Media Marketing  
   - [ ] Cloud Computing/SaaS  
   - [ ] CRM Systems  
   - [ ] E‑Commerce Platforms  
   - [ ] Other: __________
2. How often do you upgrade/invest in digital tools?  
   - [ ] Rarely  
   - [ ] Every few years  
   - [ ] Annually  
   - [ ] Continuously
3. Self-Assessment of Digital Readiness (1 = Not Ready, 5 = Fully Digitalized):  
   [1] [2] [3] [4] [5]
4. Rate the effectiveness of your digital tools in enhancing production processes (1 to 5):  
   [1] [2] [3] [4] [5]

---

### 7. Resource and Process Utilization Metrics
**Objective:** Capture quantitative data on resource inputs and process efficiency.
1. Monthly labor hours (total): __________
2. Monthly raw material cost: __________
3. Machine/equipment usage (hours per month): __________
4. Overall process efficiency rating (1 = Very Inefficient, 5 = Very Efficient):  
   [1] [2] [3] [4] [5]
5. *(Optional):* Provide your Resource Efficiency Ratio if known: __________

---

### 8. Outcome and Impact Measures
**Objective:** Evaluate production, social impact, and overall satisfaction.
1. Monthly production volume (units): __________
2. Rate the quality of production output: [1] [2] [3] [4] [5]
3. Number of local jobs created in the past year: __________
4. *(Open-Ended):* Describe community benefits (e.g., training, local development).
5. Overall operational performance satisfaction (1 to 5):  
   [1] [2] [3] [4] [5]

---

### 9. Feedback and Future Outlook
**Objective:** Gather reflections on bottlenecks, future digital investments, and support needs.
1. Likelihood of increasing digital investment in the next year (1 = Not Likely, 5 = Very Likely):  
   [1] [2] [3] [4] [5]
2. Which types of digital support would most benefit your enterprise? (Select all that apply)  
   - [ ] Training/Workshops  
   - [ ] Access to digital platforms  
   - [ ] Financial support/Subsidies  
   - [ ] Consultancy Services  
   - [ ] Other: __________
3. *(Open-Ended):* What are the main bottlenecks in your production/processes?
4. *(Open-Ended):* How would improved digital integration address these challenges?
5. *(Open-Ended):* Any additional comments or suggestions.

---

## PART II: CONFLICT–PHASE SPECIFIC MODULES

*Based on your current operational environment, you will be directed to one of the following modules.*

---

### A. No Conflict Zone (Stable Environment)
**Objective:** Establish a baseline of operations in a stable context.
- **I. Who – Actor Profile & Digital Environment:**  
  - *(Refer to Core Module for demographics.)*  
  - *(Open-Ended):* Describe how digital integration (e.g., AI dashboards) improves your routine operations.
- **II. When/Where – Context and Infrastructure:**  
  1. Geographical Setting: [ ] Urban  [ ] Peri‑urban  [ ] Rural  
  2. Rate local infrastructure quality (1–5): [1] [2] [3] [4] [5]
  3. Rate the stability of your operating environment (1 = Very Unstable, 5 = Very Stable): [1] [2] [3] [4] [5]
  4. *(Open-Ended):* Describe any recent improvements in connectivity or infrastructure.
- **III. Why – Opportunity Drivers:**  
  1. What were your primary motivations for starting your enterprise? (Select all that apply)
  2. *(Open-Ended):* How do local institutions encourage digital innovation and entrepreneurial activity?
- **IV. In What Way – Operational Processes:**  
  1. Which strategies do you use for process optimization? (e.g., automation, digital analytics; select all that apply)
  2. List the key digital platforms or AI tools you use and rate their effectiveness (1–5).
  3. *(Open-Ended):* Describe an example of effective resource-sharing or collaboration with other SEs.
- **V. Impact – Baseline Outcomes:**  
  1. What are your growth expectations for the next 1–3 years? (Open-Ended)
  2. Rate your ability to maintain continuity under stable conditions (1–5): [1] [2] [3] [4] [5]
  3. *(Open-Ended):* Describe key performance metrics you monitor (e.g., revenue, production efficiency).

---

### B. Pre‑Conflict Phase (Early Warning & Proactive Adaptation)
**Objective:** Capture early indicators and proactive strategies as conflict signals emerge.
- **I. Who – Early Digital Preparedness:**  
  1. Confirm your role and rate your digital literacy (refer to Core Module).
  2. *(Open-Ended):* Describe any prior experience in adapting to disruptions.
- **II. When/Where – Emerging Context:**  
  1. Geographical Setting: [ ] Urban  [ ] Peri‑urban  [ ] Rural  
  2. Rate the stability of your current environment and local infrastructure (1–5).
  3. Have you observed early warning signals for potential conflict? [ ] Yes  [ ] No  
     If yes, please describe (e.g., rising tensions, rumors).
- **III. Why – Proactive Motivation:**  
  1. What factors motivate your contingency planning? (Select all that apply)
  2. *(Open-Ended):* Explain how early digital warning information (news feeds, social media) affects your planning.
- **IV. In What Way – Contingency Planning:**  
  1. How frequently do you use digital tools for risk monitoring? (Daily/Weekly/Occasionally)
  2. *(Open-Ended):* Describe any contingency measures you have begun implementing (e.g., relocating, enhancing digital automation).
  3. Rate the progress of implementing your contingency plans (1 = Not at all, 5 = Fully Established).
- **V. Impact – Pre-Conflict Projections:**  
  1. *(Open-Ended):* Describe your short-term performance expectations if conflict escalates.
  2. Rate the importance of digital preparedness for sustaining operations (1–5): [1] [2] [3] [4] [5]

---

### C. Active Conflict Zone (Crisis Response & Adaptation)
**Objective:** Evaluate immediate crisis impacts and adaptive responses.
- **I. Who – Crisis Leadership:**  
  1. Since conflict onset, have you assumed new roles (e.g., crisis manager, digital coordinator)? [ ] Yes  [ ] No  
     If yes, please describe.
  2. Rate your crisis leadership effectiveness (1–5): [1] [2] [3] [4] [5]
  3. *(Open-Ended):* Describe how real-time digital tools have informed your crisis decisions.
- **II. When/Where – Real-Time Dynamics:**  
  1. Rate the intensity of conflict in your area (1 = Minimal, 5 = Extreme): [1] [2] [3] [4] [5]
  2. How frequently do you experience operational disruptions during conflict?  
     - [ ] Daily  [ ] Weekly  [ ] Monthly  [ ] Rarely
  3. Rate the reliability of your digital infrastructure during conflict (1–5): [1] [2] [3] [4] [5]
  4. *(Open-Ended):* Identify specific areas or times with significant disruptions.
- **III. Why – Crisis-Driven Adaptation:**  
  1. *(Open-Ended):* Describe the major opportunities or risks that have emerged due to the conflict.
  2. How have your risk perceptions shifted? (Select: More Risk-Averse, More Opportunistic, Unchanged; please elaborate.)
  3. Rate the influence of digital tools in supporting your crisis decisions (1–5): [1] [2] [3] [4] [5]
- **IV. In What Way – Immediate Adaptive Measures:**  
  1. Which immediate operational changes have you adopted? (Select all that apply: alternative financing, supply chain restructuring, emergency digital tool adoption, product diversification, etc.)
  2. List and rate the effectiveness (1–5) of any digital/AI tools used during the crisis.
  3. *(Open-Ended):* Describe an incident where digital feedback led to rapid decision-making.
  4. Are you collaborating with SEs from more stable regions for resource or digital support? [ ] Yes  [ ] No  
     If yes, please provide details.
- **V. Impact – Crisis Outcomes:**  
  1. *(Open-Ended):* Explain how the conflict has affected sales, production capacity, or profitability (please include approximate percentage changes).
  2. Rate your enterprise’s ability to maintain operational continuity during conflict (1–5): [1] [2] [3] [4] [5]
  3. *(Open-Ended):* Describe the role of digital crisis management in your operations.
  4. Rate business network resilience during conflict (1–5): [1] [2] [3] [4] [5]

---

### D. Post‑Conflict Zone (Recovery & Transformation)
**Objective:** Assess long-term recovery, institutional reform, and strategic transformation.
- **I. Who – Recovery Leadership:**  
  1. Post-conflict, have you observed institutional restructuring (government, financial, regulatory)? [ ] Yes  [ ] No  
     If yes, please explain.
  2. *(Open-Ended):* Describe any changes in your leadership roles or strategies during recovery.
  3. Have you formed new partnerships or digital consortia to support recovery? [ ] Yes  [ ] No  
     If yes, please provide details.
- **II. When/Where – Recovery Context:**  
  1. How long after the conflict ended did you notice improvements in the business environment? (Specify in months/years): __________
  2. Are there differences in recovery between urban and rural areas? [ ] Yes  [ ] No  
     If yes, please describe.
  3. Have alternative operational hubs or safe zones emerged that improved infrastructure reliability? [ ] Yes  [ ] No  
     If yes, rate their accessibility (1–5) and describe briefly.
- **III. Why – Drivers of Recovery:**  
  1. *(Open-Ended):* Describe the key drivers (e.g., policy reforms, external aid, digital transformation) that supported your recovery.
  2. Rate the importance of digital transformation in post-conflict recovery (1–5): [1] [2] [3] [4] [5]
  3. What factors motivated you to formalize or restructure your enterprise post-conflict? (Select all that apply)
- **IV. In What Way – Formalization and Continuous Monitoring:**  
  1. Have you taken steps to formalize or restructure your operations? [ ] Yes  [ ] No  
     If yes, please describe.
  2. List and rate (1–5) the digital tools now integrated into your long-term strategic planning.
  3. Have you implemented new automation or process optimization measures post-conflict? [ ] Yes  [ ] No  
     If yes, detail the technologies used and benefits.
  4. *(Open-Ended):* Describe any new resource-sharing mechanisms or collaborative networks established during recovery.
- **V. Impact – Long-Term Outcomes:**  
  1. Rate the overall impact of post-conflict interventions on your enterprise’s growth (1–5): [1] [2] [3] [4] [5]  
     *(Provide examples if possible.)*
  2. *(Open-Ended):* Describe any quantifiable improvements (e.g., increased production efficiency, revenue gains).
  3. Rate the effectiveness of new institutional/digital frameworks in ensuring coordinated operations and cybersecurity (1–5): [1] [2] [3] [4] [5]
  4. *(Open-Ended):* Reflect on lessons learned and your long-term strategic priorities.

---

*End of Questionnaire Model*
````


B, Digital Platform Providers & IT Service Companies
### 1. Introduction and Consent
- **Welcome & Purpose:**  
  "Thank you for participating in our study on how digital platforms and IT services drive innovation and operational excellence. Your input will inform an integrated, process-based framework for evaluating digital ecosystem health and resilience in varied operating environments."
- **Instructions:**  
  - Please answer all sections as fully as possible.
  - Use the provided scales for quantitative responses and add detailed comments when prompted.
  - If a question does not apply, indicate “N/A” with a brief explanation.
  - You will be directed via branch logic to a conflict-phase module if applicable.
- **Consent:**  
  - [ ] I consent to participate in this research study.  
  - [ ] I understand that my responses will be anonymized and used solely for research and policy development.

---

### 2. Company & Managerial Profile (Who)
**Objective:** To capture the background information of your organization and its leadership.

#### A. Basic Company Information
1. **Company Name:**  
   _(Open-ended)_
2. **Year Established:**  
   _(Open-ended)_
3. **Organization Type:**  
   - [ ] Digital Platform Provider  
   - [ ] IT Service Company  
   - [ ] Software/Cloud Service Company  
   - [ ] Other (please specify): __________
4. **Primary Service Offerings:**  
   *(Select all that apply)*  
   - [ ] Website/Application Development  
   - [ ] AI & Analytics Solutions  
   - [ ] Cloud/Data Services  
   - [ ] Cybersecurity Solutions  
   - [ ] IT Infrastructure Management  
   - [ ] Custom Software Development  
   - [ ] Other (please specify): __________
5. **Business Model:**  
   _(Open-ended; e.g., subscription, pay-per-use, project-based)_
6. **Number of Employees:**  
   _(Open-ended)_
7. **Annual Revenue Range:**  
   - [ ] <US$50K  
   - [ ] US$50K–US$200K  
   - [ ] US$200K–US$500K  
   - [ ] >US$500K

#### B. Manager/CEO Profile
8. **Name & Role (Optional):**  
   _(Open-ended)_
9. **Years of Professional Experience in Digital/IT Industry:**  
   _(Open-ended)_
10. **Self-Assessed Digital Literacy:**  
    Rate your personal digital literacy (1 = Very Low, 5 = Very High):  
    [1] [2] [3] [4] [5]
11. *(Optional Open-Ended):* Describe an instance in which your digital expertise significantly influenced a strategic decision.

---

### 3. Digital Capability & Innovation (What)
**Objective:** To assess your organization’s digital readiness, innovation level, and integration of advanced technologies.

12. **Overall Digital Readiness:**  
    How would you rate your company’s overall digital readiness?  
    *(Scale: 1 = Not at all ready, 5 = Fully advanced)*  
    [1] [2] [3] [4] [5]
13. **Frequency of Upgrades:**  
    How frequently do you update or enhance your digital platforms/IT services?  
    - [ ] Monthly  
    - [ ] Quarterly  
    - [ ] Annually  
    - [ ] Rarely
14. **Key Digital Innovations:**  
    *(Open-Ended):* Describe a recent innovation or upgrade that has significantly improved your digital service offering.
15. **Integration of Advanced Technologies:**  
    To what extent have you integrated advanced technologies (e.g., AI, machine learning, blockchain) into your operations?  
    *(Scale: 1 = Not integrated; 5 = Fully integrated)*  
    [1] [2] [3] [4] [5]

---

### 4. Institutional & Regulatory Environment (Why)
**Objective:** To evaluate the local institutional context that influences your digital operations.

16. **Legal Clarity:**  
    How clear and consistent are local regulations affecting digital services and IT infrastructure?  
    *(Scale: 1 = Very unclear; 5 = Very clear)*  
    [1] [2] [3] [4] [5]
17. **Policy Support:**  
    How supportive are local government policies in fostering the development of a robust digital ecosystem?  
    *(Scale: 1 = Not supportive; 5 = Highly supportive)*  
    [1] [2] [3] [4] [5]
18. **Desired Institutional Changes:**   
    *(Open-Ended):* What legal or institutional improvements would most benefit your organization?
19. **Collaborative Partnerships:**  
    Do you collaborate with public institutions or industry clusters to enhance digital capacities?  
    - [ ] Yes  
    - [ ] No  
    - *If yes, please briefly describe these partnerships.*

---

### 5. Geographical Context, Infrastructure Quality & Stability (When/Where)
**Objective:** To capture the operational environment where your organization is based.

20. **Primary Regions/Cities:**  
    In which regions or cities does your company primarily operate?  
    _(Open-ended)_
21. **Local Context:**  
    Is your main operating location:  
    - [ ] Urban  
    - [ ] Peri‑urban  
    - [ ] Rural
22. **Quality of Physical Infrastructure:**  
    Rate the overall quality of local physical infrastructure (electricity, water, transportation, ICT connectivity) where you operate.  
    *(Scale: 1 = Very Poor; 5 = Excellent)*  
    [1] [2] [3] [4] [5]
23. **Reliability of ICT Resources:**  
    Rate the reliability of your internet connectivity and ICT infrastructure.  
    *(Scale: 1 = Highly unreliable; 5 = Highly reliable)*  
    [1] [2] [3] [4] [5]
24. **Regional Stability:**  
    How stable is your local environment in terms of economic and infrastructural support for digital operations?  
    *(Scale: 1 = Very unstable; 5 = Very stable)*  
    [1] [2] [3] [4] [5]
25. **Infrastructure Fluctuations:**  
    *(Open-Ended):* Share any observations about recent fluctuations (disruptions or improvements) in local infrastructure over the past 12 months.

---

### 6. Drivers of Digital Innovation (Why)
**Objective:** To understand the motivations behind your digital and strategic decisions.

26. **Primary Motivators:**  
    What motivated your organization to innovate or expand its digital services?  
    *(Select all that apply)*  
    - [ ] Market Opportunity  
    - [ ] Technological Advancements  
    - [ ] Increased Demand for Digital Services  
    - [ ] Competitive Pressure  
    - [ ] Regulatory Incentives  
    - [ ] Other (please specify): __________
27. **Strategic Rationale:**  
    *(Open-Ended):* Elaborate on how digital and physical infrastructure challenges have shaped your strategic decisions.
28. **Reliance on Digital Analytics:**  
    To what degree do you rely on digital analytics or AI tools to identify market trends and risks?  
    *(Scale: 1 = Not at all; 5 = Very significantly)*  
    [1] [2] [3] [4] [5]
29. **Policy Influence:**  
    How much do current policies and legal frameworks shape your digital innovation efforts?  
    *(Scale: 1 = Extremely constraining; 5 = Highly motivating)*  
    [1] [2] [3] [4] [5]

---

### 7. Operational Strategies, Integration & Cybersecurity (How)
**Objective:** To capture your organization’s operational procedures, digital tool integration, and security measures.

30. **Operational Strategies:**  
    What strategies do you employ to optimize your digital service delivery?  
    *(Select all that apply)*  
    - [ ] Agile Development  
    - [ ] Cloud Integration  
    - [ ] AI-Driven Analytics  
    - [ ] Process Automation  
    - [ ] Offshoring/Outsourcing  
    - [ ] Other (please specify): __________
31. **Digital Tools & Effectiveness:**  
    List the primary digital tools, platforms, or AI solutions used in your operations and rate each for effectiveness.  
    > Example: Tool Name: __________, Effectiveness (Scale 1–5): __________
32. **Impact of Physical Infrastructure:**  
    To what extent does local physical infrastructure (e.g., power reliability, connectivity speed) affect your operational efficiency?  
    *(Scale: 1 = Not at all; 5 = A great deal)*  
    [1] [2] [3] [4] [5]
33. **Mitigation Strategies:**  
    *(Open-Ended):* Describe the strategies your organization employs to mitigate challenges from infrastructural deficits (e.g., backup generators, redundant connectivity).
34. **Cybersecurity Measures:**  
    List and rate the key cybersecurity measures in place to protect your digital systems.  
    *(For each measure, use a scale: 1 = Not effective; 5 = Highly effective)*
35. **Regulatory Impact on Cybersecurity:**  
    How significantly do local data protection and cybersecurity regulations shape your operational practices?  
    *(Scale: 1 = Minimal impact; 5 = Very significant)*  
    [1] [2] [3] [4] [5]

---

### 8. Performance Outcomes & Future Projections (Impact)
**Objective:** To evaluate overall performance, key service metrics, and future strategic priorities.

36. **Service Performance:**  
    How would you rate your company’s overall service performance (uptime, response time, reliability)?  
    *(Scale: 1 = Very poor; 5 = Excellent)*  
    [1] [2] [3] [4] [5]
37. **Key Performance Metrics:**  
    *(Open-Ended):* What are the critical metrics you monitor (e.g., number of active users, transaction volumes, customer satisfaction)? List and briefly describe each.
38. **Impact of Infrastructure on Service Delivery:**  
    *(Open-Ended):* Describe how local digital and physical infrastructure conditions have impacted your production capabilities or service outcomes. Provide examples if possible.
39. **Disruptions:**  
    Have you experienced disruptions attributed to infrastructure deficiencies?  
    - [ ] Yes  
    - [ ] No  
    - *If yes, please describe the incidents: __________*
40. **Future Growth & Investment:**  
    *(Open-Ended):* What are your growth expectations and strategic priorities regarding digital innovation and infrastructure improvements over the next 1–3 years?
41. **Investment Likelihood:**  
    How likely are you to invest further in advanced digital tools (e.g., additional AI systems, blockchain) or infrastructural improvements?  
    *(Scale: 1 = Not likely; 5 = Extremely likely)*  
    [1] [2] [3] [4] [5]
42. **Ecosystem Coordination:**  
    *(Open-Ended):* Explain how improvements in digital and physical infrastructures could enhance collaboration with partners and lead to better business sustainability.
43. **Public–Private Initiatives:**  
    How effective are current public–private initiatives and governmental interventions in supporting your digital ecosystem?  
    *(Scale: 1 = Not effective; 5 = Highly effective)*  
    [1] [2] [3] [4] [5]

---

### 9. Community & Institutional Support
**Objective:** To understand external community influences on digital and entrepreneurial activities.
44. **Local Cultural Support:**  
    To what extent do local cultural practices support digital innovation and entrepreneurship?  
    *(Scale: 1 = Not at all; 5 = Very much)*  
    [1] [2] [3] [4] [5]

---

## PART II: CONFLICT–PHASE MODULES
*Based on your current regional conditions, please answer the module(s) below that are applicable to your operating environment.*

### Module A: No Conflict (Baseline / Stable Environment)
**Objective:** Establish a baseline profile of digital operations under stable conditions.
  
45. **Baseline Performance:**  
    How would you rate your current operational stability and digital service performance under stable conditions?  
    *(Scale: 1–5)*  
    [1] [2] [3] [4] [5]
46. **Historical Benchmark:**  
    *(Open-Ended):* Describe your standard operational performance and any recent digital innovations during periods of stability.
47. **Environmental Stability:**  
    How stable do you find your local regulatory and infrastructural environment?  
    *(Scale: 1 = Unstable; 5 = Very stable)*  
    [1] [2] [3] [4] [5]

---

### Module B: Pre–Conflict (Early Warning & Proactive Adaptation)
**Objective:** Capture early indicators and proactive measures as conflict signals emerge.
  
48. **Early Warning Signals:**  
    Have you observed early warning signals (e.g., market disruptions, digital alerts) indicating potential conflict?  
    - [ ] Yes  
    - [ ] No  
    - *If yes, please detail the signals and their sources (e.g., social media, government advisories).*
49. **Proactive Adaptation:**  
    *(Open-Ended):* Describe any proactive digital or operational measures you have implemented in response to early signs of instability.
50. **Preparedness Investment:**  
    Rate your level of investment in digital monitoring and risk assessment tools as a preemptive measure.  
    *(Scale: 1 = Low; 5 = High)*  
    [1] [2] [3] [4] [5]

---

### Module C: Active Conflict (Crisis Response & Adaptation)
**Objective:** Assess immediate impacts of conflict on digital operations and the measures taken during crisis.
  
51. **Crisis-Driven Adaptations:**  
    Have you modified your digital service delivery or IT operations in response to active conflict disruptions?  
    - [ ] Yes  
    - [ ] No  
    - *If yes, please describe the key operational changes.*
52. **Real-Time Adaptation:**  
    How critical have digital tools (e.g., AI-powered risk monitoring, crisis dashboards) been in managing conflict-related disruptions?  
    *(Scale: 1 = Not critical; 5 = Extremely critical)*  
    [1] [2] [3] [4] [5]
53. **Infrastructure Disruptions:**  
    *(Open-Ended):* Detail any disruptions in ICT/internet connectivity experienced during conflict and describe your mitigation strategies.
54. **Crisis Collaboration:**  
    Are you partnering with other IT firms or stakeholders to mitigate crisis impacts?  
    - [ ] Yes  
    - [ ] No  
    - *If yes, please describe these collaborations and their benefits.*

---

### Module D: Post–Conflict (Recovery & Transformation)
**Objective:** Evaluate recovery measures and long-term strategic adaptations after conflict.
  
55. **Recovery Timeline:**  
    How long after conflict resolution did you begin observing operational recovery?  
    _(Specify in months/years)_
56. **Reformation & Upgrades:**  
    *(Open-Ended):* Describe any formal measures, strategic re-alignments, or digital system upgrades implemented during recovery.
57. **Policy & Infrastructural Influence:**  
    How significant have recent policy or infrastructural reforms been in reshaping your long-term digital strategy?  
    *(Scale: 1 = No influence; 5 = Major influence)*  
    [1] [2] [3] [4] [5]
58. **Future Outlook:**  
    *(Open-Ended):* Explain how lessons learned during conflict are influencing your future innovation plans and your approach to public–private partnerships.

---

## General Feedback
59. *(Open-Ended):* Please share any additional comments or insights regarding how the integration of digital technologies and local infrastructure conditions influences your operations.

---

*End of Questionnaire Model*

---

**Integrated Theme Model Note:**  
This questionnaire is structured to capture detailed information across the 5W1H dimensions:  
- **Who:** Company and managerial profile  
- **What:** Digital capabilities, innovations, and operational strategies  
- **When/Where:** Geographical context, infrastructural conditions, and regional stability  
- **Why:** Drivers for digital innovation and the influence of policies/institutions  
- **How:** Integration, security measures, and mitigation strategies  
- **Impact:** Performance outcomes, disruptions, and future growth projections

These data will support our further analysis and modeling initiatives.

*Thank you for your participation!*


C, Policy Makers
Questionnaire Model for Policy Makers

This survey instrument is designed for government officials, institutional leaders, and regulatory experts engaged in developing and implementing policies that integrate digital platforms with physical infrastructure. The insights gathered will support our integrated theme model—underpinning latent constructs such as Digital Policy Effectiveness, Infrastructure Policy Impact, and Interagency Coordination in our structural equation modeling (SEM) and dynamic network analyses.

The questionnaire is structured using the 5W1H framework (Who, What, When/Where, Why, How/Impact) to ensure comprehensive coverage of our research requirements. Please answer all sections using the provided scales and detailed open-ended responses. When an item does not apply, indicate “N/A” with a brief explanation. All responses are confidential and will contribute to enhanced policymaking and strategic guidance.

---

## PART I: INSTITUTIONAL PROFILE, ROLE, AND GOVERNANCE (Who)

### I. Who? – Institutional and Personal Background

#### A. Personal and Agency Profile
1. **Position and Affiliation:**  
   - What is your official title/position?  
     *(Open-ended)*  
   - Which ministry, department, or agency do you represent?  
     *(Open-ended)*  
   - What is your primary area of responsibility? (Select all that apply)  
     - [ ] Digital Infrastructure Policy  
     - [ ] ICT & Innovation Regulation  
     - [ ] Economic Development  
     - [ ] Public–Private Partnership Management  
     - [ ] Regional Planning and Development  
     - [ ] Other (please specify): __________

2. **Agency Involvement:**  
   - How many years has your agency been engaged in developing and implementing policies for digital platforms and regional infrastructure?  
     *(Open-ended; please specify years)*  
   - What is the geographic scope of your agency’s jurisdiction?  
     - [ ] Local/Municipal  
     - [ ] Regional  
     - [ ] National  
     - [ ] Multi‑jurisdictional/International  
   - *(Open-ended):* Briefly describe your agency’s core mandate regarding the integration of digital innovation and physical infrastructure development.

#### B. Governance and Institutional Mandate
3. **Mandate Clarity:**  
   - How clearly is your agency’s mandate defined to include both digital regulatory innovation and physical infrastructure development?  
     *(Scale: 1 = Very unclear; 5 = Very clearly defined)*  
     [1] [2] [3] [4] [5]

4. **Dedicated Units & Capacity:**  
   - Does your agency have dedicated units or teams for managing digital ecosystem policies and planning/upgrading physical infrastructure?  
     - [ ] Yes  
     - [ ] No  
     - *If yes, please briefly describe their functions:*  
       *(Open-ended)*

5. **Interagency Coordination:**  
   - How effective is your agency’s coordination with other government agencies or departments in implementing integrated policies?  
     *(Scale: 1 = Not effective; 5 = Highly effective)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Provide an example of a collaborative initiative that enhanced cross-departmental policy integration.

---

## PART II: REGIONAL CONTEXT, INFRASTRUCTURE, AND JURISDICTIONAL DYNAMICS (When/Where)

1. **Jurisdictional Scope:**  
   - List the regions, cities, or jurisdictions under your agency’s regulatory purview.  
     *(Open-ended; please list all relevant areas)*  
   - *(Open-ended):* Describe any observed disparities (for example, differences between urban, peri‑urban, and rural areas) in policy implementation or operational challenges.

2. **Quality of Infrastructure:**  
   **A. Digital Infrastructure:**  
   - How would you assess the quality, coverage, and modernity of digital infrastructure (e.g., high-speed broadband, data centers, fiber networks) in your jurisdiction?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]

   **B. Physical Infrastructure:**  
   - How would you rate the quality and reliability of physical infrastructure (e.g., electricity, transportation, ICT connectivity) that supports your digital ecosystem?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]

   **C. Recent Developments:**  
   - *(Open-ended):* Describe any major improvements or setbacks in digital and/or physical infrastructure that have recently influenced your policy implementation efforts.

3. **Regional Stability & Economic Environment:**  
   - How stable is the environment in your jurisdiction regarding economic support and infrastructural reliability for digital services?  
     *(Scale: 1 = Highly volatile; 5 = Very stable)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Provide examples of fluctuations or long-term trends (e.g., disruptions during conflict periods or steady improvements) and explain their impact on your policymaking.

4. **Temporal Dynamics:**  
   - Over the past 12–24 months, how stable has the policy environment been regarding investments in digital and physical infrastructure?  
     *(Scale: 1 = Highly volatile; 5 = Very stable)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Describe specific events or trends that have prompted regulatory adjustments during this period.

---

## PART III: MOTIVATIONS, OPPORTUNITY DRIVERS, AND EXTERNAL INFLUENCES (Why)

1. **Drivers of Policy Initiatives:**  
   - What are the main drivers behind your agency’s efforts to enhance digital platforms and infrastructure? (Select all that apply)  
     - [ ] Stimulating Market Growth and Innovation  
     - [ ] Enhancing National Security and Resilience  
     - [ ] Boosting Economic Competitiveness  
     - [ ] Meeting Public Demand for Enhanced Services  
     - [ ] Achieving Regional Development Goals  
     - [ ] Aligning with International Standards/Commitments  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Describe how these motivations have evolved in response to emerging digital technologies and infrastructural challenges.

2. **External Influences:**  
   - To what degree do international guidelines and standards (e.g., GDPR, ITU, ISO) shape your agency’s policy framework?  
     *(Scale: 1 = Not at all; 5 = Very significantly)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Explain how external economic, political, or technological pressures have influenced your regulatory priorities, particularly regarding the integration of digital and physical infrastructure.

3. **Risk vs. Opportunity Assessment:**  
   - When formulating policy, how do you balance potential opportunities (e.g., increased digital penetration, improved service delivery) against risks (e.g., cyber threats, infrastructural failures)?  
     *(Scale: 1 = Risk-dominated; 5 = Opportunity-dominated)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Provide examples of key opportunities and risks that have recently influenced your policy decisions.

---

## PART IV: POLICY DESIGN, IMPLEMENTATION, AND INTERAGENCY COORDINATION (How/In What Way)

1. **Public–Private Partnership (PPP) Models:**  
   - How extensively are PPP models utilized in your jurisdiction to implement digital infrastructure or related projects?  
     *(Scale: 1 = Not used; 5 = Extensively used)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Describe a successful PPP initiative that has significantly enhanced digital services or physical infrastructure.

2. **Policy Implementation Strategies:**  
   - Which strategies does your agency employ to foster collaboration among digital platform providers, IT service companies, and infrastructure bodies? (Select all that apply)  
     - [ ] Regular Stakeholder Consultations  
     - [ ] Joint Task Forces or Committees  
     - [ ] Innovation Grants and Incentive Programs  
     - [ ] Regulatory Sandboxes  
     - [ ] Public–Private Forums  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Explain how these strategies are operationalized to achieve integrated policy outcomes.

3. **Integration of Digital and Physical Policies:**  
   - How effectively are policies promoting digital innovation (e.g., data protection, cybersecurity) integrated with those aimed at upgrading physical infrastructure (e.g., 5G deployment, energy reliability)?  
     *(Scale: 1 = Not at all integrated; 5 = Fully integrated)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Provide a case example where an integrated policy approach was implemented—note successes, challenges, and lessons learned.

4. **Monitoring, Evaluation, & Compliance Mechanisms:**  
   - What mechanisms does your agency have in place to monitor compliance and evaluate the performance of digital and infrastructural policies? (Select all that apply)  
     - [ ] Regular Audits  
     - [ ] Performance Dashboards/Real-Time Analytics  
     - [ ] Public Reporting  
     - [ ] Independent Evaluations  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Describe your evaluation process, including how digital analytics or AI-driven tools are used to assess policy effectiveness and inform necessary adjustments.

---

## PART V: POLICY IMPACT, PERFORMANCE, AND FUTURE STRATEGIC VISION (Impact)

1. **Current Policy Outcomes:**  
   - How successful are your current policies in enhancing the digital ecosystem within your jurisdiction?  
     *(Scale: 1 = Very unsuccessful; 5 = Highly successful)*  
     [1] [2] [3] [4] [5]
   - How effective are these policies in improving physical infrastructure and connectivity?  
     *(Scale: 1 = Very unsuccessful; 5 = Highly successful)*  
     [1] [2] [3] [4] [5]

2. **Performance Metrics & Broader Benefits:**  
   - *(Open-ended):* What key performance indicators (e.g., broadband penetration, service uptime, public satisfaction) do you use to evaluate the impact of integrated digital and infrastructural policies?  
   - *(Open-ended):* How have these policies influenced broader outcomes such as social entrepreneurship, innovation, and business growth? Please provide specific examples.

3. **Future Strategic Priorities & Vision:**  
   - What are the top priority areas for policy development and investment over the next 1–3 years? (Select all that apply)  
     - [ ] Enhanced Cybersecurity Frameworks  
     - [ ] Upgraded Digital Infrastructure (e.g., 5G, fiber optics)  
     - [ ] Strengthened Public–Private Partnerships  
     - [ ] Greater Integration of Digital and Physical Infrastructure Planning  
     - [ ] Regulatory Reforms and Incentive Programs  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Describe your long-term strategic vision for your jurisdiction’s digital ecosystem and infrastructure. How do you plan to address current deficits and promote coordinated growth?
   - How effective is current inter-agency coordination in shaping these integrated policies?  
     *(Scale: 1 = Not effective; 5 = Highly effective)*  
     [1] [2] [3] [4] [5]

4. **Ecosystem-Level Impact:**  
   - *(Open-ended):* Reflect on how your agency’s policies have influenced broader socioeconomic outcomes (e.g., economic growth, innovation, social entrepreneurship). What additional changes would you recommend to further enhance the integrated policy ecosystem?

---

## Final Section: General Feedback

- **Additional Comments or Suggestions:**  
  *(Open-ended):* Please share any further insights, recommendations, or experiences regarding the integration of digital policies with physical infrastructure planning and any other aspects of your role as a policy maker.

---

**Integrated Theme Model Note:**  
This questionnaire is structured to capture information across the 5W1H dimensions:  
- **Who:** Institutional profile and governance  
- **When/Where:** Regional and infrastructural contexts, including temporal dynamics  
- **Why:** Motivations, external influences, and risk–opportunity assessments  
- **How/Impact:** Policy implementation strategies, integration approaches, and performance outcomes

The collected data will be used to build latent constructs in our SEM framework and provide a cohesive understanding of integrated policy effectiveness.

Thank you for your participation!


D, Cluster Leaders

Questionnaire Model for Cluster Leaders

This survey instrument is designed for leaders of industry clusters or sectorial associations. Your insights into your network’s formation, resource sharing, digital–physical integration, and crisis response are invaluable. The responses will inform our integrated theme model and serve as indicators in our structural equation modeling (SEM) and network analyses.

The questionnaire follows the 5W1H framework:
- **Who:** Organizational profile and leadership role  
- **When/Where:** Geographical context, infrastructure, and environmental dynamics  
- **Why:** Motivations, opportunity drivers, and external influences  
- **How/Impact:** Operational strategies, integration of digital and physical resources, crisis coordination, and performance outcomes

Please answer all questions using the provided rating scales and offer detailed responses where indicated. If a question does not apply, indicate “N/A” with a brief explanation. Your responses are confidential.

---

## PART I: WHO? – ORGANIZATIONAL PROFILE, ROLE, & CLUSTER CHARACTERISTICS

### A. Personal and Organizational Background

1. **Position and Affiliation:**  
   - What is your official title/position?  
     *(Open-ended)*  
   - What is the name of the cluster or sectorial association you lead or represent?  
     *(Open-ended)*  
   - Which sector best characterizes your cluster? (Select one)  
     - [ ] Manufacturing  
     - [ ] Information Technology  
     - [ ] Social Enterprise  
     - [ ] Services/Commerce  
     - [ ] Healthcare  
     - [ ] Agriculture  
     - [ ] Other (please specify): __________

2. **Cluster Profile:**  
   - How many years has your cluster been active?  
     *(Numeric response)*  
   - Approximately how many organizations are members of your cluster?  
     *(Provide a number or range)*  
   - What geographical area(s) does your cluster primarily serve?  
     *(Open-ended: List regions or cities)*

3. **Role and Mission:**  
   - What is the primary mission of your cluster? (Select all that apply)  
     - [ ] Facilitating resource sharing  
     - [ ] Enhancing inter-organizational networking  
     - [ ] Coordinating collective crisis response  
     - [ ] Advocating for regulatory/infrastructural improvements  
     - [ ] Promoting digital innovation  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* In your own words, describe the strategic objectives and founding mission of your cluster.  
   - *(Advanced Insight):* What additional strategic roles do you foresee for your cluster in the regional ecosystem?

---

## PART II: WHEN/WHERE? – GEOGRAPHICAL CONTEXT, INFRASTRUCTURE, & ENVIRONMENT

1. **Geographical Settings & Jurisdiction:**  
   - In which regions, cities, or territories does your cluster primarily operate?  
     *(Open-ended: List all relevant areas)*  
   - How would you classify the areas of operation?  
     - [ ] Urban  
     - [ ] Peri‑urban  
     - [ ] Rural  
     - [ ] Mixed/Multiple

2. **Digital Infrastructure Quality:**  
   - How would you rate the quality, accessibility, and modernity of digital infrastructure available to your cluster members (e.g., broadband connectivity, data centers, cloud services)?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]

3. **Physical Infrastructure & Resource Accessibility:**  
   - How reliable is the physical infrastructure (e.g., electricity, transportation networks, water supply, ICT connectivity) that supports your cluster’s operations?  
     *(Scale: 1 = Highly unreliable; 5 = Highly reliable)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Describe any recent infrastructural improvements or challenges (e.g., power outages or new transport links) that have impacted your cluster.

4. **Environmental Stability:**  
   - How stable is the local economic and infrastructural environment for sustaining collaborative networks?  
     *(Scale: 1 = Highly volatile; 5 = Very stable)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Provide examples of trends or fluctuations over the past 12–24 months that have influenced your cluster's effectiveness.
   
5. **Conflict–Phase (if applicable):**  
   - If your region is affected by conflict conditions, please indicate the current phase:  
     - [ ] No Conflict (Baseline)  
     - [ ] Pre‑Conflict (Early Warning Signs)  
     - [ ] Active Conflict (Current Disruptions)  
     - [ ] Post‑Conflict (Recovery Phase)  
   - *(Note: Based on your selection, additional conflict-specific items may be administered.)*  
   
6. **Emerging Infrastructure Trends (Advanced Insight):**  
   - *(Open-ended):* What new trends or technological developments do you foresee impacting local digital or physical infrastructures in your region over the next few years?

---

## PART III: WHY? – MOTIVATIONS, OPPORTUNITY DRIVERS, & EXTERNAL INFLUENCES

1. **Motivations for Cluster Formation:**  
   - What were the primary reasons for forming your cluster? (Select all that apply)  
     - [ ] To enhance resource sharing and reduce costs  
     - [ ] To foster collaborative innovation through digital tools  
     - [ ] To improve collective crisis response and resilience  
     - [ ] To address regional infrastructural deficits collaboratively  
     - [ ] To strengthen competitive positioning and network synergy  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Explain the key motivations behind forming your cluster, including how both digital and physical conditions influenced its creation.

2. **Member Incentives:**  
   - *(Open-ended):* Describe why organizations choose to join your cluster. Consider benefits such as cost savings, shared expertise, increased market access, and enhanced resource availability.

3. **Influence of External Factors:**  
   - To what extent do emerging digital technologies and infrastructural challenges influence your cluster's strategic direction?  
     *(Scale: 1 = Not at all; 5 = Very significantly)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Provide specific examples of how external trends or infrastructural changes have driven strategic adjustments within your cluster.

4. **Policy and Institutional Impact:**  
   - How strongly do local policy initiatives or regulatory changes (e.g., digital transformation programs, infrastructure investment schemes) affect your cluster's operations?  
     *(Scale: 1 = Not influenced; 5 = Highly influenced)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Describe an instance where governmental or institutional support significantly shaped your cluster's resource-sharing or crisis response efforts.

---

## PART IV: IN WHAT WAY? – OPERATIONAL STRATEGIES, DIGITAL/PHYSICAL INTEGRATION, & CRISIS RESPONSE

1. **Utilization of Digital Tools for Network Formation:**  
   - List up to three key digital platforms or communication tools that your cluster uses for collaboration and decision‑making (e.g., Slack, Microsoft Teams, WhatsApp). For each tool, please provide its name and rate its effectiveness on a scale of 1–5.  
     - Tool/Platform 1: __________ | Effectiveness: [1] [2] [3] [4] [5]  
     - Tool/Platform 2: __________ | Effectiveness: [1] [2] [3] [4] [5]  
     - Tool/Platform 3: __________ | Effectiveness: [1] [2] [3] [4] [5]  
   - *(Open-ended):* Describe how these digital platforms enhance communication, collaboration, and information sharing within your cluster.
   
2. **Mechanisms for Resource Sharing:**  
   - What formal or informal mechanisms are in place to facilitate resource sharing among your cluster members? (Select all that apply)  
     - [ ] Regular networking meetings or roundtables  
     - [ ] Digital collaboration platforms/shared databases  
     - [ ] Joint procurement or pooling initiatives  
     - [ ] Pooled logistics or coordinated supply chain partnerships  
     - [ ] Knowledge-sharing seminars/workshops  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Provide an example of a resource-sharing initiative that has improved your cluster's operational efficiency.

3. **Collective Crisis Response and Coordination:**  
   - During crisis events (e.g., power outages, cyber incidents, natural disasters), how does your cluster coordinate its response? (Select all that apply)  
     - [ ] Activation of crisis management committees  
     - [ ] Emergency communication protocols (digital and traditional)  
     - [ ] Joint access to backup resources or facilities  
     - [ ] Direct coordination with local government/emergency services  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Describe a recent crisis event and explain how coordinated action within your cluster aided in mitigating its impact.

4. **Integration of Digital and Physical Resources:**  
   - To what degree does your cluster integrate digital strategies (e.g., real‑time data monitoring) with physical backup or infrastructural contingency plans (e.g., backup power, alternate connectivity routes)?  
     *(Scale: 1 = Not integrated; 5 = Fully integrated)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Provide a detailed example illustrating how digital–physical integration has enhanced resilience and operational performance in your cluster.

5. **Inter‑Cluster Collaboration:**  
   - Do you engage in collaborative initiatives with other clusters or industry bodies to further enhance digital and physical capacities?  
     - [ ] Yes  
     - [ ] No  
     - *If yes, please briefly describe these initiatives and their impact:*  
       *(Open-ended)*

6. **Innovative Practices (Advanced Insight):**  
   - *(Open-ended):* What innovative practices or digital solutions has your cluster recently introduced that have significantly improved network coordination and service delivery?

---

## PART V: IMPACT? – OUTCOMES, PERFORMANCE METRICS, & FUTURE PROJECTIONS

1. **Overall Cluster Effectiveness:**  
   - How effective is your cluster in achieving its intended objectives (network development, resource sharing, coordinated crisis response)?  
     *(Scale: 1 = Very ineffective; 5 = Highly effective)*  
     [1] [2] [3] [4] [5]

2. **Performance Metrics:**  
   - *(Open-ended):* What key performance indicators (KPIs) do you track to assess the success of your cluster? (Examples: number of joint projects, cost savings, crisis response times, market access improvements, etc.)

3. **Benefits for Member Organizations:**  
   - *(Open-ended):* What are the most significant benefits that member organizations have experienced from cluster affiliation?

4. **Major Challenges:**  
   - *(Open-ended):* Identify the major challenges your cluster currently faces, particularly regarding the integration of digital tools with physical resources and during crisis events.

5. **Future Vision and Investment Priorities:**  
   - *(Open-ended):* Outline your cluster’s strategic vision for the next 1–3 years regarding digital innovation, deeper integration, and infrastructural upgrades.  
   - How likely are you to increase investments in advanced digital solutions and physical infrastructure enhancements to support your cluster's operations?  
     *(Scale: 1 = Not likely; 5 = Extremely likely)*  
     [1] [2] [3] [4] [5]

6. **Ecosystem-Level Impact:**  
   - *(Open-ended):* Reflect on how your cluster’s collective actions have influenced broader regional or sectoral outcomes (e.g., enhanced social entrepreneurship, improved digital ecosystem resilience, economic growth). What additional initiatives could further strengthen this impact?

---

## Final Section: General Feedback

- **Additional Comments or Recommendations:**  
  *(Open-ended):* Please share any further insights, suggestions, or experiences regarding network coordination, resource sharing, or collective crisis response that could help enhance the overall effectiveness of your cluster.



E, Community Organizations
Questionnaire Model for Community Organizations

This survey instrument is designed for community organizations—including community-based NGOs, grassroots initiatives, local support groups, and social enterprise support organizations. Your insights into your organization’s profile, local context, motivations, operational strategies, and overall impact are invaluable. The responses will inform our integrated theme model and support our multilevel analyses (e.g., structural equation modeling).

The questionnaire follows the 5W1H framework:
- **Who:** Organizational profile, leadership role, and social capital  
- **When/Where:** Local context, infrastructure quality, and community environment  
- **Why:** Motivations, external influences, and community needs  
- **How/Impact:** Operational strategies, integration of digital and physical resources, grassroots interventions, and performance outcomes

Please answer all questions using the provided rating scales and detailed narratives where indicated. If a question does not apply, indicate “N/A” with a brief explanation. Your responses are confidential.

---

## PART I: WHO? – Organizational Profile, Role, and Social Capital

### A. About Your Organization and Leadership

1. **Organizational Identification:**  
   - **Organization Name:**  
     *(Open-ended)*  
   - **Year of Establishment:**  
     *(Open-ended; please specify the year)*  
   - **Type of Organization:**  
     - [ ] Community-based NGO  
     - [ ] Grassroots Initiative  
     - [ ] Local Support Group  
     - [ ] Social Enterprise Support Organization  
     - [ ] Other (please specify): __________

2. **Geographical Coverage and Target Demographic:**  
   - **Primary Operating Area:**  
     *(Open-ended: List regions, cities, or communities served)*  
   - **Target Population:**  
     *(Open-ended: Describe the communities or groups you serve, e.g., low-income families, youth, rural populations)*

3. **Leadership Role and Social Capital:**  
   - **Your Title/Role:**  
     *(Open-ended)*  
   - **Organizational Mission:** *(Select all that apply)*  
     - [ ] Promote digital literacy  
     - [ ] Build and strengthen community networks  
     - [ ] Facilitate grassroots interventions during crises  
     - [ ] Enhance both bonding (internal) and bridging (external) social capital  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Please briefly describe your organization’s mission and its role in fostering community social capital.  
   - *(Advanced Insight):* How has your organization’s leadership role and approach evolved over the past three years?

4. **Network and Partnership Scope:**  
   - To what extent do you collaborate with other community organizations and local government agencies?  
     *(Scale: 1 = Not at all; 5 = Extensive collaboration)*  
     [1] [2] [3] [4] [5]  
   - *(Open-ended):* Describe any initiatives that have successfully strengthened inter-organizational and cross-sector partnerships.

---

## PART II: WHEN/WHERE? – Local Context, Infrastructure, and Community Environment

1. **Local Infrastructure and Access:**  
   - **Digital Infrastructure:**  
     How would you rate the availability and quality of digital infrastructure (e.g., internet access, community Wi‑Fi, digital learning centers) in your community?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]
   - **Physical Infrastructure:**  
     How would you assess the reliability and quality of local physical infrastructure (e.g., electricity, transportation, community centers) that supports your programs?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Briefly describe any recent improvements or challenges in local infrastructure that have directly impacted your organization’s initiatives.
   - *(Advanced Insight):* What emerging technological developments or trends do you foresee impacting local infrastructure in the next few years?

2. **Community Environment and Economic Stability:**  
   - How stable is the socio‑economic environment in your community for supporting grassroots initiatives?  
     *(Scale: 1 = Highly unstable; 5 = Very stable)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Provide examples of major changes (e.g., economic downturns, infrastructural projects, community mobilizations) in the past 12–24 months that have affected your work.

3. **Conflict Awareness:**  
   - Please indicate the current state of conflict or stability affecting your region:  
     - [ ] No Conflict (Baseline)  
     - [ ] Pre‑Conflict (Early Warning Signs)  
     - [ ] Active Conflict (Ongoing Disruptions)  
     - [ ] Post‑Conflict (Recovery Phase)  
   - *(Note: Additional conflict-specific questions may be administered based on your selection.)*

---

## PART III: WHY? – Motivations, Community Needs, and External Influences

1. **Establishment Motivations:**  
   - What were the primary reasons for founding your organization? *(Select all that apply)*  
     - [ ] Addressing digital literacy gaps  
     - [ ] Building stronger community networks  
     - [ ] Providing essential support during crises  
     - [ ] Promoting social inclusion and economic opportunities  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Explain how both digital challenges and local infrastructural conditions have influenced your organization’s founding and ongoing mission.

2. **External and Technological Influences:**  
   - To what extent do emerging digital technologies (e.g., social media, mobile learning) shape your organizational strategies?  
     *(Scale: 1 = Not at all; 5 = Very significantly)*  
     [1] [2] [3] [4] [5]
   - How much do infrastructural limitations (e.g., power outages, unreliable internet) impact your ability to deliver programs?  
     *(Scale: 1 = Not at all; 5 = Very significantly)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Provide specific examples of how external digital or infrastructural trends have influenced your planning and program delivery.
   - *(Advanced Insight):* What do you consider the most urgent digital challenge facing your community today, and why?

3. **Local Support and Institutional Collaboration:**  
   - How supportive are local institutions (e.g., municipal bodies, schools, other NGOs) in promoting community development and digital literacy?  
     *(Scale: 1 = Not supportive; 5 = Highly supportive)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Describe a case where collaboration with local institutions significantly enhanced (or hindered) your initiatives.  
   - *(Additional):* How do national policies and local regulations affect your strategies? (Open-ended)

---

## PART IV: IN WHAT WAY? – Operational Strategies, Digital Literacy, and Grassroots Interventions

1. **Digital Literacy Promotion and Training Initiatives:**  
   - **Program Offerings:**  
     Which digital literacy programs does your organization offer? *(Select all that apply)*  
     - [ ] Basic computer and internet training  
     - [ ] Internet safety and cybersecurity workshops  
     - [ ] Mobile device usage tutorials  
     - [ ] Social media and online communication training  
     - [ ] Specialized digital skills courses (e.g., coding, graphic design)  
     - [ ] Other (please specify): __________  
   - **Program Frequency:**  
     How frequently are these programs conducted?  
     - [ ] Weekly  
     - [ ] Monthly  
     - [ ] Quarterly  
     - [ ] Occasionally  
   - *(Open-ended):* Provide a recent example of a successful digital literacy initiative, including participant feedback and measurable outcomes.
   - *(Advanced Insight):* What innovative methods or technologies have you employed in these programs?

2. **Grassroots Intervention Strategies and Social Capital Building:**  
   - **Community Engagement Methods:**  
     Which methods do you use to mobilize the community and build social capital? *(Select all that apply)*  
     - [ ] Community meetings and town halls  
     - [ ] Social media engagement and online forums  
     - [ ] Local workshops and training sessions  
     - [ ] Peer mentoring and support groups  
     - [ ] Collaborative projects with other organizations  
     - [ ] Other (please specify): __________  
   - How effective are these methods in strengthening community ties?  
     *(Scale: 1 = Not effective; 5 = Highly effective)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Describe an intervention that significantly improved community engagement or social cohesion.

3. **Integration of Digital and Physical Resources:**  
   - **Digital Tool Utilization:**  
     Which digital platforms or tools does your organization use for coordination and outreach?  
     *(List up to three—for example, WhatsApp groups, Facebook pages, dedicated apps—and rate each for effectiveness on a scale of 1–5)*  
   - **Physical Resource Utilization:**  
     What key physical assets (e.g., community centers, libraries, mobile classrooms) support your program delivery?  
     *(Open-ended: Describe key infrastructural assets or partnerships)*  
   - *(Open-ended):* Explain how merging digital platforms with physical community spaces has enhanced your grassroots interventions.
   - *(Advanced Insight):* How does your organization adapt its operational strategies during emergency or crisis situations?

4. **Beneficiary Engagement and Feedback:**  
   - How do you collect feedback from community members regarding your programs? *(Select all that apply)*  
     - [ ] Surveys or questionnaires  
     - [ ] Focus groups  
     - [ ] Informal discussions  
     - [ ] Social media polls  
     - [ ] Other (please specify): __________  
   - *(Open-ended):* Describe how you use feedback to refine and improve your programs.

---

## PART V: IMPACT? – Outcomes, Performance Metrics, and Future Directions

1. **Measuring Impact:**  
   - *(Open-ended):* What key performance indicators (KPIs) do you monitor? (Examples: number of participants, improvements in digital skills, community engagement rates)
   - How would you rate the overall impact of your initiatives on enhancing community resilience and digital literacy?  
     *(Scale: 1 = Very low impact; 5 = Very high impact)*  
     [1] [2] [3] [4] [5]

2. **Economic and Social Outcomes:**  
   - *(Open-ended):* Provide examples or quantitative evidence of how your initiatives have improved economic opportunities or social cohesion in your community.

3. **Future Strategic Priorities and Vision:**  
   - What are your key strategic priorities for the next 1–3 years? *(Select all that apply)*  
     - [ ] Expanding digital literacy programs  
     - [ ] Strengthening community networks and social capital  
     - [ ] Upgrading local infrastructural facilities (e.g., enhanced internet access, new community centers)  
     - [ ] Scaling up grassroots interventions  
     - [ ] Building stronger partnerships with local government and digital service providers  
     - [ ] Other (please specify): __________  
   - How likely are you to invest in advanced digital tools and additional infrastructural resources to support your programs?  
     *(Scale: 1 = Not likely; 5 = Extremely likely)*  
     [1] [2] [3] [4] [5]
   - *(Open-ended):* Describe your long-term vision for enhancing both the digital and social resilience of your community.

4. **Ecosystem-Level Impact Reflection:**  
   - *(Open-ended):* Reflect on how your organization’s efforts contribute to broader social entrepreneurship and digital ecosystem outcomes in your region. What additional supports or changes would further amplify these benefits?

---

## FINAL SECTION: GENERAL FEEDBACK

- **Additional Comments or Recommendations:**  
  *(Open-ended):* Please share any further insights, suggestions, or observations regarding the challenges and opportunities faced by your organization to help refine and enhance its overall impact.


F, Donor Agencies
Questionnaire Model for Donor Agencies

This survey instrument is designed for donor agencies—including governmental funding agencies, multilateral/international institutions, philanthropic foundations, CSR funds, and other donor bodies. Your insights into your agency’s profile, funding mandate, geographic focus, evaluation processes, and overall impact are invaluable. The responses will inform our integrated theme model and support our multilevel analyses (e.g., structural equation modeling).

The questionnaire follows the 5W1H framework:
- **Who:** Organizational profile, role, and funding mandate  
- **When/Where:** Geographical scope, infrastructure assessment, and regional context  
- **Why:** Funding rationale, opportunity drivers, and risk assessment  
- **How/Impact:** Funding criteria, evaluation processes, coordination mechanisms, and overall impact

Please answer all questions using the provided rating scales and detailed responses where indicated. If a question does not apply, indicate “N/A” with a brief explanation. Your responses are confidential.

---

## PART I: WHO? – Organizational Profile, Role, and Funding Mandate

### A. Agency Identification and Profile

1. **Agency Name:**  
   *(Open-ended)*

2. **Year of Establishment:**  
   *(Open-ended; please specify the founding year)*

3. **Type of Organization:** *(Select all that apply)*  
   - [ ] Governmental Funding Agency  
   - [ ] Multilateral/International Donor Institution  
   - [ ] Philanthropic/Foundation  
   - [ ] Corporate Social Responsibility (CSR) Fund  
   - [ ] Other (please specify): __________

### B. Role and Responsibilities

4. **Your Official Title/Position:**  
   *(Open-ended)*

5. **Area of Focus/Expertise:** *(Select one or more)*  
   - [ ] Funding for Digital Initiatives  
   - [ ] Infrastructure & Connectivity Projects  
   - [ ] Social Innovation & Entrepreneurship  
   - [ ] Integrated Community Development  
   - [ ] Other (please specify): __________

6. **Core Funding Mandate:**  
   *(Open-ended):* Briefly describe your agency’s mission and how it supports digital innovation alongside regional infrastructural development.  
   - *(Advanced Insight):* How has your funding mandate evolved over the past three years in response to emerging digital trends and infrastructural challenges?

### C. Funding Portfolio Overview

7. **Overall Funding Portfolio Size:**  
   - [ ] < US$1M  
   - [ ] US$1M – US$5M  
   - [ ] US$5M – US$20M  
   - [ ] > US$20M

8. **Budget Allocation:**  
   *(Open-ended):* Specify the approximate proportion of your budget allocated to digital initiatives versus physical/infrastructural projects.

---

## PART II: WHEN/WHERE? – Geographical Scope, Infrastructure Assessment, and Regional Context

1. **Geographical Coverage:**  
   - Which regions, countries, or cities are included in your funding operations?  
     *(Open-ended: List your primary geographical focus areas.)*

2. **Target Area Types:**  
   - Please indicate the primary area type targeted by your funding:  
     - [ ] Urban  
     - [ ] Peri‑urban  
     - [ ] Rural  
     - [ ] Mixed/All

3. **Digital Infrastructure Quality in Target Regions:**  
   - How would you rate the quality and accessibility of digital infrastructure (e.g., broadband, data centers, cloud services) in your target areas?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]

4. **Significance of Digital Connectivity Challenges:**  
   - How significant are digital connectivity challenges in your funding decisions?  
     *(Scale: 1 = Not significant; 5 = Critically significant)*  
     [1] [2] [3] [4] [5]

5. **Physical Infrastructure Conditions:**  
   - How would you rate the reliability of physical infrastructure (e.g., electricity, transportation, local support facilities) in these regions?  
     *(Scale: 1 = Very poor; 5 = Excellent)*  
     [1] [2] [3] [4] [5]

6. **Open-Ended (Physical Infrastructure Challenges):**  
   - Describe any infrastructural challenges (e.g., frequent power outages, transport bottlenecks) that have directly influenced your funding strategy.
   
7. **Advanced Insight – Future Infrastructure Trends:**  
   - What emerging digital or technological trends do you foresee as critical for improving infrastructure quality in your target regions over the next 3–5 years?  
     *(Open-ended)*

8. **Regional Stability:**  
   - How stable is the socio‑economic and infrastructural environment in your target regions?  
     *(Scale: 1 = Highly unstable; 5 = Very stable)*  
     [1] [2] [3] [4] [5]

9. **Open-Ended (Regional Trends):**  
   - Provide examples of trends or fluctuations (e.g., effects of new policies, conflict disruptions) that have affected regional planning and your funding approach.

10. **Conflict Phase Identification:**  
    - Please indicate the current conflict/stability phase of your target regions:  
      - [ ] No Conflict (Baseline)  
      - [ ] Pre‑Conflict (Early Warning Signs)  
      - [ ] Active Conflict (Ongoing Disruptions)  
      - [ ] Post‑Conflict (Recovery Phase)  
    - *(Note: Additional branch-specific questions may follow based on your selection.)*

---

## PART III: WHY? – Funding Rationale, Opportunity Drivers, and Risk Assessment

1. **Primary Funding Objectives:**  
   - What are the major motivations behind your funding priorities? *(Select all that apply)*  
     - [ ] Stimulating Digital Innovation  
     - [ ] Improving Regional Infrastructure  
     - [ ] Enhancing Social Entrepreneurship  
     - [ ] Addressing Market Gaps in Technology/Connectivity  
     - [ ] Promoting Economic Resilience  
     - [ ] Other (please specify): __________

2. **Open-Ended (Motivations):**  
   - Describe how emerging digital trends and local infrastructural needs shape your funding priorities and strategies.

3. **Opportunity Versus Risk Evaluation:**  
   - When assessing project proposals, how do you balance potential opportunities (e.g., scalability, innovative impact) against risks (e.g., infrastructural inadequacy, political instability)?  
     *(Scale: 1 = Risk-dominated; 5 = Opportunity-dominated)*  
     [1] [2] [3] [4] [5]

4. **Open-Ended (Risk Example):**  
   - Provide an example of how the balance between opportunity and risk has affected a recent funding decision.  
   - *(Advanced Insight):* Which risk factor has most frequently impacted your funding decisions over the past years, and how have you adapted your strategy accordingly?

5. **External Standards and Trends:**  
   - To what extent do international standards (e.g., cybersecurity benchmarks, ITU guidelines, infrastructure best practices) shape your funding criteria?  
     *(Scale: 1 = Not at all; 5 = Very significantly)*  
     [1] [2] [3] [4] [5]

6. **Open-Ended (External Influences):**  
   - Explain how technological trends and infrastructural developments externally influence your funding allocations.

---

## PART IV: IN WHAT WAY? – Funding Criteria, Evaluation Processes, and Coordination Mechanisms

1. **Funding Criteria Importance:**  
   - Please rate the importance of the following criteria when evaluating funding proposals (1 = Not important; 5 = Critical):  
     - Digital readiness and innovation potential  
     - Robustness/scalability of digital initiatives  
     - Quality and reliability of local physical/infrastructural support  
     - Project sustainability and risk management  
     - Alignment with socio‑economic development and social entrepreneurship outcomes  
   - **Open-Ended:** Describe any additional criteria that are essential in your decision-making process.

2. **Evaluation of Digital Initiatives:**  
   - **Performance Metrics:**  
     Which key performance indicators (KPIs) do you use to evaluate digital projects?  
     *(Open-ended: e.g., user adoption rates, system uptime, ROI, innovation outcomes)*
   - **Follow-Up Evaluation Frequency:**  
     How frequently do you conduct post-funding evaluations?  
     - [ ] Quarterly  
     - [ ] Bi-annually  
     - [ ] Annually  
     - [ ] Ad-hoc basis
   - **Open-Ended:**  
     Provide an example of how evaluation feedback has informed changes in your funding strategy.
   - **Advanced Insight:**  
     How are you leveraging data analytics or emerging digital platforms to refine evaluation and monitoring of funded projects?

3. **Inter-Agency Coordination:**  
   - Which methods do you use to coordinate with other donor agencies, governmental bodies, and private sector partners? *(Select all that apply)*  
     - [ ] Joint funding committees  
     - [ ] Regular inter-agency meetings or forums  
     - [ ] Shared evaluation frameworks  
     - [ ] Cross‑sector task forces  
     - [ ] Other (please specify): __________  
   - *Rate the overall effectiveness of these coordination mechanisms:*  
     *(Scale: 1 = Not effective; 5 = Highly effective)*  
     [1] [2] [3] [4] [5]
   - **Open-Ended:**  
     Describe a successful inter-agency coordination effort that improved project outcomes.
   - **Advanced Insight:**  
     What new collaborative approaches or digital tools are you exploring to further enhance inter-agency coordination?

4. **Integration of Digital and Infrastructural Assessments:**  
   - How effectively are digital performance evaluations and physical/infrastructural assessments integrated in your funding process?  
     *(Scale: 1 = Not at all integrated; 5 = Fully integrated)*  
     [1] [2] [3] [4] [5]
   - **Open-Ended:**  
     Provide an example of a project where both digital and infrastructural components were critical to its success.

---

## PART V: OVERALL FUNDING IMPACT & FUTURE STRATEGIC PRIORITIES

1. **Overall Impact of Funding Programs:**  
   - How would you rate the overall impact of your agency’s funding programs on advancing digital innovation and strengthening local infrastructure?  
     *(Scale: 1 = Very low impact; 5 = Very high impact)*  
     [1] [2] [3] [4] [5]
   - **Open-Ended:**  
     Share specific success stories or examples that illustrate this impact.

2. **Performance Metrics and Outcome Evaluation:**  
   - What key performance metrics do you track for funded projects?  
     *(Open-ended: List and describe metrics such as project sustainability, economic impact, technology uptake, etc.)*
   - **Open-Ended:**  
     Explain how outcome evaluations have guided adjustments in your funding strategy.

3. **Future Strategic Priorities:**  
   - What are your top strategic funding priorities for the next 1–3 years? *(Select all that apply)*  
     - [ ] Increasing funding for digital innovation  
     - [ ] Enhancing regional infrastructure and connectivity  
     - [ ] Expanding support for social entrepreneurship  
     - [ ] Strengthening inter-agency and cross‑sector coordination  
     - [ ] Other (please specify): __________
   - How likely are you to increase investment in projects that integrate digital initiatives with physical/infrastructural development?  
     *(Scale: 1 = Not likely; 5 = Extremely likely)*  
     [1] [2] [3] [4] [5]
   - **Open-Ended:**  
     Describe your long-term vision for how donor funding can foster a cohesive digital ecosystem and resilient local infrastructure.
   - **Advanced Insight:**  
     What key lessons from recent funding rounds will shape your future strategic priorities, and what long-term policy changes do you advocate for to enhance sustainable funding outcomes?

4. **Ecosystem-Level Reflections:**  
   - **Open-Ended:**  
     Reflect on how your agency’s funding, evaluation, and coordination efforts have contributed to broader outcomes (e.g., enhanced social entrepreneurship, digital transformation, infrastructural resilience) in targeted regions. What additional supports or policy changes would further amplify these benefits?

---

## FINAL SECTION: GENERAL FEEDBACK

- **Additional Comments or Recommendations:**  
  *(Open-ended):* Please share any further insights, suggestions, or observations regarding your funding criteria, evaluation processes, or coordination efforts that could help refine and enhance your overall impact.


