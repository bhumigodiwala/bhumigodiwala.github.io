import React from 'react';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="border-t border-slate-200/90 dark:border-white/[0.08] scroll-mt-20 relative">
      <span id="skills" className="sr-only" />
      <span id="tools" className="sr-only" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
            04 — Stack
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
            Tools
          </h2>
          <p className="mt-1 font-display text-xl text-[var(--brass)]">
            What I reach for.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Languages */}
          <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-5 backdrop-blur-xl shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--brass)] font-semibold block mb-3">
              Languages
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Python, Java, C++, SQL, Bash, Git
            </p>
          </div>

          {/* Machine Learning */}
          <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-5 backdrop-blur-xl shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--teal)] font-semibold block mb-3">
              Machine learning
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              PyTorch, TensorFlow, Keras, scikit-learn, HuggingFace Transformers, ONNX, OpenCV, quantization-aware training
            </p>
          </div>

          {/* Generative AI */}
          <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-5 backdrop-blur-xl shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold block mb-3">
              Generative AI
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              RAG pipelines, LLM fine-tuning, prompt engineering, GPT-3 and GPT-4, embedding models, topic modelling
            </p>
          </div>

          {/* Cloud & MLOps */}
          <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-5 backdrop-blur-xl shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold block mb-3">
              Cloud and MLOps
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              AWS (S3, Lambda, EC2), Azure Cognitive Services, Oracle Cloud, Docker, Spark, Hadoop, MLflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
