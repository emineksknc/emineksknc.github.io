import React from 'react';

function App() {
  const resume = {
    name: "Emine Kıskanç",
    title: "Software Engineer | AI Engineer",
    subtitle: "Specialized in Applied AI & LLM Systems",
    location: "Turkey",
    email: "eminekskncc@gmail.com",
    github: "https://github.com/emineksknc",
    linkedin: "http://linkedin.com/in/eminekiskanc",
    summary: "AI Engineer with experience in building end-to-end AI systems, including LLM-based applications, Retrieval-Augmented Generation (RAG), and multimodal pipelines across text, image, and audio domains. Skilled in developing scalable, production-ready solutions using FastAPI, Docker, and modern MLOps practices. With a robust background in QA leadership, I bring a unique focus on reliability, system quality, and user-centric design to deliver high-impact AI products.",

    skills: {
      aiMl: [
        "LLMs (BERT, LLaMA, Falcon, Mistral, Zephyr, Seamless)",
        "RAG (LangChain, LlamaIndex, Haystack)",
        "Deep Learning (PyTorch, TensorFlow, Keras)",
        "Computer Vision (YOLO, Face Recognition, OpenCV, OCR)",
        "Generative Models (Stable Diffusion, BLIP, Paligemma, CLIP)",
        "Audio & Speech (Whisper, Wav2Vec, XTTS, Coqui, Seamless)"
      ],
      mLOps: [
        "FastAPI", "Docker", "Celery", "Redis",
        "Grafana", "Prometheus", "Jenkins (CI/CD)",
        "MLflow", "Linux", "CUDA Optimization"
      ],
      databases: ["Weaviate", "Pinecone", "Milvus", "Qdrant", "MongoDB", "SQLite"],
      qaTesting: ["Selenium (BDD)", "JMeter", "Postman", "E2E Testing", "Jira"]
    },

    experience: [
      {
        role: "R&D Engineer",
        company: "Mobildev",
        period: "Aug 2022 - Sep 2025",
        bullets: [
          "Designed and deployed end-to-end AI systems for real-world business use cases, covering data processing, model development, and production deployment.",
          "Built Retrieval-Augmented Generation (RAG) and question-answering systems using LLMs and vector databases.",
          "Developed and optimized multimodal AI pipelines (text, image, audio), including OCR, image captioning, and speech-to-text systems.",
          "Deployed AI services as RESTful APIs using FastAPI and Docker, enabling scalable and production-ready solutions."
        ]
      },
      {
        role: "QA Lead",
        company: "TechOps Center",
        period: "Jan 2022 – Jun 2022",
        bullets: [
          "Led a QA team by planning, coordinating, and monitoring testing activities across multiple projects.",
          "Acted as the primary point of contact for clients, managing communication, expectations, and delivery quality.",
          "Designed and executed test strategies, test plans, and quality metrics aligned with business requirements."
        ]
      },
      {
        role: "QA Engineer",
        company: "TechOps Center",
        period: "Aug 2020 - Jan 2022",
        bullets: [
          "Designed and executed functional, regression, and end-to-end (E2E) test scenarios.",
          "Automated test cases using Selenium (Java) with BDD approach and performed API/Performance testing via Postman and JMeter."
        ]
      }
    ],

    projects: [
      {
        title: "Generative AI Knowledge Base & Q&A Analytics (2025)",
        tag: "TUBITAK Supported",
        description: "Designed and implemented a knowledge base with vector database integration for efficient information retrieval. Utilized prompt engineering and LLMs for semantic search, content understanding, and text analysis. Developed pipelines to ingest multimodal data sources using OCR, speech-to-text, and computer vision."
      },
      {
        title: "Audience Analysis & Intelligent Marketing Message Production (2023)",
        tag: "TUBITAK Supported",
        description: "Worked on NLP modules focusing on text analysis, tone of voice classification for SMS messages, and Named Entity Recognition (NER) modules, managing full training, optimization, and system integration."
      },
      {
        title: "Multimedia Personal Data Categorization Solution (2022)",
        tag: "TUBITAK Supported",
        description: "Developed and integrated biometric recognition modules (signature, face, and fingerprint) including model training, optimization, and secure deployment."
      }
    ],

    publications: [
      "Classifying the Tone of Voice of Digital Marketing Text Messages Using Machine Learning Methods (Research Paper)",
      "Document Layout Analysis Methods for Information Extraction - Current Issues and New Generation Technologies in Computer Science (Book Chapter, Page 149-161)"
    ],

    education: [
      {
        degree: "Master's Studies in Computer Engineering",
        school: "Harran University",
        period: "2019 - 2022"
      },
      {
        degree: "BSc in Computer Engineering",
        school: "Çukurova University",
        period: "2014 - 2019"
      }
    ]
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>{resume.name}</h1>
        <p style={styles.title}>{resume.title}</p>
        <p style={styles.subtitle}>{resume.subtitle}</p>
        <p style={styles.summary}>{resume.summary}</p>

        <div style={styles.contactLinks}>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" style={styles.linkButton}>LinkedIn</a>
          <a href={resume.github} target="_blank" rel="noreferrer" style={styles.linkButton}>GitHub</a>
          <a href={`mailto:${resume.email}`} style={styles.emailText}>{resume.email}</a>
          <span style={styles.locationText}>📍 {resume.location}</span>
        </div>
      </header>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <div style={styles.skillsContainer}>
          <div style={styles.skillCategory}>
            <h4>AI & Machine Learning</h4>
            <div style={styles.badgeGroup}>
              {resume.skills.aiMl.map((s, i) => <span key={i} style={styles.badge}>{s}</span>)}
            </div>
          </div>
          <div style={styles.skillCategory}>
            <h4>Infrastructure & MLOps</h4>
            <div style={styles.badgeGroup}>
              {resume.skills.mLOps.map((s, i) => <span key={i} style={styles.badge}>{s}</span>)}
            </div>
          </div>
          <div style={styles.skillCategory}>
            <h4>Vector & Relational Databases</h4>
            <div style={styles.badgeGroup}>
              {resume.skills.databases.map((s, i) => <span key={i} style={styles.badge}>{s}</span>)}
            </div>
          </div>
          <div style={styles.skillCategory}>
            <h4>Testing & Quality Assurance</h4>
            <div style={styles.badgeGroup}>
              {resume.skills.qaTesting.map((s, i) => <span key={i} style={styles.badge}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Experience</h2>
        {resume.experience.map((exp, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3>{exp.role} <span style={styles.company}>@ {exp.company}</span></h3>
              <span style={styles.date}>{exp.period}</span>
            </div>
            <ul style={styles.bulletList}>
              {exp.bullets.map((b, i) => <li key={i} style={styles.bulletItem}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Research & R&D Projects</h2>
        <div style={styles.projectsGrid}>
          {resume.projects.map((proj, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.cardHeader}>
                <h3 style={styles.projectTitle}>{proj.title}</h3>
                <span style={styles.projectTag}>{proj.tag}</span>
              </div>
              <p style={styles.projectDesc}>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Education */}
      <div style={styles.twoColumnGrid}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Publications</h2>
          <ul style={styles.bulletList}>
            {resume.publications.map((pub, i) => <li key={i} style={styles.bulletItem}><span style={styles.pubText}>{pub}</span></li>)}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Education</h2>
          {resume.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <h4 style={{ margin: '0 0 0.25rem 0', color: '#f1f5f9' }}>{edu.degree}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>{edu.school} ({edu.period})</p>
            </div>
          ))}
        </section>
      </div>

      <footer style={styles.footer}>
        <p>© 2026 {resume.name} — Built with React & Vite</p>
      </footer>
    </div>
  );
}

// Premium Dark Theme UI Styles
const styles = {
  container: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    backgroundColor: "#0b0f19",
    color: "#e2e8f0",
    minHeight: "100vh",
    padding: "3rem 2rem",
    maxWidth: "960px",
    margin: "0 auto",
    lineHeight: "1.6"
  },
  header: {
    textAlign: "left",
    marginBottom: "4rem"
  },
  name: {
    fontSize: "3rem",
    margin: "0 0 0.5rem 0",
    color: "#f8fafc",
    fontWeight: "800"
  },
  title: {
    fontSize: "1.4rem",
    color: "#38bdf8",
    margin: "0",
    fontWeight: "600"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#94a3b8",
    margin: "0.25rem 0 1.5rem 0"
  },
  summary: {
    color: "#cbd5e1",
    fontSize: "1.05rem",
    maxWidth: "800px",
    marginBottom: "2rem"
  },
  contactLinks: {
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",
    flexWrap: "wrap"
  },
  linkButton: {
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
    color: "#f1f5f9",
    padding: "0.4rem 1.2rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  emailText: {
    color: "#38bdf8",
    textDecoration: "none",
    fontSize: "0.95rem"
  },
  locationText: {
    color: "#64748b",
    fontSize: "0.95rem"
  },
  section: {
    marginBottom: "3.5rem"
  },
  sectionTitle: {
    fontSize: "1.6rem",
    color: "#f1f5f9",
    borderBottom: "2px solid #1e293b",
    paddingBottom: "0.5rem",
    marginBottom: "1.5rem",
    fontWeight: "700"
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem"
  },
  skillCategory: {
    backgroundColor: "#111827",
    padding: "1.25rem",
    borderRadius: "8px",
    border: "1px solid #1e293b"
  },
  badgeGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.75rem"
  },
  badge: {
    backgroundColor: "#1f2937",
    color: "#94a3b8",
    padding: "0.25rem 0.6rem",
    borderRadius: "4px",
    fontSize: "0.8rem",
    border: "1px solid #374151"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1e293b",
    padding: "1.5rem",
    borderRadius: "8px",
    marginBottom: "1.25rem"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem"
  },
  company: {
    color: "#38bdf8",
    fontSize: "1.1rem",
    fontWeight: "500"
  },
  date: {
    color: "#64748b",
    fontSize: "0.9rem"
  },
  bulletList: {
    margin: "0",
    paddingLeft: "1.2rem",
    color: "#cbd5e1"
  },
  bulletItem: {
    marginBottom: "0.5rem",
    fontSize: "0.95rem"
  },
  projectsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem"
  },
  projectCard: {
    backgroundColor: "#111827",
    borderLeft: "4px solid #38bdf8",
    padding: "1.5rem",
    borderRadius: "0 8px 8px 0",
    borderTop: "1px solid #1e293b",
    borderRight: "1px solid #1e293b",
    borderBottom: "1px solid #1e293b"
  },
  projectTitle: {
    margin: "0",
    fontSize: "1.2rem",
    color: "#f1f5f9"
  },
  projectTag: {
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    color: "#38bdf8",
    padding: "0.25rem 0.75rem",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600"
  },
  projectDesc: {
    margin: "0.75rem 0 0 0",
    color: "#94a3b8",
    fontSize: "0.95rem"
  },
  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem"
  },
  pubText: {
    color: "#cbd5e1",
    fontStyle: "italic"
  },
  footer: {
    textAlign: "center",
    marginTop: "5rem",
    color: "#475569",
    fontSize: "0.85rem",
    borderTop: "1px solid #1e293b",
    paddingTop: "1.5rem"
  }
}; // Objeyi burada düzgünce kapattık.

export default App;