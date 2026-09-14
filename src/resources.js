const TOOL_REVIEW_DATE = '9 September 2026';
const RESOURCE_EXAMPLES = {
notebooklm:worked('Read a paper and collect the facts you need',['xu'],
`Using [selected paper], make a table of [fields needed for my manuscript]. Give a source citation for each row so I can check it. Mark missing information as not reported.`,
`Using **the Xu et al. paper, “Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching,” DOI 10.1111/jopr.70151**, make a table with **study design, number of volunteers, methods compared, main ΔE00 results, acceptability threshold, and one limitation**. Give a source citation for each row so I can check it. Mark missing information as not reported.`,
`Field | Finding | Where to check
Design | Paired comparison of the two methods within each volunteer. | Methods, PDF pp. 2–4.
Volunteers | 18 for objective measurements; 17 for subjective evaluation. | Methods and Tables 2–3, PDF pp. 2–6.
Methods | ResNet and dental technicians; three gingival zones assessed. | Methods, PDF pp. 2–4.
Overall ΔE00 | ResNet 4.169 ± 2.048; technicians 5.625 ± 1.967; p < 0.001. | Results/Table 2, PDF pp. 4–5.
Acceptability | Threshold 2.8; both overall means were above it. | Methods/Results, PDF pp. 2–5.
Limitation | Findings from selected volunteers, technicians, and materials may not apply to other settings. | Discussion, PDF p. 6.`,
'First add a permitted copy of the paper and select it as the source. In the tool, open each citation; the page labels here show what to check.'),
chatgpt:worked('Write a cited Discussion paragraph',['alfaraj','xu'],
`Write one Discussion paragraph using only [checked facts]. Use [citation keys] after the claims they support. Keep [important qualification]. Do not add references.`,
`Write one clear Discussion paragraph using only these checked facts:
**Alfaraj et al., 2026 (DOI 10.1111/jopr.70091): an umbrella review included 11 systematic reviews, six rated critically low by AMSTAR 2. Its search ended in April 2025.**
**Xu et al., 2026 (DOI 10.1111/jopr.70151): 18 volunteers; ResNet had lower overall gingival ΔE00 than technicians (4.169 versus 5.625; p < 0.001), but both means exceeded the 2.8 acceptability threshold.**
Use **(Alfaraj et al., 2026)** and **(Xu et al., 2026)** after the claims they support. Make clear that **the Xu paper came after the umbrella review’s search**. Do not add references.`,
`The evidence for AI in prosthodontics remains uneven: six of the 11 systematic reviews in an umbrella review were rated critically low by AMSTAR 2 (Alfaraj et al., 2026). A later study of 18 volunteers found that ResNet reduced overall gingival color difference compared with technicians, although both means remained above the acceptability threshold of 2.8 (Xu et al., 2026). This distinction matters clinically: better relative performance does not necessarily provide an acceptable result. The Xu study was published after the umbrella review’s April 2025 search and should be considered subsequent evidence.`,
'Check both papers, save their DOI records in Zotero, and insert the final journal-formatted citations with your reference manager.'),
clinicians:worked('Turn a clinical question into a research aim',['ishiguro','azpiazu'],
`Help me turn [clinical question] into a research aim. My starting evidence is [checked study notes]. Give a question, a suitable design, and the outcomes to define before starting.`,
`Help me turn **“Which scanning workflow should we use for complete-arch implant prostheses?”** into a research aim. My starting evidence is **Ishiguro et al., 2026 (DOI 10.1111/jopr.70218): laboratory fit results from one cast and 60 PMMA prostheses**, and **Azpiazu-Flores et al., 2026 (DOI 10.1111/jopr.70167): a one-patient hybrid-workflow report with favorable one-year observations and no control group**. Give **a clinical research question, a suitable design, and outcomes to define before starting**. Use only these notes and do not claim long-term comparative survival is known.`,
`Research question
In patients receiving complete-arch implant-supported fixed prostheses, how do two predefined scanning and fabrication workflows compare in fit at delivery and subsequent clinical outcomes?

Design to discuss with the team
A prospective comparative clinical study. Consider random allocation if feasible and appropriate; otherwise prespecify how patient and treatment differences will be addressed. Use the patient as the independent unit and track multiple prostheses within a patient.

Outcomes to define
Choose one primary fit measure and an assessment time point. Define secondary outcomes such as adjustments, remakes, treatment time, and complications, with a clear follow-up schedule. Agree on sample size and ethics requirements before recruitment.

The laboratory study and one-patient report help motivate this question but do not establish long-term comparative survival.`,
'Check product eligibility first. This is a proposed study outline, not an approved protocol or a patient-specific recommendation.'),
openevidence:worked('Find a paper you can cite in your manuscript',['xu'],
`Find primary research on [clinical comparison]. Start with [known title or DOI]. Give the citation, study design, main result, and one sentence I could use in my manuscript. Say if you cannot retrieve the paper; do not invent references.`,
`Find primary research comparing **AI and dental technicians for gingival porcelain shade matching**. Start with **Xu et al., “Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching,” DOI 10.1111/jopr.70151**. Give **the citation, study design, main ΔE00 result, acceptability threshold, and one sentence I could use in my Introduction**. Say if you cannot retrieve the paper; do not invent references.`,
`Citation
Xu B, Wang Y, Zhang L, Lin WS, Tan J, Chen L. Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching. Journal of Prosthodontics. 2026. doi:10.1111/jopr.70151.

Design and finding
Paired evaluation in 18 volunteers. Overall mean ΔE00 was 4.169 ± 2.048 for ResNet and 5.625 ± 1.967 for technicians (p < 0.001). Both means exceeded the acceptability threshold of 2.8.

Sentence for the Introduction
A paired study of 18 volunteers found lower overall gingival color differences with a residual neural network than with dental technicians, although neither method’s mean met the stated acceptability threshold (Xu et al., 2026).`,
'This response uses the supplied paper. A live search may differ or fail to retrieve it; open the original paper before saving the citation.'),
elicit:worked('Find reviews and build your evidence table',['alfaraj'],
`Find [study type] about [topic]. Start with [known source]. Show columns for [fields]. Keep reviews separate from primary studies and leave missing information blank or marked not reported.`,
`Find **systematic or umbrella reviews of artificial intelligence in prosthodontics and implant dentistry**. Start with **Alfaraj et al., “Harnessing AI in prosthodontics and implant dentistry: An umbrella review of systematic evidence,” DOI 10.1111/jopr.70091**. Show columns for **review type, search date, number of included reviews, unique primary studies, AMSTAR 2 ratings, and whether results were pooled**. Keep reviews separate from primary studies and mark missing information as not reported.`,
`Source | Alfaraj et al., 2026; doi:10.1111/jopr.70091
Review type | Umbrella review of systematic reviews.
Search date | April 2025; eligible reviews published 1 January 2018–30 April 2025.
Included reviews | 11.
Unique primary studies | 261, represented by 281 citations across reviews.
AMSTAR 2 ratings | 4 high, 1 low, 6 critically low.
Results pooled? | No across-review meta-analysis because of heterogeneity.

Keep this as a review row. If you follow its references to primary studies, add those as separate records and check for duplicates.`,
'This row shows the known paper, not a complete search result. Record your actual query and verify extracted fields against the full text.')
};

const AI_RESOURCES = [
  {
    "id": "notebooklm",
    "name": "Gemini Notebook (formerly NotebookLM)",
    "category": "Read & extract",
    "description": "Ask focused questions across a selected set of papers and follow source-linked citations back to the supporting passage. Google renamed NotebookLM in July 2026.",
    "access": "A free Standard option is available. Usage limits, enhanced features, and account terms vary; check the current plan page.",
    "url": "https://notebook.google/",
    "sources": [
      [
        "Source citations",
        "https://support.google.com/gemininotebook/answer/16179559?hl=en"
      ],
      [
        "Plans and limits",
        "https://support.google.com/gemininotebook/answer/16213268?hl=en"
      ],
      [
        "Name change",
        "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/"
      ]
    ],
    "steps": [
      "Add a permitted copy of the Xu paper to a notebook and select it as the source.",
      "Copy the complete prompt below. Open each source citation in the answer.",
      "Save the checked facts and source locations in your Excel evidence worksheet."
    ]
  },
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "category": "Write & analyze",
    "description": "Useful for outlining, editing, code review, and drafting from a controlled source pack. Search and file/data tools can support research tasks, subject to the features available in your account.",
    "access": "A free tier is available with usage limits. Record the actual model shown during your task; do not assume a permanent model or unlimited uploads.",
    "url": "https://chatgpt.com/",
    "sources": [
      [
        "Free-tier features",
        "https://help.openai.com/en/articles/9275245-using-chatgpt-s-free-tier-faq"
      ]
    ],
    "steps": [
      "Collect the facts you have checked in the original papers.",
      "Copy the prompt below to turn those facts into a cited paragraph.",
      "Check the paragraph, then use Zotero to insert and format the verified references."
    ]
  },
  {
    "id": "clinicians",
    "name": "ChatGPT for Clinicians",
    "category": "Clinical evidence",
    "description": "A clinician-focused version of ChatGPT with clinical search, citations, and deeper literature review. It can help frame research questions and examine how evidence applies to a clinical claim.",
    "access": "Free for eligible verified U.S. clinicians. The current official list includes MD/DO physicians, NPs, PAs, and pharmacists; it does not list dentists. Verify eligibility directly. Ordinary ChatGPT remains a separate option for researchers.",
    "url": "https://help.openai.com/en/articles/20001202-chatgpt-for-clinicians",
    "sources": [
      [
        "Features and eligibility",
        "https://help.openai.com/en/articles/20001202-chatgpt-for-clinicians"
      ]
    ],
    "steps": [
      "Check whether you are eligible to use this product.",
      "Describe your research question and paste only information you may share.",
      "Use the draft to discuss the study design with your research team."
    ]
  },
  {
    "id": "openevidence",
    "name": "OpenEvidence",
    "category": "Clinical evidence",
    "description": "A clinical question-answering resource with linked medical literature. It is useful for orienting a question and following citations into original studies; assess coverage of the specific dental topic.",
    "access": "The provider’s app listing describes free access for verified U.S. clinicians. Eligibility and regional access require confirmation through the service.",
    "url": "https://www.openevidence.com/",
    "sources": [
      [
        "Provider’s app description",
        "https://apps.apple.com/us/app/openevidence/id6612007783"
      ]
    ],
    "steps": [
      "Ask a focused question and include a known paper’s title or DOI when helpful.",
      "Open the cited publication and check the result and its limitations.",
      "Save the verified reference in Zotero and use it to support the sentence you write."
    ]
  },
  {
    "id": "elicit",
    "name": "Elicit",
    "category": "Read & extract",
    "description": "Supports research discovery, paper summaries, and structured extraction. Use it to build a candidate evidence table, then verify each row against the paper.",
    "access": "A free Basic plan is available; advanced review workflows, exports, and higher usage may require an upgrade. Check the current plan for the task you need.",
    "url": "https://elicit.com/",
    "sources": [
      [
        "Research features",
        "https://elicit.com/industries/edu"
      ],
      [
        "Current plans",
        "https://elicit.com/pricing"
      ]
    ],
    "steps": [
      "Enter the research question below and review the papers returned.",
      "Select relevant papers and use the requested fields as extraction columns.",
      "Check each row against the paper; record the actual search and screening decisions."
    ]
  }
].map(t=>({...t,template:RESOURCE_EXAMPLES[t.id].template,example:RESOURCE_EXAMPLES[t.id]}));
