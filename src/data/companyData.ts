export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  iconName: string;
  idealFor: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyChallenges: string[];
  howWeHelp: string[];
  deliverables: string[];
  iconName: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  clientType: string;
  location: string;
  title: string;
  context: string;
  servicesProvided: string[];
  approach: string;
  outcomesPlaceholder: string;
  status: string;
}

export const COMPANY_INFO = {
  name: "DocuDigital Solutions",
  legalName: "DocuDigital Solutions Private Limited",
  tagline: "Transforming Documents and Information into Digital Intelligence",
  subtagline: "Enterprise document digitization, metadata enrichment, OCR processing, and repository migration for universities, libraries, archives, and research institutions worldwide.",
  website: "www.docudigitalsolutions.com",
  managingDirector: "Balaji Beeki",
  whatsapp: "+91 98417 45201",
  whatsappUrl: "https://wa.me/919841745201",
  email: "info@docudigitalsolutions.com",
  emailPlaceholder: "info@docudigitalsolutions.com",
  addressPlaceholder: "DocuDigital Solutions Private Limited, Technology & Operations Hub",
  privacyCommitment: "Clients retain complete ownership and full control over their institutional standards, security protocols, project governance, and information privacy."
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Digitization and digital collections
  {
    id: "document-digitization",
    category: "Digitization & Digital Collections",
    title: "Document Scanning & Digitization",
    shortDesc: "High-resolution, calibrated scanning of administrative, academic, and historical paper assets into long-term archival formats.",
    fullDesc: "We digitize physical records, fragile materials, and institutional documents with precision handling, color calibration, and non-destructive capture processes tailored to strict preservation guidelines.",
    capabilities: [
      "High-throughput optical capture with calibrated DPI",
      "Archival TIFF, searchable PDF/A, and web-ready derivative creation",
      "Handling of bound volumes, loose sheets, and oversized formats",
      "Strict handling protocols for rare or fragile items",
      "Image cleanup, de-skewing, margin cropping, and background uniformization"
    ],
    iconName: "ScanLine",
    idealFor: "Universities, Government Archives, and Corporate Records"
  },
  {
    id: "library-archive-digitization",
    category: "Digitization & Digital Collections",
    title: "Library & Archive Digitization",
    shortDesc: "End-to-end digitization programs for rare books, special collections, manuscripts, theses, and cultural heritage repositories.",
    fullDesc: "Designed in compliance with international preservation benchmarks (such as FADGI and Metamorfoze guidelines), safeguarding delicate materials while making valuable collections globally accessible.",
    capabilities: [
      "Rare book and manuscript digitizing with non-invasive book cradles",
      "Scholarly journals, dissertations, and monograph scanning",
      "Archival file structure creation with preservation-grade master files",
      "Exhaustive pre-scan physical condition assessment and logging",
      "Comprehensive inventory tracking and item-level reconciliation"
    ],
    iconName: "Library",
    idealFor: "Academic Libraries, National Archives, and Research Institutes"
  },
  {
    id: "digital-collection-prep",
    category: "Digitization & Digital Collections",
    title: "Digital Collection Preparation & QC",
    shortDesc: "Comprehensive digital collection assembly, image quality verification, and structured package curation.",
    fullDesc: "Transform raw digital captures into fully cataloged, structured digital collections ready for immediate ingestion into institutional repository platforms (DSpace, Koha, Fedora, Omeka, etc.).",
    capabilities: [
      "Automated and manual page-by-page visual inspection",
      "Bit-depth, color profile, and resolution conformance checks",
      "BagIt packaging and checksum generation (MD5/SHA256) for integrity",
      "Hierarchical folder and collection sequencing",
      "Structured batch packaging for repository ingestion"
    ],
    iconName: "FolderArchive",
    idealFor: "Digital Repository Managers and Cultural Heritage Curators"
  },

  // 2. OCR and intelligent document processing
  {
    id: "ocr-conversion",
    category: "OCR & Intelligent Document Processing",
    title: "OCR Conversion & Text Extraction",
    shortDesc: "Advanced Optical Character Recognition delivering near-flawless machine-readable text from printed and complex typography.",
    fullDesc: "Utilizing advanced multi-engine OCR and trained lexical dictionaries to transcribe complex layouts, multi-column academic papers, polyglot texts, and weathered typefaces into editable, searchable formats.",
    capabilities: [
      "Multi-engine OCR verification for maximum lexical accuracy",
      "Full-text searchable PDF/A with hidden text layers",
      "ALTO XML and hOCR output with bounding box coordinate coordinates",
      "Support for multi-lingual and specialized scholarly scripts",
      "Formula, footnote, and tabular data extraction"
    ],
    iconName: "FileText",
    idealFor: "Publishers, Law Libraries, and Academic Research Centers"
  },
  {
    id: "intelligent-document-processing",
    category: "OCR & Intelligent Document Processing",
    title: "Intelligent Document Processing (IDP)",
    shortDesc: "AI-assisted classification, automated data capture, key-value extraction, and structured output generation.",
    fullDesc: "Streamline high-volume unstructured and semi-structured documents through automated layout analysis, contextual entity extraction, and automated cross-validation rules.",
    capabilities: [
      "Automated document classification and page separation",
      "Entity extraction (names, dates, reference numbers, citations)",
      "Form and table extraction into structured JSON, XML, or CSV",
      "Confidence-score-based human-in-the-loop review routing",
      "Continuous machine-learning model refinement and normalization"
    ],
    iconName: "Cpu",
    idealFor: "Organizations with Large Document or Content-Processing Requirements"
  },
  {
    id: "data-capture-validation",
    category: "OCR & Intelligent Document Processing",
    title: "Data Capture & Structured Validation",
    shortDesc: "High-volume data transcription, verification rulesets, and structured database population.",
    fullDesc: "Eliminate transcription errors with multi-pass data entry, algorithmic validation checks, database lookup verification, and automated completeness auditing.",
    capabilities: [
      "Double-key entry and algorithmic discrepancy comparison",
      "Rule-based field constraints (checksums, regex patterns, date logic)",
      "Master-data validation against client relational stores",
      "Customizable business-rule validation engines",
      "Structured output export to SQL, CSV, XML, and REST endpoints"
    ],
    iconName: "CheckCheck",
    idealFor: "Registrars, Government Records, and Financial Archives"
  },

  // 3. Metadata and information management
  {
    id: "metadata-extraction-enrichment",
    category: "Metadata & Information Management",
    title: "Metadata Extraction & Enrichment",
    shortDesc: "Automated and cataloger-assisted generation of descriptive, administrative, and structural metadata.",
    fullDesc: "We enrich raw collections with deep bibliographic metadata, linking records to standard authority files (LOC, VIAF, MeSH) to unlock searchability and discoverability.",
    capabilities: [
      "Descriptive, administrative, technical, and rights metadata creation",
      "Title, author, publication date, abstract, and keyword parsing",
      "Authority control mapping (Library of Congress, ISNI, VIAF)",
      "Subject heading assignment and semantic tagging",
      "Schema compliance with Dublin Core, MARC21, MODS, and METS"
    ],
    iconName: "Tags",
    idealFor: "Higher Education Libraries and Institutional Repositories"
  },
  {
    id: "metadata-normalization-remediation",
    category: "Metadata & Information Management",
    title: "Metadata Normalization & Remediation",
    shortDesc: "Cleansing, standardizing, deduplicating, and harmonizing legacy cataloging records across disparate repositories.",
    fullDesc: "Legacy databases often contain fragmented, misspelled, or incompatible records. We perform systematic remediation, character-encoding fixes, and standard schema alignment across entire databases.",
    capabilities: [
      "Legacy catalog remediation and encoding conversions (UTF-8)",
      "Deduplication and record reconciliation across disparate systems",
      "Controlled vocabulary alignment and taxonomy standardization",
      "Batch field validation and missing-attribute enrichment",
      "Automated schema mapping (e.g., MARC21 to Dublin Core / MODS)"
    ],
    iconName: "Sparkles",
    idealFor: "University Libraries Migrating or Consolidating Systems"
  },
  {
    id: "classification-indexing",
    category: "Metadata & Information Management",
    title: "Classification, Indexing & Taxonomy",
    shortDesc: "Hierarchical content structuring, faceted taxonomy design, and knowledge-organization systems.",
    fullDesc: "Develop intuitive knowledge architecture that enables researchers and users to find, browse, and filter large collections through well-defined ontologies and facet structures.",
    capabilities: [
      "Dewey Decimal, Library of Congress, and custom taxonomy implementation",
      "Faceted search categorization and ontology modeling",
      "Thesaurus maintenance and multilingual synset mapping",
      "Item-level thematic indexing and full-text index generation",
      "Information architecture consulting for digital discovery layers"
    ],
    iconName: "Network",
    idealFor: "Special Collections, Corporate Knowledge Bases, and Research Archives"
  },

  // 4. Content conversion and migration
  {
    id: "content-transformation",
    category: "Content Conversion & Migration",
    title: "File-Format Conversion & Transformation",
    shortDesc: "High-fidelity conversion across legacy and contemporary text, image, audio, and structured document formats.",
    fullDesc: "Preserve document fidelity while converting between proprietary and open preservation standards, including EPUB, XML (JATS, TEI), PDF/A, HTML5, and TIFF/JPEG2000.",
    capabilities: [
      "Print and PDF conversion into XML (JATS, BITS, TEI) and EPUB",
      "Proprietary word-processing format normalization",
      "High-throughput raster image conversion and color space re-encoding",
      "Complex layout preservation (equations, tabular arrays, footnotes)",
      "Strict compliance validation using Schematron and DTD verifiers"
    ],
    iconName: "RefreshCw",
    idealFor: "Scholarly Publishers, Theses Repositories, and Content Aggregators"
  },
  {
    id: "repository-migration",
    category: "Content Conversion & Migration",
    title: "Repository & Legacy Content Migration",
    shortDesc: "Secure, audited migration of institutional assets between digital repository platforms.",
    fullDesc: "Move extensive digital collections from legacy systems to modern cloud or on-premise digital asset management systems with zero data loss and complete relational fidelity.",
    capabilities: [
      "End-to-end migration between platforms (DSpace, Islandora, Koha, CONTENTdm, Fedora)",
      "Automated schema cross-walking and field mapping",
      "Digital bitstream extraction, verification, and re-linking",
      "Handle/DOI persistent identifier preservation and redirects",
      "Comprehensive pre- and post-migration integrity audits"
    ],
    iconName: "DatabaseZap",
    idealFor: "Universities Upgrading Integrated Library Systems (ILS) or Repositories"
  },

  // 5. Quality assurance
  {
    id: "quality-assurance-audit",
    category: "Quality Assurance",
    title: "Multi-Tier Quality Assurance & Auditing",
    shortDesc: "Methodical sampling, accuracy audits, and verification workflows engineered for zero-defect standards.",
    fullDesc: "Quality is embedded at every milestone. Our multi-stage review process couples automated validation scripts with trained human catalogers and domain specialists.",
    capabilities: [
      "Statistical AQL (Acceptable Quality Limit) sampling and 100% critical-path checks",
      "Character-level and field-level accuracy benchmarking (99.8%+ target)",
      "Automated structural and metadata syntax validation",
      "Automated checksum comparisons for content integrity",
      "Documented QA audit trails and transparent milestone reporting"
    ],
    iconName: "ShieldCheck",
    idealFor: "Mission-Critical Historical Collections and Institutional Records"
  },

  // 6. Technology and workflow support
  {
    id: "technology-workflow-automation",
    category: "Technology & Workflow Support",
    title: "Workflow Automation & Systems Integration",
    shortDesc: "Custom automation pipelines, API integration, data engineering, and ongoing technical support.",
    fullDesc: "Empower your internal team with bespoke microservices, automated batch-processing tools, and REST API bridges connecting scanning hardware to discovery systems.",
    capabilities: [
      "Scripted batch processing pipelines (Python, Node.js, CLI utilities)",
      "RESTful and OAI-PMH API connector development",
      "Custom ingestion tools tailored to your repository specifications",
      "Data engineering pipelines for high-velocity document parsing",
      "Ongoing SLA-backed technical maintenance and operational support"
    ],
    iconName: "Workflow",
    idealFor: "Institutions Seeking Scalable Technical Process Improvement"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "universities-higher-education",
    title: "Universities & Higher Education",
    subtitle: "Empowering institutional discovery, academic longevity, and global research accessibility.",
    description: "Universities manage vast collections of scholarly research, dissertations, historical archives, and faculty publications. We help universities transform fragmented physical materials into globally discoverable digital repositories.",
    keyChallenges: [
      "Decentralized departments holding siloed legacy publications",
      "Unstandardized thesis and dissertation metadata",
      "Fragile faculty research and rare university historical records",
      "Strict compliance requirements for open-access research repositories"
    ],
    howWeHelp: [
      "Comprehensive digitization of past dissertations, syllabi, and historical collections",
      "Enrichment and remediation of metadata to OAI-PMH and Dublin Core standards",
      "Integration with DSpace, EPrints, Bepress, and campus discovery layers",
      "Preservation of academic provenance and institutional citation integrity"
    ],
    deliverables: ["Archival TIFF & Searchable PDF/A", "Normalized Dublin Core & MARC21 Records", "Repository Ingestion Packages (SIP/AIP)"],
    iconName: "GraduationCap"
  },
  {
    id: "libraries-archives",
    title: "Academic Libraries & Special Archives",
    subtitle: "Preserving cultural heritage and rare manuscripts with archival-grade precision.",
    description: "Libraries and archives are the custodians of intellectual history. Our non-destructive handling protocols and FADGI-compliant digitizing standards ensure rare collections remain preserved for generations.",
    keyChallenges: [
      "Delicate bindings, brittle paper, and varied historical formats",
      "Complex multilingual typography and ancient scripts",
      "Strict environmental and physical safety controls",
      "Need for deep bibliographic cataloging and authority control"
    ],
    howWeHelp: [
      "Non-destructive scanning utilizing specialized conservation cradles",
      "High-precision multi-engine OCR for polyglot scholarly works",
      "Authority linking against Library of Congress, VIAF, and national databases",
      "Preservation-level digital master file generation with MD5/SHA checksums"
    ],
    deliverables: ["Preservation-Master TIFFs", "ALTO/METS XML Packages", "Standardized Authority Cataloging"],
    iconName: "BookOpen"
  },
  {
    id: "research-institutions",
    title: "Research Institutions & Centers of Excellence",
    subtitle: "Structuring scientific data, expedition records, and specialized technical reports.",
    description: "Research organizations produce complex technical datasets, expedition logs, and empirical publications requiring intricate data extraction and relational indexing.",
    keyChallenges: [
      "Mixed formats containing tabular data, mathematical notations, and technical charts",
      "High volume of unsearchable scanned reports and fieldwork logs",
      "Need for machine-readable datasets to power downstream computational analysis"
    ],
    howWeHelp: [
      "Intelligent extraction of tables, formulas, and observational figures into JSON/CSV",
      "Subject-matter classification aligned with specialized disciplinary thesauri",
      "Automated entity extraction linking authors, institutions, and grant identifiers",
      "Custom API pipeline development for internal knowledge portals"
    ],
    deliverables: ["Clean Structured Datasets (JSON/XML)", "JATS-compliant Scholarly XML", "Custom Ingestion APIs"],
    iconName: "Atom"
  },
  {
    id: "government-public-sector",
    title: "Government & Public-Sector Organizations",
    subtitle: "Modernizing civic records, legal gazettes, and public administrative archives.",
    description: "Public institutions must balance large-scale digital transformation with rigorous compliance, citizen transparency, and strict data governance.",
    keyChallenges: [
      "Massive backlogs of paper registries and legal gazettes",
      "Demanding privacy and non-disclosure standards",
      "Interoperability with municipal and national information architectures"
    ],
    howWeHelp: [
      "High-throughput batch digitization with tight chain-of-custody tracking",
      "Automated redaction support and privacy-compliant OCR extraction",
      "Format conversion to permanent archival standards (PDF/A-1b & PDF/A-2u)",
      "Strict on-premise or sovereign data handling workflows"
    ],
    deliverables: ["Certified Searchable PDF/A Gazettes", "Structured Registry Databases", "Comprehensive Chain-of-Custody Logs"],
    iconName: "Building2"
  },
  {
    id: "publishers-information-providers",
    title: "Publishers & Information Providers",
    subtitle: "Backlist digitization, journal backfile transformation, and multi-channel XML output.",
    description: "Publishers need to monetize legacy backlists and maintain continuous digital availability across modern e-reading and aggregator platforms.",
    keyChallenges: [
      "Out-of-print books locked in physical volumes without digital source files",
      "Need for multi-device reflowable e-book formats (EPUB3) with strict typography",
      "XML schema compliance required by commercial scientific aggregators"
    ],
    howWeHelp: [
      "High-speed, high-accuracy text extraction and layout replication",
      "Transformation to JATS XML, BITS XML, and clean EPUB3 standards",
      "Automated Schematron and DTD validation workflows",
      "Rich citation linking and DOI integration"
    ],
    deliverables: ["Validated JATS / BITS XML", "Reflowable & Fixed EPUB3", "Optimized Web Derivatives"],
    iconName: "BookMarked"
  },
  {
    id: "corporate-records",
    title: "Corporate Information & Records Departments",
    subtitle: "Scalable document management, contract digitization, and enterprise taxonomy.",
    description: "Enterprises with high document volumes require rapid digitization, structured data extraction, and workflow automation to reduce storage overhead and ensure audit readiness.",
    keyChallenges: [
      "High physical storage costs and slow physical retrieval times",
      "Unstructured contract repositories creating legal visibility risks",
      "Disconnected departmental filing conventions"
    ],
    howWeHelp: [
      "Bulk scanning and Intelligent Document Processing (IDP) of corporate agreements",
      "Automated key-value capture (effective dates, parties, liability terms)",
      "Unified enterprise taxonomy design and metadata tagging",
      "Seamless integration with enterprise DMS (SharePoint, OpenText, Alfresco)"
    ],
    deliverables: ["Classified Digital Document Stores", "Extracted Contract Metadata (JSON/SQL)", "Automated Workflow Connectors"],
    iconName: "Building"
  },
  {
    id: "large-scale-processing",
    title: "High-Volume Document & Content Processing",
    subtitle: "Scalable processing engines built for millions of pages and complex data streams.",
    description: "Designed specifically for organizations facing multi-million page backlogs or recurring high-volume ingest schedules requiring industrial-scale throughput.",
    keyChallenges: [
      "Tight delivery timelines on millions of historical or operational records",
      "Maintaining consistent quality without bottlenecking throughput",
      "Complex data routing and custom export requirements"
    ],
    howWeHelp: [
      "Distributed batch processing architecture",
      "Continuous parallel QA auditing to guarantee 99.8%+ accuracy at volume",
      "Dedicated account management and transparent weekly milestone tracking",
      "Tailored data pipelines delivering directly into client target environments"
    ],
    deliverables: ["Mass Ingestion Packages", "Weekly Metric & Velocity Dashboards", "Audited Delivery Batches"],
    iconName: "Layers"
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "nyu-stern",
    client: "New York University – Stern School of Business",
    clientType: "Global Higher Education & Leading Business School",
    location: "New York, USA",
    title: "Academic Digital Asset & Institutional Document Processing",
    context: "New York University's Leonard N. Stern School of Business manages premier academic collections, faculty working papers, historical curricular archives, and institutional documentation requiring meticulous digital stewardship.",
    servicesProvided: [
      "Digital Document Conversion",
      "High-Fidelity Text Extraction",
      "Metadata Structuring & Catalog Alignment",
      "Structured Digital Output Delivery"
    ],
    approach: "Collaborated to adhere strictly to institutional cataloging conventions, deploying precision document handling and tailored capture parameters to preserve academic provenance.",
    outcomesPlaceholder: "Detailed case study metrics, processing volumes, and qualitative milestones will be published after client-approved review.",
    status: "Verified Institutional Client"
  },
  {
    id: "usc-south-carolina",
    client: "University of South Carolina",
    clientType: "Major Comprehensive Research University",
    location: "Columbia, South Carolina, USA",
    title: "Special Collections Digitization & Digital Archive Structuring",
    context: "As a premier research university holding extensive historical archives, rare manuscripts, and research monographs, the University of South Carolina requires exacting digital preservation standards.",
    servicesProvided: [
      "Preservation-Grade Digitization Preparation",
      "Archival Metadata Mapping",
      "OCR Processing & Text Normalization",
      "Quality Assurance & Checksum Verification"
    ],
    approach: "Implemented specialized workflows conforming to strict archival preservation guidelines, ensuring master files maintain highest resolution fidelity alongside enriched descriptive metadata.",
    outcomesPlaceholder: "Detailed case study metrics, processing volumes, and qualitative milestones will be published after client-approved review.",
    status: "Verified Institutional Client"
  },
  {
    id: "university-of-peru",
    client: "University of Peru",
    clientType: "Historic Higher Education & Research Institution",
    location: "Lima, Peru",
    title: "Institutional Repository Digitization & Academic Information Management",
    context: "Holding historical scholarly collections and essential academic literature, the institution required structured document processing to ensure its holdings are digitized and systematically cataloged.",
    servicesProvided: [
      "Document Scanning & Digital Capture",
      "Multilingual Text Extraction & OCR",
      "Bibliographic Information Organization",
      "Repository-Ready Package Assembly"
    ],
    approach: "Engineered multilingual processing routines to capture nuanced typographic details, ensuring historical scholarship is transcribed accurately into discoverable digital assets.",
    outcomesPlaceholder: "Detailed case study metrics, processing volumes, and qualitative milestones will be published after client-approved review.",
    status: "Verified Institutional Client"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Assessment & Specification Alignment",
    desc: "We analyze sample physical documents or digital feeds, agree on capture parameters, metadata schemas, and define strict quality benchmarks."
  },
  {
    step: "02",
    title: "Secure Capture & Ingestion",
    desc: "High-resolution non-destructive scanning or digital file extraction following calibrated optical and environmental guidelines."
  },
  {
    step: "03",
    title: "OCR & Intelligent Processing",
    desc: "Multi-engine OCR text extraction, layout segmentation, and automated entity identification to unlock machine-readable value."
  },
  {
    step: "04",
    title: "Metadata Remediation & Enrichment",
    desc: "Mapping against Dublin Core, MARC21, or custom taxonomies, linking authority controls, and normalizing cataloging attributes."
  },
  {
    step: "05",
    title: "Multi-Tier Quality Assurance",
    desc: "Rigorous algorithmic validation paired with cataloger visual audits and statistical AQL sampling to guarantee exceptional accuracy."
  },
  {
    step: "06",
    title: "Packaging & Seamless Ingestion",
    desc: "BagIt integrity packaging with checksums, ready for direct ingestion into your institutional repository or digital asset management platform."
  }
];

export const CAPABILITY_AREAS = [
  {
    title: "Digital Collection Development",
    desc: "Transforming physical libraries and rare special archives into curated, high-resolution digital collections adhering to international archival benchmarks."
  },
  {
    title: "Library & Archive Digitization",
    desc: "Gentle, non-destructive optical handling for rare manuscripts, bound scholarly journals, dissertations, historical maps, and institutional records."
  },
  {
    title: "Metadata Engineering & Remediation",
    desc: "Catalog cleanup, taxonomy design, cross-walking legacy records into modern Dublin Core, MARC21, MODS, and METS standard schemas."
  },
  {
    title: "OCR & Full-Text Intelligence",
    desc: "Polyglot OCR, layout analysis, ALTO XML coordinate extraction, and searchable PDF/A conversion for multi-century collections."
  },
  {
    title: "Content Migration & Ingestion",
    desc: "End-to-end asset migration into DSpace, Koha, Fedora, Omeka, Islandora, or proprietary institutional digital management systems."
  },
  {
    title: "Workflow Automation & Integrations",
    desc: "Bespoke CLI tools, REST/OAI-PMH API connectors, and automated QA scripts tailored to eliminate processing bottlenecks."
  }
];
