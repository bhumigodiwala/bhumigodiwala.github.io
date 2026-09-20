import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([612, 792]); // Standard Letter size
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  const { width, height } = page.getSize();
  let y = height - 42;
  const leftMargin = 45;
  const rightMargin = width - 45;
  const contentWidth = rightMargin - leftMargin;

  // Header
  page.drawText('Bhumi Godiwala', {
    x: leftMargin,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.1, 0.12, 0.18),
  });

  y -= 14;
  page.drawText('bgodiwal@asu.edu  |  +1 984 810 9668  |  linkedin.com/in/bhumigodiwala  |  bhumigodiwala.github.io', {
    x: leftMargin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.35, 0.4, 0.48),
  });

  y -= 8;
  page.drawLine({
    start: { x: leftMargin, y },
    end: { x: rightMargin, y },
    thickness: 1,
    color: rgb(0.78, 0.82, 0.88),
  });
  y -= 14;

  const drawSectionHeading = (title: string) => {
    y -= 4;
    page.drawText(title.toUpperCase(), {
      x: leftMargin,
      y,
      size: 10,
      font: fontBold,
      color: rgb(0.12, 0.22, 0.38),
    });
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.6,
      color: rgb(0.78, 0.82, 0.88),
    });
    y -= 11;
  };

  // EDUCATION
  drawSectionHeading('Education');

  const eduItems = [
    {
      school: 'Arizona State University',
      loc: 'Tempe, AZ',
      dates: 'Jan 2026 – Present',
      degree: 'PhD in Computer Science (GPA 4.0/4.0)',
    },
    {
      school: 'University of Southern California',
      loc: 'Los Angeles, CA',
      dates: 'August 2021 – May 2023',
      degree: 'Master of Science in Computer Engineering — Machine Learning & Data Science specialization (GPA 3.8/4.0)',
    },
    {
      school: 'D.J. Sanghvi College of Engineering (Univ. of Mumbai)',
      loc: 'Mumbai, India',
      dates: 'Jul 2016 – Oct 2020',
      degree: 'Bachelor of Engineering in Electronics & Telecommunications Engineering (CGPA 9.19/10)',
    },
  ];

  for (const edu of eduItems) {
    page.drawText(`${edu.school} | ${edu.loc}`, {
      x: leftMargin,
      y,
      size: 8.8,
      font: fontBold,
      color: rgb(0.15, 0.18, 0.22),
    });
    const dateWidth = fontRegular.widthOfTextAtSize(edu.dates, 8.5);
    page.drawText(edu.dates, {
      x: rightMargin - dateWidth,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.35, 0.4, 0.48),
    });
    y -= 10;
    page.drawText(edu.degree, {
      x: leftMargin,
      y,
      size: 8.2,
      font: fontOblique,
      color: rgb(0.25, 0.3, 0.38),
    });
    y -= 11;
  }

  // PROFESSIONAL EXPERIENCE
  drawSectionHeading('Professional Experience');

  const experiences = [
    {
      title: 'Graduate Research Data Scientist',
      org: 'ASU Decision Theater Network',
      loc: 'Tempe, AZ',
      dates: 'Apr 2026 – Present',
      bullets: [
        'Architect end-to-end deep learning deployment and inference pipelines across multiple research domains, including a Valley Fever disease detection model, taking prototypes to production-ready model serving.',
        'Build an NLP-based skill-extraction system mapping university course offerings to job market requirements, surfacing actionable skill gaps at scale.',
        'Lead clustering analysis on Commonwealth Fund health indicators for Maricopa County, segmenting regional health-outcome patterns for a county-level health-impact research initiative.',
        'Co-authoring a research paper on LLM and RAG-based approaches combined with topic modeling for large-scale text analysis.',
      ],
    },
    {
      title: 'Senior Data Scientist',
      org: 'Infosys Ltd',
      loc: 'Houston, TX',
      dates: 'Jan 2025 – Nov 2025',
      bullets: [
        'Engineered an ML anomaly-detection system boosting utility theft detection accuracy 25%, improving revenue protection and lead conversion for a regulated energy utility serving 1M+ customers.',
        'Redesigned Budget Billing analytics to surface behavioral drivers, increasing enrollment 15% and retention 10%; deployed findings as policy with engineering and product teams.',
      ],
    },
    {
      title: 'Sr. AI/ML Engineer',
      org: 'MemoryCare AI (now Scienza Health)',
      loc: 'Newport Beach, CA',
      dates: 'May 2024 – Jan 2025',
      bullets: [
        'Built LLM + RAG pipelines (Python, TensorFlow) improving retrieval accuracy and powering HIPAA-compliant patient assistance.',
        'Created an avatar-based speech and behavior tracking system (PyTorch, OpenCV) achieving 90% detection accuracy for early Alzheimer’s/TBI intervention.',
        'Designed an Azure-based cognitive assessment platform, cutting test time 35% while scaling securely across clinics.',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      org: 'USC Information Sciences Institute',
      loc: 'Marina Del Rey, CA',
      dates: 'Jul 2023 – Jul 2024',
      bullets: [
        'Developed Adaptive Mixture Quantization (AMQ) for Cloud/Edge AI, improving accuracy 5%, reducing model size 15%, and boosting comms efficiency 30%.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      org: 'TetraMem Inc',
      loc: 'Fremont, CA',
      dates: 'May 2022 – May 2023',
      bullets: [
        'Optimized Human Pose Estimation and Visual Wake Words models for edge inference chips, achieving 93% accuracy with reduced memory and latency.',
        'Applied Quantization Aware Training and post-training quantization, preserving accuracy while shrinking model parameters.',
      ],
    },
    {
      title: 'Software Engineer',
      org: 'Tata Consultancy Services',
      loc: 'Mumbai, India',
      dates: 'October 2020 – August 2021',
      bullets: [
        'Developed and deployed full-stack Java/HTML/CSS/JS modules for university portals serving 10,000+ students; automated metadata mapping and reporting, cutting manual processing time 30%.',
      ],
    },
  ];

  const wrapText = (text: string, maxWidth: number, font: any, size: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  for (const exp of experiences) {
    page.drawText(`${exp.org} | ${exp.loc}`, {
      x: leftMargin,
      y,
      size: 8.8,
      font: fontBold,
      color: rgb(0.15, 0.18, 0.22),
    });
    const dateWidth = fontRegular.widthOfTextAtSize(exp.dates, 8.2);
    page.drawText(exp.dates, {
      x: rightMargin - dateWidth,
      y,
      size: 8.2,
      font: fontRegular,
      color: rgb(0.35, 0.4, 0.48),
    });
    y -= 9.5;

    page.drawText(exp.title, {
      x: leftMargin,
      y,
      size: 8.2,
      font: fontOblique,
      color: rgb(0.25, 0.35, 0.48),
    });
    y -= 9.5;

    for (const bullet of exp.bullets) {
      const lines = wrapText(bullet, contentWidth - 14, fontRegular, 7.8);
      lines.forEach((line, lineIdx) => {
        if (lineIdx === 0) {
          page.drawText('•', {
            x: leftMargin + 2,
            y,
            size: 8,
            font: fontBold,
            color: rgb(0.3, 0.35, 0.45),
          });
        }
        page.drawText(line, {
          x: leftMargin + 12,
          y,
          size: 7.8,
          font: fontRegular,
          color: rgb(0.18, 0.2, 0.25),
        });
        y -= 9;
      });
    }
    y -= 2.5;
  }

  // TECHNICAL SKILLS
  drawSectionHeading('Technical Skills');
  const skills = [
    { cat: 'Languages', val: 'Python, Java, C++, SQL, Git, Bash' },
    { cat: 'ML/DL', val: 'PyTorch, TensorFlow, Scikit-Learn, Keras, HuggingFace Transformers, ONNX, OpenCV, QAT' },
    { cat: 'GenAI/LLM', val: 'RAG Pipelines, LLM Fine-tuning, Prompt Engineering, GPT-3/4, Embedding Models, Topic Modeling' },
    { cat: 'Cloud/MLOps', val: 'AWS (S3, Lambda, EC2), Oracle Cloud, Azure Cognitive Services, Spark, Hadoop, Docker' },
  ];

  for (const sk of skills) {
    page.drawText(`${sk.cat}: `, {
      x: leftMargin,
      y,
      size: 7.8,
      font: fontBold,
      color: rgb(0.15, 0.18, 0.22),
    });
    const prefixWidth = fontBold.widthOfTextAtSize(`${sk.cat}: `, 7.8);
    page.drawText(sk.val, {
      x: leftMargin + prefixWidth,
      y,
      size: 7.8,
      font: fontRegular,
      color: rgb(0.2, 0.25, 0.3),
    });
    y -= 9.5;
  }

  // ACADEMIC PROJECTS
  drawSectionHeading('Academic Projects');
  const projects = [
    {
      title: 'LLM-Powered Email Generation System',
      desc: 'Built an end-to-end LLM email automation system with a FastAPI + React frontend, deployed on AWS for scalable, serverless, real-time generation.',
      tech: 'Python, FastAPI, React, Docker, AWS (Lambda, EC2, API Gateway)',
    },
    {
      title: 'ASL Gesture Prediction using ST-GAN for Shadow Removal',
      desc: 'Engineered a GAN-CNN fusion model to eliminate shadow noise and improve ASL classification accuracy, achieving 92.9% test accuracy with full MLflow experiment tracking.',
      tech: 'Python, PyTorch, TensorFlow, GAN, CNN, MLflow',
    },
  ];

  for (const proj of projects) {
    page.drawText(proj.title, {
      x: leftMargin,
      y,
      size: 8.2,
      font: fontBold,
      color: rgb(0.15, 0.18, 0.22),
    });
    y -= 9;
    const lines = wrapText(proj.desc, contentWidth - 14, fontRegular, 7.8);
    for (const line of lines) {
      page.drawText(line, {
        x: leftMargin + 10,
        y,
        size: 7.8,
        font: fontRegular,
        color: rgb(0.18, 0.2, 0.25),
      });
      y -= 9;
    }
    page.drawText(`Technologies: ${proj.tech}`, {
      x: leftMargin + 10,
      y,
      size: 7.5,
      font: fontOblique,
      color: rgb(0.35, 0.4, 0.5),
    });
    y -= 9.5;
  }

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(process.cwd(), 'public', 'Bhumi_Godiwala_CV.pdf'), pdfBytes);
  console.log('Successfully generated public/Bhumi_Godiwala_CV.pdf');
}

generateCV().catch(console.error);
