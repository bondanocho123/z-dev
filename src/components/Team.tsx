import TeamMember from "./TeamMember";

const Team = () => {
  const bondanExperiences = [
    {
      company: "PT Tri Mulya Gemilang",
      position: "System Analyst",
      period: "Current Position",
      responsibilities: [
        "Analyzing and designing system requirements",
        "Coordinating with stakeholders for system improvements",
        "Providing technical solutions and architecture design"
      ]
    },
    {
      company: "PT AA Pialang Asuransi",
      position: ".NET Developer",
      period: "Jun 2021 – Present",
      responsibilities: [
        "Building and designing host-to-host systems and creating monitoring applications for insurance processes between Bank Jatim (BUMN) and Insurance Panel",
        "Creating and developing web-based broker application to connect the Insured with the Insurer for PT Pegadaian (BUMN)",
        "Developing desktop-based Credit Life Insurance application for internal production management",
        "Creating company profile website with SMTP features for sending emails",
        "Developing internal application (System Management Office) for recording outgoing letters, incoming letters, offers, and including to-do list feature for inter-departmental/section use",
        "Compiling polarized production data"
      ],
      website: "https://www.aapialang.co.id"
    },
    {
      company: "PT Erasoft Teknologi Indonesia",
      position: ".NET Programmer",
      period: "Nov 2018 – Jun 2021",
      responsibilities: [
        "Fixing errors that occur in the application, both in program flow and program code",
        "Optimizing algorithms/queries in stored procedures on the database/program",
        "Developing existing modules or creating new modules",
        "Creating company profile website using WordPress with implementation of chatting features and SMTP for sending emails",
        "Deploying programs on the server"
      ],
      website: "https://www.erasoft.co.id"
    }
  ];

  const naufalExperiences = [
    {
      company: "Various Projects",
      position: "Rust Developer",
      period: "Current",
      responsibilities: [
        "Developing high-performance applications using Rust",
        "Building scalable and secure backend systems",
        "Implementing modern software architecture patterns",
        "Optimizing system performance and reliability"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented developers behind Z-Labs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TeamMember
              name="Bondan Prakoso"
              role=".NET Developer & System Analyst"
              experiences={bondanExperiences}
            />
            <TeamMember
              name="Muhammad Naufal"
              role="Rust Developer"
              experiences={naufalExperiences}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
