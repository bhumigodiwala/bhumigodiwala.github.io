import React from 'react';
import { X, Download, FileText, ExternalLink, Check, GraduationCap, Briefcase, Wrench, FolderGit2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#101726] shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] px-6 py-4 bg-slate-50 dark:bg-[#0c121e]">
          <div className="flex items-center gap-2.5">
            <FileText className="h-5 w-5 text-[var(--brass)]" />
            <div>
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                Curriculum Vitae — Bhumi Godiwala
              </h3>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Academic &amp; Industry CV (PDF)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Bhumi_Godiwala_CV.pdf"
              download="Bhumi_Godiwala_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--brass)] px-3.5 py-1.5 font-mono text-xs font-semibold text-white dark:text-[#0c121e] hover:bg-[var(--brass-hover)] transition shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document view */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 font-body text-slate-800 dark:text-slate-200">
          {/* Document Header */}
          <div className="border-b border-slate-200 dark:border-white/[0.08] pb-5">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Bhumi Godiwala
            </h1>
            <p className="mt-1 font-mono text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>bgodiwal@asu.edu</span>
              <span>•</span>
              <span>+1 984 810 9668</span>
              <span>•</span>
              <span>linkedin.com/in/bhumigodiwala</span>
              <span>•</span>
              <span>bhumigodiwala.github.io</span>
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/[0.08] pb-1.5 mb-3 font-mono text-xs font-bold uppercase tracking-wider text-[var(--teal)]">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>
            <div className="space-y-3 font-body text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://www.asu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit Arizona State University website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://asu.edu&size=128"
                        alt="ASU symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>Arizona State University</span>
                    <span className="font-normal text-slate-500">| Tempe, AZ</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">Jan 2026 – Present</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300">PhD in Computer Science (GPA 4.0/4.0)</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://www.usc.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit University of Southern California website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://usc.edu&size=128"
                        alt="USC symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>University of Southern California</span>
                    <span className="font-normal text-slate-500">| Los Angeles, CA</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">August 2021 – May 2023</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300">
                  Master of Science in Computer Engineering — Machine Learning &amp; Data Science (GPA 3.8/4.0)
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <a
                      href="https://djsce.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                      title="Visit D.J. Sanghvi College of Engineering website"
                    >
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0" title="University of Mumbai official symbol">
                        <img
                          src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mu.ac.in&size=128"
                          alt="University of Mumbai symbol"
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <span>D.J. Sanghvi College of Engineering</span>
                    </a>
                    <a
                      href="https://mu.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--brass)] hover:underline inline-flex items-center gap-0.5"
                      title="Affiliated with University of Mumbai (symbol shown)"
                    >
                      <span>(Univ. of Mumbai)</span>
                    </a>
                    <span className="font-normal text-slate-500">| Mumbai, India</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">Jul 2016 – Oct 2020</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300">
                  Bachelor of Engineering in Electronics &amp; Telecommunications (CGPA 9.19/10)
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/[0.08] pb-1.5 mb-3 font-mono text-xs font-bold uppercase tracking-wider text-[var(--brass)]">
              <Briefcase className="h-4 w-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://dt.asu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit ASU Decision Theater Network website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dt.asu.edu&size=128"
                        alt="ASU Decision Theater symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>ASU Decision Theater Network</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Tempe, AZ</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">Apr 2026 – Present</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Graduate Research Data Scientist</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Architect end-to-end deep learning deployment and inference pipelines across multiple research domains, including a Valley Fever disease detection model.</li>
                  <li>Build an NLP-based skill-extraction system mapping university course offerings to job market requirements, surfacing actionable skill gaps.</li>
                  <li>Lead clustering analysis on Commonwealth Fund health indicators for Maricopa County.</li>
                  <li>Co-authoring a research paper on LLM and RAG-based approaches combined with topic modeling.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://www.infosys.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit Infosys website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.infosys.com&size=128"
                        alt="Infosys symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>Infosys Ltd</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Houston, TX (11 mos)</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">Jan 2025 – Nov 2025</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Senior Data Scientist</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Engineered an ML anomaly-detection system boosting utility theft detection accuracy 25%, improving revenue protection for 1M+ customers.</li>
                  <li>Redesigned Budget Billing analytics to surface behavioral drivers, increasing enrollment 15% and retention 10%.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://scienzahealth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit Scienza Health (formerly MemoryCare AI) website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://scienzahealth.com&size=128"
                        alt="Scienza Health symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>MemoryCare AI (now Scienza Health)</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Newport Beach, CA (~8 mos)</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">May 2024 – Jan 2025</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Sr. AI/ML Engineer</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Built LLM + RAG pipelines (Python, TensorFlow) improving retrieval accuracy and powering HIPAA-compliant patient assistance.</li>
                  <li>Created avatar-based speech and behavior tracking (PyTorch, OpenCV) achieving 90% detection accuracy for early Alzheimer's/TBI.</li>
                  <li>Designed Azure-based cognitive assessment platform, cutting test time 35%.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://www.isi.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit USC Information Sciences Institute website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.isi.edu&size=128"
                        alt="USC ISI symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>USC Information Sciences Institute</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Marina Del Rey, CA (1 yr)</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">Jul 2023 – Jul 2024</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Machine Learning Engineer</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Developed Adaptive Mixture Quantization (AMQ) for Cloud/Edge AI, improving accuracy 5%, reducing model size 15%, and boosting comms efficiency 30%.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://tetramem.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit TetraMem website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tetramem.com&size=128"
                        alt="TetraMem symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>TetraMem Inc</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Fremont, CA (1 yr)</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">May 2022 – May 2023</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Machine Learning Intern</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Optimized Human Pose Estimation &amp; Visual Wake Words for edge chips (93% accuracy with reduced memory and latency).</li>
                  <li>Applied Quantization Aware Training (QAT) and post-training quantization.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                  <a
                    href="https://www.tcs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brass)] hover:underline inline-flex items-center gap-1.5 transition"
                    title="Visit Tata Consultancy Services website"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-200 dark:border-white/10 bg-white p-0.5 overflow-hidden shrink-0">
                      <img
                        src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.tcs.com&size=128"
                        alt="TCS symbol"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>Tata Consultancy Services</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                    <span className="font-normal text-slate-500">| Mumbai, India (8 mos)</span>
                  </a>
                  <span className="font-mono text-xs text-slate-500">October 2020 – May 2021</span>
                </div>
                <p className="italic text-slate-700 dark:text-slate-300 font-medium">Software Engineer</p>
                <ul className="mt-1.5 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Developed and deployed full-stack Java/HTML/CSS/JS modules for university portals serving 10,000+ students.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/[0.08] pb-1.5 mb-3 font-mono text-xs font-bold uppercase tracking-wider text-sky-500">
              <Wrench className="h-4 w-4" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-slate-50 dark:bg-white/[0.03] p-3 border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Languages:</span>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">Python, Java, C++, SQL, Git, Bash</p>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-white/[0.03] p-3 border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-semibold text-slate-900 dark:text-slate-100">ML/DL:</span>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">PyTorch, TensorFlow, Scikit-Learn, Keras, HuggingFace Transformers, ONNX, OpenCV, QAT</p>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-white/[0.03] p-3 border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-semibold text-slate-900 dark:text-slate-100">GenAI/LLM:</span>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">RAG Pipelines, LLM Fine-tuning, Prompt Engineering, GPT-3/4, Embedding Models, Topic Modeling</p>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-white/[0.03] p-3 border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Cloud/MLOps:</span>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">AWS (S3, Lambda, EC2), Oracle Cloud, Azure Cognitive Services, Spark, Hadoop, Docker</p>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/[0.08] pb-1.5 mb-3 font-mono text-xs font-bold uppercase tracking-wider text-purple-500">
              <FolderGit2 className="h-4 w-4" />
              <span>Academic Projects</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">LLM-Powered Email Generation System</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Built an end-to-end LLM email automation system with a FastAPI + React frontend, deployed on AWS for scalable, serverless, real-time generation.
                </p>
                <p className="font-mono text-[11px] text-slate-500 mt-0.5">Tech: Python, FastAPI, React, Docker, AWS (Lambda, EC2, API Gateway)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">ASL Gesture Prediction using ST-GAN for Shadow Removal</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Engineered a GAN-CNN fusion model to eliminate shadow noise and improve ASL classification accuracy, achieving 92.9% test accuracy with full MLflow experiment tracking.
                </p>
                <p className="font-mono text-[11px] text-slate-500 mt-0.5">Tech: Python, PyTorch, TensorFlow, GAN, CNN, MLflow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/[0.08] px-6 py-4 bg-slate-50 dark:bg-[#0c121e]">
          <span className="font-mono text-xs text-slate-500">
            Official PDF Document Generated · 1 Page Format
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 dark:border-white/[0.12] px-4 py-2 font-mono text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05]"
            >
              Close
            </button>
            <a
              href="/Bhumi_Godiwala_CV.pdf"
              download="Bhumi_Godiwala_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--brass)] px-4 py-2 font-mono text-xs font-semibold text-white dark:text-[#0c121e] hover:bg-[var(--brass-hover)] shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
