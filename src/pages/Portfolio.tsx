import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Star, Code2, Brain, Wrench, ChevronDown, Award, GraduationCap, Briefcase, User } from "lucide-react";
import { SiCplusplus, SiPython, SiMysql, SiCanva } from "react-icons/si";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const TECH_SKILLS = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "GitHub", icon: Github, color: "#181717" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
];

const SOFT_SKILLS = [
  "Leadership & Problem Solving",
  "Critical Thinking",
  "Innovation Mindset",
  "Public Speaking",
  "Team Collaboration",
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#about" className="text-xl font-bold gradient-text">
            Sriram VK
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            data-testid="button-menu"
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMenuOpen(o => !o)}
          >
            <div className="space-y-1">
              <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 animate-fade-in-up animate-delay-100">
              Hello, I'm
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up animate-delay-200">
              <span className="gradient-text">Sriram VK</span>
            </h1>
            <h2 className="text-xl text-muted-foreground font-medium mb-6 animate-fade-in-up animate-delay-300">
              AI & Data Science Enthusiast · Engineering Student
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md animate-fade-in-up animate-delay-400">
              Motivated engineering student seeking internships in AI and Data Science. Passionate about applying intelligent systems to solve real-world problems — from predicting space debris collisions to building data-driven solutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up animate-delay-500">
              <a
                href="https://www.linkedin.com/in/sri-ram-332225380"
                target="_blank"
                rel="noreferrer"
                data-testid="link-linkedin"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity pulse-glow"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/25cj017-rgb"
                target="_blank"
                rel="noreferrer"
                data-testid="link-github"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card font-semibold text-sm hover:bg-muted transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground animate-fade-in-up animate-delay-600">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Madurai, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a href="mailto:sriramsangeetha97@gmail.com" data-testid="link-email" className="hover:text-primary transition-colors">
                  sriramsangeetha97@gmail.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +91-8825727356
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center animate-fade-in-up animate-delay-300">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl glow">
                <img
                  src="/profile.jpeg"
                  alt="Sriram VK"
                  data-testid="img-profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
              {/* GPA badge */}
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg text-sm font-bold">
                GPA 9.35
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#skills"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader icon={<Code2 size={20} />} title="Skills" subtitle="What I bring to the table" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Technical */}
            <div className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold">Technical Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {TECH_SKILLS.map(skill => (
                  <div
                    key={skill.name}
                    data-testid={`skill-${skill.name.toLowerCase()}`}
                    className="flex items-center gap-2 bg-muted px-3 py-2 rounded-xl text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    <skill.icon size={16} />
                    {skill.name}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <SkillBar label="Machine Learning Fundamentals" level={70} />
                <SkillBar label="Data Analysis" level={75} />
                <SkillBar label="Artificial Intelligence Concepts" level={72} />
                <SkillBar label="Python" level={80} />
                <SkillBar label="C++" level={75} />
              </div>
            </div>

            {/* Soft skills */}
            <div className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold">Soft Skills</h3>
              </div>
              <div className="space-y-3">
                {SOFT_SKILLS.map((s, i) => (
                  <div
                    key={i}
                    data-testid={`soft-skill-${i}`}
                    className="flex items-center gap-3 p-3 bg-muted rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/50 rounded-xl border border-accent-border">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench size={14} className="text-primary" />
                  <span className="text-sm font-semibold text-accent-foreground">Tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "VS Code", "Canva"].map(t => (
                    <span key={t} className="px-3 py-1 bg-card rounded-lg text-xs font-medium border border-card-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader icon={<Briefcase size={20} />} title="Projects" subtitle="Things I've built" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div
              data-testid="card-project-astrasuraksha"
              className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Star size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  AI Platform
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">AstraSuraksha</h3>
              <p className="text-sm text-muted-foreground font-medium mb-3">AI Space Risk Platform</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Developing an AI-based system to predict space debris collision risks using trajectory data. Award-winning concept presented at an international hackathon.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "AI", "Space Tech"].map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-muted text-xs rounded-lg font-medium">{tag}</span>
                ))}
              </div>
            </div>

            <div
              data-testid="card-project-3d-viz"
              className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Code2 size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Visualization
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">3D Space Visualization</h3>
              <p className="text-sm text-muted-foreground font-medium mb-3">Interactive Satellite Tracker</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Created a prototype to visualize satellite movements in an interactive 3D environment for enhanced spatial awareness of orbital mechanics.
              </p>
              <div className="flex flex-wrap gap-2">
                {["3D Graphics", "Visualization", "Prototype", "Orbital Data"].map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-muted text-xs rounded-lg font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader icon={<GraduationCap size={20} />} title="Education" subtitle="My academic journey" />

          <div className="mt-12 space-y-6 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <EducationCard
              degree="Master of Engineering – Computer Science"
              institution="Sri Krishna College Of Engineering And Technology"
              period="Expected 2030"
              detail="GPA: 9.35 / 10.0"
              isFirst
            />
            <EducationCard
              degree="High School"
              institution="The TVS School"
              period="2023 – 2025"
              detail="Percentage: 94.4 / 100"
            />
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader icon={<Award size={20} />} title="Achievements" subtitle="Recognitions & certifications" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Hackathon */}
            <div
              data-testid="card-achievement-hackathon"
              className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Award size={18} className="text-amber-600 dark:text-amber-400" />
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full uppercase tracking-wide">
                  International
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">YUVA AI Global Challenge</h3>
              <p className="text-sm text-primary font-semibold mb-3">International Level Hackathon</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Developed the concept for <strong>AstraSuraksha</strong>, an AI platform predicting space debris collision risks — recognized at an international level.
              </p>
            </div>

            {/* Certification */}
            <div
              data-testid="card-certification"
              className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  In Progress
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">Data Science & AI Certification</h3>
              <p className="text-sm text-primary font-semibold mb-3">Intellipaat × IIT Roorkee</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently pursuing a 12-month certification course from Intellipaat by IIT Roorkee — building deep expertise in Data Science and Artificial Intelligence.
              </p>
            </div>

            {/* Leadership */}
            <div
              data-testid="card-leadership"
              className="bg-card border border-card-border rounded-2xl p-8 hover-card-lift md:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Head Boy</h3>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      Leadership Role
                    </span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-3">The TVS School · April 2023 – April 2025</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Organized school events and initiatives promoting student engagement.
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Represented the student body, enhancing communication with school administration.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader icon={<Mail size={20} />} title="Get In Touch" subtitle="Let's connect and collaborate" />

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card border border-card-border rounded-2xl p-10 text-center">
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                I'm actively looking for internship opportunities in AI and Data Science. Whether you have a project, a role, or just want to say hi — my inbox is always open.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <ContactChip
                  icon={<Mail size={18} />}
                  label="Email"
                  value="sriramsangeetha97@gmail.com"
                  href="mailto:sriramsangeetha97@gmail.com"
                  testId="contact-email"
                />
                <ContactChip
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                  value="sri-ram-332225380"
                  href="https://www.linkedin.com/in/sri-ram-332225380"
                  testId="contact-linkedin"
                />
                <ContactChip
                  icon={<Github size={18} />}
                  label="GitHub"
                  value="25cj017-rgb"
                  href="https://github.com/25cj017-rgb"
                  testId="contact-github"
                />
              </div>

              <a
                href="mailto:sriramsangeetha97@gmail.com"
                data-testid="button-hire-me"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity pulse-glow"
              >
                <Mail size={16} /> Say Hello
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Sriram VK. Built with passion.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sri-ram-332225380"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-linkedin"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/25cj017-rgb"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-github"
              className="hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
        {icon}
        {title}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <p className="text-muted-foreground mt-2">{subtitle}</p>
      <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
    </div>
  );
}

function SkillBar({ label, level }: { label: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-medium mb-1">
        <span>{label}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function EducationCard({
  degree, institution, period, detail, isFirst,
}: {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  isFirst?: boolean;
}) {
  return (
    <div
      data-testid={`education-${degree.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
      className="relative md:ml-16 bg-card border border-card-border rounded-2xl p-6 hover-card-lift"
    >
      <div className="absolute -left-9 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-bold text-lg">{degree}</h3>
          <p className="text-primary text-sm font-semibold mt-1">{institution}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
          <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{period}</span>
          <span className="text-xs font-bold text-primary">{detail}</span>
        </div>
      </div>
    </div>
  );
}

function ContactChip({
  icon, label, value, href, testId,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  testId: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testId}
      className="flex flex-col items-center gap-2 p-4 bg-muted rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors group"
    >
      <div className="text-primary group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-xs font-bold">{label}</span>
      <span className="text-xs text-muted-foreground truncate w-full text-center">{value}</span>
    </a>
  );
}
