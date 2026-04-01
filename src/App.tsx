import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ExternalLink, 
  Layout, 
  Monitor, 
  Smartphone, 
  Zap, 
  Cpu, 
  ChevronRight,
  Menu,
  X,
  Linkedin,
  Mail,
  Dribbble
} from "lucide-react";
import { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "./constants";
import wizlahHomeImage from "./assets/wizlah-home.png";
import wizmarketplaceHomeImage from "./assets/wizmarketplace-home.png";
import sgBusTimesHomeImage from "./assets/sg-bus-times-home.png";
import kelterHomeImage from "./assets/kelter-home.png";
import img1Image from "./assets/img1.png";
import auraHomeImage from "./assets/aura-home.png";
import bemaHomeImage from "./assets/bema-home.png";
import bvHomeImage from "./assets/bv-home.png";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif italic tracking-tight"
        >
          Senior Designer<span className="text-accent">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium text-muted">
          {["Work", "About", "Process", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 flex flex-col gap-4 md:hidden"
          >
            {["Work", "About", "Process", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif italic">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { hero } = PORTFOLIO_DATA;
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-accent">{hero.subtitle}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
            Architecting <br />
            <span className="text-gradient">Digital Intent.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                {hero.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-bg rounded-full text-sm font-semibold hover:bg-accent transition-all flex items-center gap-2 group">
                  View Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-all">
                  Get in Touch
                </button>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl md:max-w-xs ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg text-accent">
                  <Cpu size={20} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest">AI & Vibe Coding</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {hero.vibeCoding}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-muted vertical-text">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

interface ProjectProps {
  project: {
    id: string;
    title: string;
    role: string;
    challenge: string;
    solution: string;
    impact: string;
    metrics: string[];
    details?: { title: string; content: string }[];
  };
  index: number;
  onSelect: (project: any) => void;
  key?: string;
}

const ProjectCard = ({ project, index, onSelect }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 glass cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={
            project.id === "wizlah"
              ? wizlahHomeImage
              : project.id === "wizmarketplace"
                ? wizmarketplaceHomeImage
                : project.id === "bioskin"
                  ? sgBusTimesHomeImage
              : `https://picsum.photos/seed/${project.id}/1200/800`
          }
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={
            project.id === "wizlah"
              ? { filter: "contrast(1.08) saturate(1.12) brightness(1.02)" }
              : undefined
          }
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-2">
            {project.metrics.map((m: string) => (
              <span key={m} className="px-3 py-1 glass rounded-full text-[10px] font-mono uppercase tracking-wider">{m}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">{project.role}</div>
          <h3 className="text-3xl font-serif italic mb-4">{project.title}</h3>
          <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
            {project.challenge}
          </p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onSelect(project)}
              className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:text-accent transition-colors"
            >
              Read Case Study <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <div className="text-6xl font-serif italic text-white/5 select-none">0{index + 1}</div>
      </div>
    </motion.div>
  );
};

const ProjectDetail = ({ project, onBack }: { project: any, onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold mb-12 hover:text-accent transition-colors"
        >
          <X size={16} /> Close Case Study
        </button>

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{project.role}</div>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-12">
              {project.metrics.map((m: string) => (
                <div key={m} className="px-6 py-3 glass rounded-2xl">
                  <div className="text-xl font-serif italic mb-1">{m.split(' ')[0]}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted">{m.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">The Challenge</h3>
              <p className="text-lg text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden mb-20 glass">
          <img 
            src={project.heroImage || `https://picsum.photos/seed/${project.id}-hero/1920/1080`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {project.details?.map((detail: any, i: number) => (
            <div key={i} className="space-y-4">
              <div className="text-xs font-mono text-accent uppercase tracking-widest">0{i + 1} // {detail.title}</div>
              <p className="text-muted leading-relaxed">
                {detail.content}
              </p>
            </div>
          ))}
        </div>

        <div className="glass p-12 rounded-3xl mb-20">
          <h3 className="text-3xl font-serif italic mb-8">The Solution & Impact</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div>
              <p className="text-lg text-muted leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        {project.caseStudy && (
          <div className="space-y-32 mb-32">
            {project.caseStudy.map((section: any, i: number) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent">Section {i + 1} // {section.title}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                {section.type === "text-grid" && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <h3 className="text-4xl font-serif italic leading-tight">{section.subtitle}</h3>
                    <p className="text-lg text-muted leading-relaxed">{section.content}</p>
                  </div>
                )}

                {section.type === "insight-cards" && (
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.items.map((item: any, j: number) => (
                      <div key={j} className="glass p-8 rounded-3xl">
                        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{item.label}</div>
                        <p className="text-muted leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "image-text" && (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-3xl overflow-hidden glass aspect-video">
                      <img src={section.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-lg text-muted leading-relaxed">{section.content}</p>
                  </div>
                )}

                {section.type === "persona" && (
                  <div className="glass p-12 rounded-3xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6 glass">
                        <img src="https://picsum.photos/seed/persona/600/600" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                      </div>
                      <h4 className="text-2xl font-serif italic mb-2">{section.name}</h4>
                      <p className="text-sm text-muted leading-relaxed italic">"{section.bio}"</p>
                    </div>
                    <div className="md:col-span-1 space-y-8">
                      <div>
                        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Goals</div>
                        <ul className="space-y-2">
                          {section.goals.map((g: string) => <li key={g} className="text-muted text-sm flex gap-2"><span className="text-accent">•</span> {g}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-1 space-y-8">
                      <div>
                        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Pain Points</div>
                        <ul className="space-y-2">
                          {section.pains.map((p: string) => <li key={p} className="text-muted text-sm flex gap-2"><span className="text-accent">•</span> {p}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {section.type === "full-image" && (
                  <div className="space-y-6">
                    <div className="rounded-3xl overflow-hidden glass aspect-[16/9]">
                      <img src={section.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    {section.caption && <p className="text-center text-xs text-muted uppercase tracking-widest">{section.caption}</p>}
                  </div>
                )}

                {section.type === "image-grid" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {section.images.map((img: string, j: number) => (
                      <div key={j} className="rounded-2xl overflow-hidden glass aspect-[2/3]">
                        <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-8 py-20 border-t border-white/5">
          <h3 className="text-2xl font-serif italic">Ready to see more?</h3>
          <button 
            onClick={onBack}
            className="px-12 py-6 bg-white text-bg rounded-full text-sm font-bold hover:bg-accent transition-all"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const UIOverview = () => {
  const { uiPortfolio } = PORTFOLIO_DATA.projects;
  return (
    <section className="py-32" id="work">
      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-2">Visual Craft<span className="text-accent">.</span></h2>
            <p className="text-muted text-lg leading-relaxed">
              {uiPortfolio.description}
            </p>
          </div>
          <div className="flex gap-4">
            {uiPortfolio.categories.map(cat => (
              <span key={cat} className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 aspect-square md:aspect-auto md:h-[600px]">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden glass group">
            <img src={kelterHomeImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-3xl overflow-hidden glass group">
            <img src={bemaHomeImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-3xl overflow-hidden glass group">
            <img src={auraHomeImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 rounded-3xl overflow-hidden glass group">
            <img src={bvHomeImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { process } = PORTFOLIO_DATA;
  return (
    <section className="py-32 bg-white/[0.01]" id="process">
      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40">
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">02 // The Workflow</span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {process.map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg p-8 flex flex-col group hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-6xl font-serif italic text-white/5 mb-8 group-hover:text-accent/20 transition-colors">{item.step}</div>
              <h3 className="text-xl font-serif italic mb-4">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-accent font-mono mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map(tool => (
                    <span key={tool} className="text-[10px] text-muted border border-white/10 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-serif italic mb-4">The "Vibe Coding" Advantage</h3>
            <p className="text-muted leading-relaxed">
              By integrating AI into the core design process, I reduce the friction between concept and reality. This allows for more iterations, higher precision, and a faster path to a production-ready product.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full"
              />
              <Zap className="text-accent" size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
              Let's define the <br />
              <span className="text-accent">next vibe.</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-md">
              Currently open to Product Designer, UI/UX Designer, or Digital Designer roles, with a focus on AI-driven design and user-centered experiences.
            </p>
            <a href="mailto:hello@designer.com" className="text-2xl md:text-3xl font-serif italic hover:text-accent transition-colors underline underline-offset-8 decoration-white/20">
              shuangshuang666@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-end items-end gap-12">
            <div className="flex gap-8">
              <a href="#" className="p-4 glass rounded-full hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-4 glass rounded-full hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2">Based in</div>
              <div className="text-lg font-serif italic">Singapore</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-muted">
          <div>© 2026 Senior Product Designer. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { uxCaseStudies } = PORTFOLIO_DATA.projects;
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="bg-bg text-ink selection:bg-accent selection:text-bg">
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <Nav />
      <Hero />
      
      <section className="py-32 bg-white/[0.02]" id="work">
      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">01 // Deep UX</span>
            <div className="h-[1px] flex-grow bg-white/10" />
          </div>
          
          <div className="grid md:grid-cols-1 gap-40">
            {uxCaseStudies.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <UIOverview />
      <Process />

      <section className="py-32 border-y border-white/5" id="about">
        <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-40 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
             <img src={img1Image} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="text-5xl font-serif italic mb-8 leading-tight">10 Years of<br />Crafting Experiences.</h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                My journey began in Singapore's design landscape, with 10 years of experience across e-commerce, SME platforms, and admin systems.
              </p>
              <p>
                {PORTFOLIO_DATA.about.philosophy}
              </p>
              <p className="text-white font-medium italic">
                "I don't just design interfaces — I design the logic, structure, and experience behind them."
              </p>
            </div>

            <div className="mt-12">
              <div className="text-[10px] uppercase tracking-widest text-accent font-mono mb-6">Core Competencies</div>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.about.skills?.map(skill => (
                  <span key={skill} className="px-4 py-2 glass rounded-full text-xs text-muted hover:text-accent transition-colors border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-serif italic mb-1">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-serif italic mb-1">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Products Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
