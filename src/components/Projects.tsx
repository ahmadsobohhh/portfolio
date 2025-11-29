import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
}

interface ProjectCategory {
  title: string;
  description: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    title: "Data Engineering, Backend & Cloud Systems",
    description:
      "High-throughput data processing pipelines, cloud deployments, and distributed backend systems built for reliability.",
    projects: [
      {
        title: "NetWatch",
        description: "Distributed Network Monitoring System",
        tech: ["Python", "FastAPI", "Linux", "ICMP/TCP", "Docker", "Grafana"],
        highlights: [
          "Distributed ICMP/TCP health checks across 200+ nodes for proactive alerting.",
          "FastAPI control plane orchestrates registration, scheduling, and notifications with Grafana dashboards.",
        ],
      },
      {
        title: "StreamHive",
        description: "Real-Time Data Processing System",
        tech: ["Python", "Apache Kafka", "Spark", "AWS"],
        highlights: [
          "Distributed pipeline processing live IoT sensor data with Kafka streams feeding Spark analytics.",
          "Reduced end-to-end latency by 35% and deployed autoscaling workers on AWS EC2 + S3.",
        ],
      },
      {
        title: "KineticQueue",
        description: "Real-Time Event Processing System",
        tech: ["Python", "Kafka", "Redis", "FastAPI", "Docker"],
        highlights: [
          "Event-streaming pipeline handling billions of weekly user activity events.",
          "Redis caching + Dockerized services with Prometheus monitoring keep fan-out latency low.",
        ],
      },
      {
        title: "MailFlow",
        description: "Scalable Email Analytics Platform",
        tech: ["Python", "Django", "React", "PostgreSQL", "AWS"],
        highlights: [
          "Full-stack app delivering real-time dashboards over 1M+ marketing email logs.",
          "Optimized AWS infra and async processing to improve response times by 50%.",
        ],
      },
      {
        title: "QueryCraft",
        description: "Cloud-Native SQL Query Optimizer",
        tech: ["Java", "PostgreSQL", "Docker", "REST"],
        highlights: [
          "Custom SQL parser + optimizer reorders joins/filters to shrink execution time.",
          "Modular OOP architecture packaged in Docker with REST APIs for integration.",
        ],
      },
    ],
  },
  {
    title: "Robotics, AI & High-Performance Computing",
    description: "Low-level control, simulation, and GPU-accelerated planning for autonomous systems.",
    projects: [
      {
        title: "AutoDriveSim",
        description: "Autonomous Vehicle Simulation Framework",
        tech: ["C++", "ROS2", "OpenCV", "Gazebo", "Python"],
        highlights: [
          "Real-time simulator for lane detection and route planning in dynamic traffic scenes.",
          "ROS2 nodes for localization/control with Gazebo visualizations of every scenario.",
        ],
      },
      {
        title: "DriveOpt",
        description: "GPU-Accelerated Path Planning Optimizer",
        tech: ["C++", "CUDA", "TensorRT", "PyTorch"],
        highlights: [
          "Optimized high-performance kernels for A* and Dijkstra to hit real-time deadlines.",
          "Integrated deep RL policies exported through TensorRT for low-latency NVIDIA deployment.",
        ],
      },
      {
        title: "SecureLink",
        description: "Encrypted IoT Communication Framework",
        tech: ["C/C++", "Embedded Linux", "MQTT", "TLS", "OpenSSL", "SQLite"],
        highlights: [
          "Lightweight secure messaging protocol with certificate rotation for fleets of devices.",
          "Embedded Linux client handles OTA firmware updates and telemetry persistence.",
        ],
      },
    ],
  },
  {
    title: "Game Development & Graphics",
    description: "Rendering engines, multiplayer gameplay systems, and tooling for creative teams.",
    projects: [
      {
        title: "Spectra Engine",
        description: "3D Game Engine",
        tech: ["C++", "OpenGL", "ImGui", "Assimp", "GLM"],
        highlights: [
          "Lightweight engine supporting real-time rendering, scene management, and asset import.",
          "Implemented modular ECS architecture plus an in-engine editor via ImGui.",
        ],
      },
      {
        title: "EchoForge",
        description: "Multiplayer Sandbox Prototype",
        tech: ["C++", "Unreal Engine", "Blueprints"],
        highlights: [
          "Third-person sandbox with custom gameplay mechanics and design tools.",
          "Server-client architecture synchronizes player state across networked sessions.",
        ],
      },
    ],
  },
  {
    title: "Mobile & Web Applications",
    description: "User-facing experiences spanning iOS, React Native, and cross-platform desktop apps.",
    projects: [
      {
        title: "Pulse",
        description: "Health & Activity Tracker",
        tech: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
        highlights: [
          "Visualizes steps and heart-rate data with HealthKit integrations and widgets.",
          "Cut load times 45% through CoreData caching and background sync.",
        ],
      },
      {
        title: "Voyage",
        description: "Travel Itinerary Planner",
        tech: ["Swift", "SwiftUI", "Firebase", "MapKit"],
        highlights: [
          "Collaborative planning app with real-time cloud sync and shared boards.",
          "Dynamic route maps + activity suggestions powered by MapKit overlays.",
        ],
      },
      {
        title: "Kalim",
        description: "Dialectal Arabic Speaking App",
        tech: ["Expo", "React Native", "OpenAI API", "Python"],
        highlights: [
          "AI conversation partner that adapts to multiple Arabic dialects.",
          "Coordinated mobile front-end with Python services that handle prompts + scoring.",
        ],
      },
      {
        title: "Encrypted P2P File Sharing",
        description: "Decentralized desktop application",
        tech: ["Electron", "React", "libP2P"],
        highlights: [
          "Peer-to-peer discovery plus transfer pipeline secured with end-to-end encryption.",
          "Resilient session management keeps file swaps alive across flaky networks.",
        ],
      },
    ],
  },
];

const projectSummary = [
  { name: "StreamHive", domain: "Data Engineering", languages: "Python", tech: "Kafka, Spark, AWS" },
  { name: "KineticQueue", domain: "Data Engineering", languages: "Python", tech: "Kafka, Redis, Docker" },
  { name: "MailFlow", domain: "Full Stack / Data", languages: "Python, JS", tech: "Django, React, AWS" },
  { name: "QueryCraft", domain: "Backend / DB", languages: "Java", tech: "PostgreSQL, Docker" },
  { name: "AutoDriveSim", domain: "Robotics / Sim", languages: "C++, Python", tech: "ROS2, Gazebo, OpenCV" },
  { name: "DriveOpt", domain: "HPC / AI", languages: "C++", tech: "CUDA, TensorRT, PyTorch" },
  { name: "Spectra Engine", domain: "Game Dev", languages: "C++", tech: "OpenGL, ImGui" },
  { name: "EchoForge", domain: "Game Dev", languages: "C++", tech: "Unreal Engine" },
  { name: "Pulse", domain: "iOS Dev", languages: "Swift", tech: "SwiftUI, HealthKit" },
  { name: "Voyage", domain: "iOS Dev", languages: "Swift", tech: "SwiftUI, Firebase" },
  { name: "Kalim", domain: "Mobile AI", languages: "JS/TS, Python", tech: "React Native, OpenAI" },
  { name: "Encrypted P2P", domain: "Desktop / Network", languages: "JS/TS", tech: "Electron, libP2P" },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass rounded-xl p-6 md:p-8 transition-all duration-300 group will-change-transform hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Github className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <p className="text-primary font-semibold mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-muted-foreground flex gap-2 items-start">
            <span className="text-primary leading-6">•</span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-8 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{category.title}</p>
                  <p className="text-base text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {category.projects.map((project, index) => (
                    <ProjectCard key={`${category.title}-${project.title}`} project={project} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold mb-4 text-center">Summary Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-muted-foreground uppercase text-xs tracking-wide">
                    <th className="py-3 px-2">Project</th>
                    <th className="py-3 px-2">Domain</th>
                    <th className="py-3 px-2">Primary Languages</th>
                    <th className="py-3 px-2">Key Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  {projectSummary.map((row) => (
                    <tr key={row.name} className="border-t border-border/40">
                      <td className="py-3 px-2 font-medium text-foreground">{row.name}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.domain}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.languages}</td>
                      <td className="py-3 px-2 text-muted-foreground">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
