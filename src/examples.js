/* Prompts and new sample responses based on the linked publications. */
const EXAMPLE_NOTE = "Sample responses were newly written from the linked papers to show the output you could ask for. They are not the authors\u2019 original AI conversations or recorded results from the named tools. For your own study, supply your own measured results.";
const ARTICLES = {
alfaraj:{short:'Alfaraj et al. · AI umbrella review',title:'Harnessing AI in prosthodontics and implant dentistry: An umbrella review of systematic evidence',citation:'Alfaraj A, Limones Á, Ahmad S, Aljubairah F, Albalaw S, Albesher M, et al. Journal of Prosthodontics. 2026;35(2):127–142.',doi:'10.1111/jopr.70091',url:'https://onlinelibrary.wiley.com/doi/full/10.1111/jopr.70091',design:'Umbrella review of systematic reviews',location:'Methods/Results, PDF pp. 2–4 (journal pp. 128–130); quality and overlap, PDF p. 13 (journal p. 139).',facts:'Eleven systematic reviews were included. Searches were conducted in April 2025; eligible reviews were published from 1 January 2018 through 30 April 2025. Databases: PubMed, Scopus, Web of Science, Embase, Cochrane Database of Systematic Reviews. The review followed PRIOR 2022 and reported PROSPERO CRD420251067048. Flow: 207 records retrieved; 186 after deduplication; 165 excluded at title/abstract; 21 full texts assessed; 10 full texts excluded; 11 reviews included. There were 281 primary-study citations representing 261 unique primary studies; overall corrected covered area (CCA) was 0.77%. AMSTAR 2: 4 high, 1 low, 6 critically low. Heterogeneity prevented an across-review meta-analysis. For tooth-shade selection, two reviews relied on the same single primary study (task-level CCA 1.00).',takeaway:'Review counts, unique studies, and patients are different units. Low overall overlap does not establish independent evidence for every task.',modules:['evidence','synthesis','editing']},
azpiazu:{short:'Azpiazu-Flores et al. · Clinical case report',title:'Implementing 3D-printed indexing devices and contemporary scanning techniques for complete-arch implant-supported rehabilitations: A clinical case report',citation:'Azpiazu-Flores FX, Phuckdeedindan M, Aldosari AM, Yang CC, Morton D, Lin WS. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–11.',doi:'10.1111/jopr.70167',url:'https://onlinelibrary.wiley.com/doi/10.1111/jopr.70167',design:'Single-patient clinical case report',location:'Clinical report, PDF pp. 2–7; Figure 11, PDF p. 8; Discussion/Summary, PDF p. 9.',facts:'A 68-year-old man underwent staged complete-arch rehabilitation with six maxillary and six mandibular implants. A hybrid workflow combined a custom 3D-printed hexagonal indexing device, CBCT anatomy, articulated diagnostic casts, milled PMMA interim prostheses, and monolithic zirconia definitive prostheses. Maxillary acquisition used individual nonsplinted scan bodies; mandibular acquisition used a splinted OptiSplint system, with verification casts. One-year observations described satisfactory fit and occlusion, healthy peri-implant tissues, and stable bone levels. There was one patient and no control group. The two arches were not randomized comparison arms. Comparative accuracy, time, and cost advantages were not quantified in this case.',takeaway:'Detailed clinical implementation can demonstrate feasibility without proving comparative superiority.',modules:['foundations','synthesis','submission','peer-review']},
ishiguro:{short:'Ishiguro et al. · Laboratory factorial study',title:'Effects of scanner type and prosthesis design–luting protocol combinations on the passive fit of interim implant-supported complete-arch fixed dental prostheses',citation:'Ishiguro D, Omar MS, Lin WS, Nagai T. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–9.',doi:'10.1111/jopr.70218',url:'https://onlinelibrary.wiley.com/doi/abs/10.1111/jopr.70218',design:'2 × 3 factorial in vitro study',location:'Methods, PDF pp. 2–5; Tables 1–2, PDF pp. 5–6; limitations, PDF p. 7.',facts:'One maxillary edentulous master cast had four parallel multiunit abutment analogs. The same splinted OptiSplint assembly was scanned extraorally with TRIOS 4 (intraoral scanner, IOS) and E4 (laboratory scanner), ten scans per device without repositioning the assembly. Two scanners and three design–luting combinations yielded 60 PMMA prostheses, ten per group. Table 2 fit/misfit counts: G1 IOS–Ti-base Freehand 7/3; G2 IOS–Ti-base on Cast 10/0; G3 IOS–Direct-to-MUA 0/10; G4 Lab–Ti-base Freehand 10/0; G5 Lab–Ti-base on Cast 10/0; G6 Lab–Direct-to-MUA 10/0. Fit was a binary screw-resistance assessment. Initial examiner agreement: 59/60 (98.3%), κ = 0.95. Table 2 Fisher comparisons: G1 versus G3 p = 0.003; G3 versus G6 p < 0.001. Sixty prostheses are not 60 patients or independent casts. Source scans may connect specimens across designs; the original mapping is needed for any new dependence-aware analysis.',takeaway:'Preserve the experimental unit: six groups of ten prostheses produced from one master cast.',modules:['proposal','statistics','manuscript','editing','figures','conference']},
omar:{short:'Omar et al. · Articulation proof of concept',title:'Virtual articulation using sequential mandibular intraoral scans and computational functional rotation reference determination—Proof-of-concept',citation:'Omar MS, Yang CC, Morton D, Lin WS. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–8.',doi:'10.1111/jopr.70188',url:'https://onlinelibrary.wiley.com/doi/10.1111/jopr.70188',design:'Computational technique / single-case proof of concept',location:'Technique, PDF pp. 2–6; Figure 8 and Discussion, PDF p. 7.',facts:'Sequential mandibular scans came from one representative case. Six leaf-gauge conditions were 2, 5, 7, 10, 15, and 20 leaves (0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm). The 0.2-mm computational baseline was not maximal intercuspation. Mandibular positions were aligned to a fixed maxillary reference with identical mesh topology. Four landmarks established orientation; a minimal-displacement search and principal-component line fit determined a functional rotation reference. Compatibility was demonstrated with Denar Mark 330, Artex CR, and Stratos 300 coordinate systems. The paper reported average RMSD of 0.14 mm in internal forward validation against captured scan positions. This was not external ground-truth occlusal error or an independently established anatomical hinge axis. Larger cohorts and interoperator/inter-scanner reproducibility remain to be studied.',takeaway:'Internal agreement supports a proof of concept; independent clinical validation asks a different question.',modules:['proposal','data','figures','peer-review']},
xu:{short:'Xu et al. · Clinical AI shade evaluation',title:'Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching',citation:'Xu B, Wang Y, Zhang L, Lin WS, Tan J, Chen L. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–7.',doi:'10.1111/jopr.70151',url:'https://onlinelibrary.wiley.com/doi/full/10.1111/jopr.70151',design:'Paired human-participant AI performance evaluation',location:'Methods, PDF pp. 2–4; Results and Tables 2–3, PDF pp. 4–6; Discussion, PDF p. 6.',facts:'Eighteen periodontally healthy adult volunteers without gingival pigmentation each received technician and ResNet shade-matching specimens. Three adjacent 1 × 3 mm² gingival zones (upper, middle, lower) were assessed per method per volunteer. CIEDE2000 ΔE00 is dimensionless. Overall mean ± SD: ResNet 4.169 ± 2.048; technicians 5.625 ± 1.967; reported p < 0.001. Upper-zone means: 5.511 versus 6.129 (p = 0.317); middle: 3.486 versus 5.724 (p < 0.001); lower: 3.509 versus 5.023 (p = 0.007), always ResNet first. Acceptability threshold: 2.8; perceptibility threshold: 1.1. Both overall means exceeded 2.8. Objective measurements involved 18 volunteers; subjective evaluation involved 17 after one loss to follow-up. Methods were paired and zones repeated, not two independent groups of 18 people. Two experienced technicians and four porcelain powders were involved; generalization to other systems or gingival conditions is limited.',takeaway:'A statistically lower color difference does not, by itself, establish acceptable color matching.',modules:['foundations','data','statistics','manuscript','conference']}
};
function worked(title,articleIds,template,marked,answer,verify){
  return {title,articleIds,template,location:articleIds.map(id=>ARTICLES[id].location).join(' '),
    filled:marked.replace(/\*\*(.*?)\*\*/gs,'$1'),customize:[...marked.matchAll(/\*\*(.*?)\*\*/gs)].map(m=>m[1]),answer,verify};
}
const WORKED_EXAMPLES = {
foundations:[
worked('Make a simple AI-use plan',['azpiazu'],
`I am writing [type of paper] about [project]. I want AI help with [tasks]. I can share [permitted information]. Make a short plan showing what AI can do and what I must check.`,
`I am writing **a clinical case report about complete-arch implant rehabilitation**. My notes describe **a 68-year-old man, six implants in each arch, a 3D-printed indexing device, PMMA interim prostheses, and zirconia definitive prostheses**. I want help **organizing the case and improving the wording**. I can share **the published, nonidentifying facts below**; I will keep patient records and photographs out of this chat. Make a short AI-use plan for these two writing tasks. Do not add clinical details.`,
`AI-use plan
1. Organize the report into presentation, planning, treatment, and follow-up. I will check the sequence against the clinical record.
2. Improve clarity without adding procedures, measurements, or outcomes. I will compare each sentence with my original notes.
3. Use only the permitted facts in this chat. I will keep identifying records and photographs in the institution’s approved system.
4. Save the tool name, model/version shown, date, task, and sections edited. I will use this log to prepare the journal’s AI disclosure.
5. Before submission, I will check accuracy, coauthor approval, and consent for publication.`,
'Use your institution’s rules to decide what you may share; publication consent is a separate check.'),
worked('Write a conclusion that matches the findings',['xu'],
`Write a two-sentence conclusion for [study]. My findings are [results] and the clinical threshold is [threshold]. Explain the improvement without overstating what it means.`,
`Write a two-sentence conclusion for **a paired gingival porcelain shade-matching study in 18 volunteers**. The mean ΔE00 was **4.169 for ResNet and 5.625 for dental technicians (p < 0.001)**. The acceptability threshold was **2.8**, so **both means were above it**. Explain the improvement without saying the AI matches were clinically acceptable.`,
`The ResNet system produced a lower overall gingival color difference than dental technicians under the conditions of this study. However, both mean color differences exceeded the acceptability threshold of 2.8, indicating that the improvement did not establish clinically acceptable matching.`,
'Check the direction of the color-difference scale and the threshold before using this conclusion.')
],
proposal:[
worked('Turn an idea into a short proposal',['ishiguro'],
`Help me write a short proposal to study [question]. I plan to use [design and materials], compare [groups], and measure [outcome]. Include an aim, hypothesis, methods outline, and decisions I still need to make. Do not invent a sample-size calculation.`,
`Help me write a short proposal to study **whether scanner choice and prosthesis design–luting workflow affect passive fit**. I plan a **2 × 3 laboratory study using one maxillary cast with four parallel multiunit abutment analogs**. Compare **TRIOS 4 and E4 scanning**, each with **Ti-base Freehand, Ti-base on Cast, and Direct-to-MUA**. The prostheses will be **milled PMMA**, and the outcome will be **fit or misfit on a screw-resistance test**. Include an aim, hypothesis, methods outline, and decisions to make before collecting data. Do not invent a sample-size calculation or results.`,
`Aim
To evaluate how scanner choice and three design–luting workflows affect passive fit of interim complete-arch implant prostheses.

Hypothesis
Fit will not differ between the tested scanner–workflow combinations.

Methods outline
Use a maxillary cast with four parallel multiunit abutment analogs. Acquire scans with TRIOS 4 and E4, then fabricate PMMA prostheses with each of the three workflows. Assess fit using a predefined screw-resistance test. Record scanner, source scan, workflow, specimen ID, and examiner findings for every prosthesis.

Before starting
Agree on sample size with a statistician, define the fit criterion, and plan examiner calibration and fabrication order. Record which prostheses share a source scan so the analysis can account for dependence. One cast limits how widely the findings can apply.`,
'This is a planning draft based on the published design. Choose and document your own sample-size justification before data collection.'),
worked('Write the aims for a new technique',['omar'],
`Write one main aim, two supporting aims, and a short methods outline for [technique]. Available inputs are [inputs]. We will assess [measurement]. Keep the claims appropriate for [stage of research].`,
`Write one main aim, two supporting aims, and a short methods outline for **virtual articulation from sequential mandibular intraoral scans**. Available inputs are **one case scanned at leaf-gauge openings of 0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm**, with **a fixed maxillary reference**. We will assess **agreement between reconstructed positions and the captured scans using RMSD in mm**. Keep the aims appropriate for **a proof of concept**, without promising clinical accuracy.`,
`Main aim
Develop a workflow that uses sequential mandibular scans to estimate a functional rotation reference for virtual articulation.

Supporting aims
1. Describe how the scans are aligned to a fixed maxillary reference while preserving matching mesh vertices.
2. Measure internal agreement between reconstructed mandibular positions and the captured scans using RMSD.

Methods outline
Acquire six opening positions from one case. Use the 0.2-mm position as the computational baseline, align the meshes, and estimate a functional rotation reference using minimal displacement and a principal-component line fit. Reconstruct the captured positions and calculate RMSD. This initial work will assess feasibility; separate studies will be needed for external clinical validation.`,
'The 0.2-mm baseline is not maximal intercuspation; internal scan agreement is not external clinical accuracy.')
],
evidence:[
worked('Build a search you can paste into PubMed',['alfaraj'],
`I am looking for [study type] about [topic]. Draft a PubMed search using title/abstract terms for [main concepts]. Give me the search to paste, then one tip for checking it. Do not claim it has been run.`,
`I am looking for **systematic reviews of AI in prosthodontics and implant dentistry**. Draft a PubMed search using title/abstract terms for **artificial intelligence, machine learning, deep learning, prosthodontics, dental implants, and systematic reviews**. Give me the search to paste, then one tip for checking it. Do not add a date restriction or claim the search has been run.`,
`Untested PubMed search
("artificial intelligence"[tiab] OR "machine learning"[tiab] OR "deep learning"[tiab]) AND (prosthodont*[tiab] OR "implant dentistry"[tiab] OR "dental implant"[tiab] OR "dental implants"[tiab]) AND ("systematic review"[tiab] OR "systematic reviews"[tiab] OR "meta-analysis"[tiab])

Check that this finds relevant reviews you already know. Then work with a librarian to add suitable subject headings and adapt the search for the other databases in your protocol. Record the exact search, date, filters, and number of results when you run it.`,
'This is a new starter search, not the article’s original search. An umbrella review needs more than a single PubMed query.'),
worked('Write a background sentence with a real citation',['xu'],
`Write two background sentences using only [checked findings]. Cite [author–year key and DOI]. Include the main limitation. Do not add other references.`,
`Write two background sentences using only these checked findings: **Xu et al. compared ResNet and technician gingival shade matching in 18 volunteers. Overall mean ΔE00 was 4.169 versus 5.625 (p < 0.001), but both means exceeded the 2.8 acceptability threshold.** Cite **Xu et al., 2026; DOI 10.1111/jopr.70151**. Do not add other references.`,
`In a paired study of 18 volunteers, a residual neural network produced lower overall gingival porcelain color differences than dental technicians (mean ΔE00, 4.169 versus 5.625; p < 0.001; Xu et al., 2026). Both means exceeded the acceptability threshold of 2.8, so better relative performance did not establish clinically acceptable shade matching.

Reference: Xu B, Wang Y, Zhang L, Lin WS, Tan J, Chen L. Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching. Journal of Prosthodontics. 2026. doi:10.1111/jopr.70151.`,
'Open the JOP link and confirm the claim, reference details, and journal citation style.')
],
synthesis:[
worked('Turn review findings into a Results paragraph',['alfaraj'],
`Write a Results paragraph for [review type] using these checked counts: [search flow], [included evidence], and [quality findings]. Explain why [synthesis approach] was used. Keep every number unchanged.`,
`Write a Results paragraph for **an umbrella review of AI in prosthodontics and implant dentistry**. Checked counts: **207 records retrieved; 186 after duplicates; 165 excluded at title/abstract screening; 21 full texts assessed; 10 excluded; 11 reviews included**. The reviews contained **281 primary-study citations representing 261 unique studies; overall corrected covered area was 0.77%**. AMSTAR 2 ratings were **4 high, 1 low, and 6 critically low**. **Heterogeneity prevented an across-review meta-analysis.** Keep every number unchanged.`,
`The search identified 207 records, of which 186 remained after deduplication. After 165 records were excluded at title and abstract screening, 21 full texts were assessed and 10 were excluded, leaving 11 systematic reviews. These reviews contained 281 primary-study citations representing 261 unique studies, with an overall corrected covered area of 0.77%. AMSTAR 2 ratings were high for four reviews, low for one, and critically low for six. Heterogeneity prevented an across-review meta-analysis.`,
'Reconcile these counts with your screening log and quality assessments before using the paragraph.'),
worked('Make an evidence table for your notes',['azpiazu','ishiguro'],
`Turn these checked study notes into a table with Study, Design, Main finding, and What it cannot establish: [notes with source names]. Do not combine unlike outcomes.`,
`Turn these checked notes into a table with Study, Design, Main finding, and What it cannot establish.
**Azpiazu-Flores et al., 2026: one 68-year-old man; six implants per arch; hybrid indexing and scanning workflow; one-year observations of satisfactory fit, stable occlusion, healthy peri-implant tissues, and stable bone levels; no control group.**
**Ishiguro et al., 2026: laboratory study; 60 PMMA prostheses from one cast; 10 per scanner–workflow group; fit was 0/10 for IOS Direct-to-MUA and 10/10 for laboratory-scanner Direct-to-MUA; binary screw-resistance test.**
Do not combine these outcomes into one estimate.`,
`Study | Design | Main finding | What it cannot establish
Azpiazu-Flores et al. | One-patient case report | The hybrid workflow was completed with favorable observations at one year. | Comparative superiority, quantified time savings, or outcomes in a wider patient population.
Ishiguro et al. | Laboratory study, one cast and 60 prostheses | Direct-to-MUA fit was observed in 0/10 IOS specimens and 10/10 laboratory-scanner specimens. | Long-term patient outcomes or performance across different casts and clinical conditions.`,
'Keep the one-patient observations separate from the laboratory fit counts.')
],
data:[
worked('Set up your Excel data sheet',['xu'],
`Suggest Excel column names and coding rules for [study design]. Each [participant/specimen] has [measurements]. Explain what one row should represent. Do not invent measured values.`,
`Suggest Excel column names and coding rules for **a paired ResNet-versus-technician gingival shade study with 18 volunteers**. Each volunteer has **both methods and three zones: upper, middle, and lower**. We measure **ΔE00**. Explain what one row should represent and how to keep **the separate subjective assessment, available for 17 volunteers**, distinct. Do not invent measured values.`,
`Objective measurements sheet
One row = one volunteer × one method × one zone.

Column | Coding rule
participant_id | Use a study code; keep the identity key separately.
method | ResNet or Technician.
zone | Upper, Middle, or Lower.
delta_e00 | Numeric color difference; dimensionless; no negative values.
missing_reason | Leave blank when measured; explain any missing value.

The planned structure has 18 × 2 × 3 = 108 rows if every objective measurement is present. These are repeated measurements from 18 people, not 108 independent participants. Require each participant–method–zone combination to be unique.

Keep subjective ratings in a separate sheet linked by participant_id. Record the unavailable participant’s assessment as missing, with the reason; do not remove that person’s valid objective measurements.`,
'This is a proposed spreadsheet structure, not participant-level data from the paper.'),
worked('Organize files so you can reproduce a figure',['omar'],
`Make a short folder and file plan for [workflow]. Inputs are [files]; outputs are [results]. Include the settings and checks I should save.`,
`Make a short folder and file plan for **virtual articulation from six sequential mandibular scans in one case**. Inputs are **a fixed maxillary reference and mandibular meshes at 0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm openings**. Outputs are **the functional rotation reference, reconstructed positions, and RMSD results**. Include the settings and checks I should save.`,
`1. Raw inputs: preserve read-only copies of the permitted original meshes and a scan manifest listing opening position, file ID, and units.
2. Alignment: save the aligned meshes and transformation matrices. Record the fixed maxillary reference and 0.2-mm baseline. Check that matching vertex indices are preserved.
3. Analysis: save the script, software versions, orientation landmarks, minimal-displacement settings, and principal-component line-fit settings.
4. Results: export the rotation-reference coordinates and RMSD for each reconstructed position in mm.
5. Figures: save the plotting script and final image files. Link each image to the results file used to create it.

Keep identifiable scan files in approved storage with controlled access. Record any exclusions or manual changes in a dated log.`,
'Rerun from the saved inputs before submission and compare the regenerated outputs.')
],
statistics:[
worked('Explain the right analysis to your statistician',['xu'],
`Help me prepare an analysis plan for [design]. My outcome is [measure] and measurements repeat within [unit]. Explain the main comparison, repeated measurements, and information needed before analysis.`,
`Help me prepare an analysis plan for **18 volunteers, each assessed with ResNet and technician shade matching in upper, middle, and lower gingival zones**. My outcome is **ΔE00; smaller values mean less color difference**. Explain **the overall method comparison and the zone comparisons** in plain language. I have not supplied participant-level values, so do not calculate p values or confidence intervals.`,
`Main comparison
Compare the two methods within the same volunteer. First define exactly how the three zones will contribute to the overall result. Do not treat the two methods as independent groups.

Zone comparisons
Keep the upper, middle, and lower measurements linked to each volunteer. Discuss a repeated-measures or mixed-effects approach with the statistician, including whether the method difference changes by zone. Plan how multiple zone comparisons will be handled.

Before analysis
Check participant IDs, missing measurements, distributions, and outliers. Agree on the primary outcome and model assumptions. Report the method difference with a confidence interval and compare results with the 2.8 acceptability threshold. Participant-level paired data are needed for a valid paired confidence interval.`,
'Ask the statistician to approve the plan before running it; the sample response proposes an approach rather than reproducing the article’s analysis.'),
worked('Write a statistical Results paragraph',['ishiguro'],
`Write a Results paragraph using [group counts] and [checked statistical output]. Name the outcome and sample unit. Do not calculate new tests or describe statistical significance as clinical benefit.`,
`Write a Results paragraph for **60 PMMA complete-arch prostheses, 10 per group, tested for passive fit**. Fit counts were **IOS Freehand 7/10; IOS on Cast 10/10; IOS Direct-to-MUA 0/10; Lab Freehand 10/10; Lab on Cast 10/10; Lab Direct-to-MUA 10/10**. Checked Table 2 Fisher comparisons were **IOS Freehand versus IOS Direct-to-MUA, p = 0.003; IOS versus Lab Direct-to-MUA, p < 0.001**. Initial examiner agreement was **59/60 (98.3%), κ = 0.95**. Keep these results unchanged and do not run new tests.`,
`Passive fit was observed in 7 of 10 IOS Freehand prostheses, all 10 IOS on Cast prostheses, and none of the 10 IOS Direct-to-MUA prostheses. All 10 specimens in each laboratory-scanner group showed passive fit. The reported Fisher comparisons showed differences between IOS Freehand and IOS Direct-to-MUA (p = 0.003) and between the IOS and laboratory-scanner Direct-to-MUA groups (p < 0.001). Initial examiner agreement was 59 of 60 assessments (98.3%; κ = 0.95).`,
'Check against Table 2; these are published comparisons. A new analysis needs the source-scan mapping and an assessment of dependence.')
],
manuscript:[
worked('Write your Methods paragraph',['ishiguro'],
`Write one Methods paragraph from these study notes: [design, materials, groups, sample, and measurement]. Use past tense. Ask about missing details instead of filling them in.`,
`Write one Methods paragraph from these notes: **2 × 3 laboratory study; one maxillary edentulous cast with four parallel multiunit abutment analogs; same splinted OptiSplint assembly scanned extraorally with TRIOS 4 and E4; 10 scans per device without repositioning the assembly; Ti-base Freehand, Ti-base on Cast, and Direct-to-MUA workflows; 60 milled PMMA prostheses, 10 per group; binary screw-resistance fit assessment by two examiners, with consensus for disagreements**. Use past tense. Do not add randomization, blinding, or equipment settings that are not supplied.`,
`A 2 × 3 laboratory study evaluated scanner type and prosthesis design–luting workflow using one maxillary edentulous cast with four parallel multiunit abutment analogs. The same splinted OptiSplint assembly was scanned extraorally with TRIOS 4 and E4, with 10 scans per device and no repositioning of the assembly. The Ti-base Freehand, Ti-base on Cast, and Direct-to-MUA workflows were used to fabricate 60 milled PMMA prostheses, with 10 specimens per group. Two examiners assessed passive fit using a binary screw-resistance test, and disagreements were resolved by consensus.

For the full Methods section, add the exact fit criterion, fabrication settings, and source-scan-to-specimen mapping from your records.`,
'Verify the paragraph against the laboratory record, especially the extraoral scan setup and fit criterion.'),
worked('Write your Results paragraph',['xu'],
`Write a Results paragraph using [sample], [overall results], and [subgroup results]. Keep all values unchanged. Report missing assessments separately and save explanations for the Discussion.`,
`Write a Results paragraph for **a paired ResNet-versus-technician gingival shade study**. Objective measurements involved **18 volunteers**; subjective evaluation involved **17 because one volunteer was unavailable**. Overall ΔE00 (mean ± SD) was **4.169 ± 2.048 for ResNet and 5.625 ± 1.967 for technicians, p < 0.001**. Zone means, ResNet first, were **upper 5.511 versus 6.129, p = 0.317; middle 3.486 versus 5.724, p < 0.001; lower 3.509 versus 5.023, p = 0.007**. Keep every number unchanged and save explanations for the Discussion.`,
`Objective measurements were obtained from 18 volunteers. Overall mean ΔE00 was lower for ResNet (4.169 ± 2.048) than for technicians (5.625 ± 1.967; p < 0.001). The upper-zone means were 5.511 and 6.129, respectively (p = 0.317). Lower mean color differences were observed for ResNet in the middle zone (3.486 versus 5.724; p < 0.001) and lower zone (3.509 versus 5.023; p = 0.007). Subjective evaluation was available for 17 volunteers because one volunteer was unavailable.`,
'Compare every value and group order with Tables 2–3; ΔE00 has no unit.')
],
editing:[
worked('Make your Discussion clear and balanced',['xu'],
`Improve this Discussion paragraph: [draft]. Use these checked facts: [facts]. Keep the meaning accurate and explain the clinical implication in plain language. Return the revised paragraph.`,
`Improve this draft Discussion sentence: **“The AI was better, so it can replace technicians for gingival shade matching.”** Use these checked facts: **18 volunteers; mean ΔE00 4.169 with ResNet versus 5.625 with technicians; p < 0.001; both means exceeded the acceptability threshold of 2.8; two experienced technicians and four porcelain powders were involved**. Return one balanced paragraph in clear journal language.`,
`The ResNet system reduced overall gingival color difference compared with technician shade matching in this study. However, both mean ΔE00 values exceeded the acceptability threshold of 2.8, so the improvement did not establish an acceptable color match. The study involved 18 volunteers, two experienced technicians, and a limited set of porcelain powders. These findings therefore support further evaluation of AI-assisted shade matching rather than replacement of technicians.`,
'The starting sentence is supplied for editing practice; it is not a quotation from the article.'),
worked('Fix a confusing review summary',['alfaraj'],
`Rewrite this sentence: [draft]. Correct it using [checked counts and definitions]. Keep it to two or three clear sentences.`,
`Rewrite this draft: **“The review included 281 studies and showed that AI works well in dentistry.”** Correct it using **11 systematic reviews; 281 primary-study citations representing 261 unique studies; AMSTAR 2 ratings of 4 high, 1 low, and 6 critically low; no across-review meta-analysis because of heterogeneity**. Keep it to three clear sentences.`,
`The umbrella review included 11 systematic reviews containing 281 primary-study citations, which represented 261 unique studies. AMSTAR 2 ratings were high for four reviews, low for one, and critically low for six. Heterogeneity prevented an across-review meta-analysis, and the findings do not provide a single estimate of AI effectiveness across dentistry.`,
'The starting sentence is an editing exercise. Check review counts separately from primary-study counts.')
],
figures:[
worked('Create a figure from your results',['ishiguro'],
`Write Python code to make [chart type] from [checked data]. Label [axes and groups], include [sample sizes], and save [file types]. Use only these values and do not add error bars without uncertainty data.`,
`Write Python code using matplotlib to make **a horizontal bar chart of prostheses showing passive fit**. Counts are **IOS Freehand 7/10; IOS on Cast 10/10; IOS Direct-to-MUA 0/10; Lab Freehand 10/10; Lab on Cast 10/10; Lab Direct-to-MUA 10/10**. Label the x-axis **“Prostheses showing passive fit (%)”**, show **fit/total next to every bar**, and save **PNG at 300 dpi and SVG**. Use only these counts; do not add error bars.`,
`import matplotlib.pyplot as plt

labels = ["IOS Freehand", "IOS on Cast", "IOS Direct-to-MUA",
          "Lab Freehand", "Lab on Cast", "Lab Direct-to-MUA"]
fit = [7, 10, 0, 10, 10, 10]
total = [10] * 6
percent = [100 * a / b for a, b in zip(fit, total)]

fig, ax = plt.subplots(figsize=(9, 5))
ax.barh(labels, percent, color="#176b73")
ax.invert_yaxis()
ax.set_xlim(0, 115)
ax.set_xticks([0, 25, 50, 75, 100])
ax.set_xlabel("Prostheses showing passive fit (%)")
for row, (value, a, b) in enumerate(zip(percent, fit, total)):
    ax.text(value + 1.5, row, f"{a}/{b}", va="center")
ax.spines[["top", "right"]].set_visible(False)
fig.tight_layout()
fig.savefig("passive-fit.png", dpi=300)
fig.savefig("passive-fit.svg")
plt.close(fig)`,
'Run and inspect the plot. The bars describe these specimens from one cast; 10/10 does not imply a population success rate of 100%.'),
worked('Write a clear figure caption',['omar'],
`Write a caption for [figure contents]. Include [method details and units] and explain [important limitation]. Do not describe features that are not shown.`,
`Write a caption for **a planned workflow diagram with boxes for sequential mandibular scans, alignment to a fixed maxillary reference, functional rotation-reference estimation, and internal position comparison**. Scan openings are **0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm**. Estimation uses **minimal displacement and a principal-component line fit**. Explain that **the 0.2-mm baseline is not maximal intercuspation and internal comparison does not establish an anatomical hinge axis**.`,
`Figure. Workflow for estimating a functional rotation reference from sequential mandibular scans. Scans acquired at leaf-gauge openings of 0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm are aligned to a fixed maxillary reference. A minimal-displacement search and principal-component line fit are used to estimate the rotation reference, followed by comparison of reconstructed positions with captured scans. The 0.2-mm computational baseline is not maximal intercuspation. This internal comparison does not establish an anatomical hinge axis.`,
'Match the caption to your actual diagram. Create an original diagram or obtain permission for any published figure you reuse.')
],
submission:[
worked('Draft the main paragraph of your cover letter',['azpiazu'],
`Write the main paragraph of a cover letter to [journal] for [title and article type]. Explain [contribution and findings]. Leave originality, consent, and author-approval statements for me to confirm separately.`,
`Write the main paragraph of a cover letter to **Journal of Prosthodontics** for the clinical case report **“Implementing 3D-printed indexing devices and contemporary scanning techniques for complete-arch implant-supported rehabilitations: A clinical case report.”** The report describes **one patient treated with a hybrid workflow combining a 3D-printed indexing device, conventional records, and digital scanning, followed by PMMA interim and zirconia definitive prostheses**. **Favorable clinical observations were reported at one year.** Explain its practical contribution without claiming superiority. Leave originality, consent, and author-approval statements for me to confirm separately.`,
`Dear Editor,

Please consider our clinical case report, “Implementing 3D-printed indexing devices and contemporary scanning techniques for complete-arch implant-supported rehabilitations: A clinical case report,” for publication in the Journal of Prosthodontics. The report describes the use of a 3D-printed indexing device with conventional records and digital scanning to support staged complete-arch implant rehabilitation. It follows the workflow from PMMA interim prostheses to zirconia definitive prostheses and reports favorable clinical observations at one year. The report offers practical procedural detail for clinicians while recognizing the limits of a single case.`,
'This paper is already published: use this to see the letter’s structure, not to resubmit it. Add only declarations that are true for your own manuscript.'),
worked('Build your case-report submission checklist',['azpiazu'],
`Make a short pre-submission checklist for [article type] describing [project]. Include [specific materials to check]. Do not claim that any item has already been completed.`,
`Make a short pre-submission checklist for **a complete-arch implant rehabilitation case report involving one patient and one-year follow-up**. Include **the treatment timeline, clinical photographs, imaging, figure captions, consent for publication, references, and AI disclosure**. Do not assume that any check has already been completed.`,
`Before submission
□ Check the journal’s current case-report format, word limit, and required files.
□ Match the treatment timeline, implant counts, and follow-up interval to the clinical record.
□ Confirm consent for publication and remove unnecessary identifying details from images and captions.
□ Match each image to its caption; verify permissions for any reused material.
□ Keep conclusions limited to this patient and avoid unmeasured accuracy, time, or cost claims.
□ Open every reference and check that it supports the cited statement.
□ Complete the AI disclosure from the actual use log: tools/versions, dates, tasks, sections, validation, and privacy safeguards.
□ Obtain all coauthors’ approval of the final manuscript and declarations.`,
'Complete the checks using your own records and the current JOP submission instructions.')
],
'peer-review':[
worked('Answer a reviewer about your study’s limits',['omar'],
`Draft a polite reply to this reviewer comment: [comment]. We changed the manuscript to say [actual revision]. Include the reply and revised sentence. Do not claim new analyses were performed.`,
`Draft a polite reply to this sample reviewer comment: **“Please clarify whether your rotation reference is an anatomical hinge axis and whether 0.14 mm represents clinical accuracy.”** The revision we want to make is **that the reference is computational, the reported average RMSD of 0.14 mm reflects internal comparison with captured scan positions, and external clinical validation is still needed**. Include the reply and a revised Discussion sentence. Do not claim new analyses were performed.`,
`Response
Thank you for identifying this distinction. We will clarify that the estimated reference is a computational functional rotation reference rather than an independently established anatomical hinge axis. We will also state that the reported average RMSD of 0.14 mm describes internal agreement with captured scan positions and should not be interpreted as external clinical accuracy.

Revised Discussion sentence
The reported average RMSD of 0.14 mm reflects internal agreement with the captured mandibular positions; it does not independently validate an anatomical hinge axis or establish clinical accuracy, which will require external evaluation.`,
'The reviewer comment is a sample. Make the revision first, then change “will clarify” to “have clarified” and add the real page/line location.'),
worked('Respond without adding results you did not measure',['azpiazu'],
`Draft a reply to [reviewer comment]. Our study measured [available outcomes] but did not measure [missing outcomes]. Give a polite reply and one sentence to add to the limitations.`,
`Draft a reply to this sample reviewer comment: **“Please report how much time and cost your workflow saved.”** Our **one-patient case report** describes **the hybrid indexing/scanning workflow and favorable one-year observations**, but **we did not quantify comparative time or cost savings and had no control group**. Give a polite reply and one sentence to add to the limitations.`,
`Response
Thank you for this suggestion. Comparative time and cost were not measured in this case, and there was no control group. We therefore cannot provide an estimate of savings. We will clarify this limitation and avoid statements implying a measured efficiency advantage.

Sentence to add
Because comparative treatment time and cost were not measured and no control group was included, this report cannot establish an efficiency or economic advantage for the workflow.`,
'Use only your actual reviewer comments in a permitted workflow and verify the changes before claiming they are complete.')
],
conference:[
worked('Turn your results into an eight-minute talk',['xu'],
`Create a [duration]-minute talk for [audience] using [study details and results]. For each slide give a title, short slide text, and one speaking sentence. Include the main limitation and a clear take-home message.`,
`Create an **eight-minute, six-slide talk for dental clinicians** about **ResNet versus technician gingival porcelain shade matching in 18 volunteers**. Each volunteer received **both methods with upper, middle, and lower zones assessed**. Overall mean ΔE00 was **4.169 for ResNet versus 5.625 for technicians, p < 0.001**; **both exceeded the acceptability threshold of 2.8**. Subjective evaluation involved **17 volunteers**. For each slide give a title, short slide text, and one speaking sentence. Do not invent disclosures.`,
`1. Can AI improve gingival shade matching? — 0:45
Slide: ResNet versus dental technicians; paired study in 18 volunteers.
Say: “We asked whether AI could reduce the color difference in gingival porcelain matching.”

2. How we compared the methods — 1:30
Slide: Both methods in each volunteer; upper, middle, and lower zones; ΔE00 measurement.
Say: “Each volunteer provided a paired comparison, so the measurements belong together.”

3. The main result — 1:30
Slide: Mean ΔE00: ResNet 4.169; technicians 5.625; p < 0.001.
Say: “The AI method reduced overall color difference under these conditions.”

4. Was the difference acceptable? — 1:30
Slide: Acceptability threshold 2.8; both means above threshold.
Say: “A better match was not necessarily an acceptable match.”

5. What limits the conclusion? — 1:30
Slide: 18 volunteers; selected gingival conditions and materials; subjective ratings available for 17.
Say: “We need broader evaluation before applying this result to other patients and systems.”

6. What should clinicians remember? — 1:15
Slide: AI reduced color difference; further improvement and evaluation are needed.
Say: “Use the relative improvement and the clinical threshold together when interpreting AI performance.”

Add your actual author information, funding/conflict disclosures, and the Xu et al. citation to the deck.`,
'Check the conference’s format and disclosure rules; rehearse with a timer and verify every number.'),
worked('Prepare short answers for conference questions',['ishiguro'],
`Suggest four audience questions for [study summary]. Give a short spoken answer to each using only [known findings and limitations]. Do not invent follow-up studies or analyses.`,
`Suggest four audience questions for **a laboratory fit study of 60 PMMA complete-arch prostheses from one maxillary cast, using two scanners and three design–luting workflows**. Known findings: **IOS Direct-to-MUA fit 0/10; Lab Direct-to-MUA fit 10/10; IOS Freehand fit 7/10; the other three groups 10/10**. Give short spoken answers about **the sample, the main finding, clinical use, and the next research step**. Do not invent follow-up data.`,
`Q: Were there 60 patients?
A: No. We tested 60 prostheses made from one master cast, with 10 in each group. These are laboratory specimens.

Q: What was the clearest finding?
A: None of the 10 IOS Direct-to-MUA specimens showed passive fit, compared with all 10 laboratory-scanner Direct-to-MUA specimens under this setup.

Q: Does this mean I should always choose a laboratory scanner?
A: The results apply to the tested scanner–workflow combinations. One cast and PMMA interim prostheses do not cover every clinical situation.

Q: What should be studied next?
A: A useful next step would be to test more independent casts and clinical configurations, with a protocol that tracks shared source scans and defines the analysis in advance. That is a proposed next step, not a result of this study.`,
'Keep “what we found” separate from “what we propose to do next.”')
]
};
