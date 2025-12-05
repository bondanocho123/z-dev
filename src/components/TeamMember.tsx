import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  website?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  experiences: Experience[];
}

const TeamMember = ({ name, role, experiences }: TeamMemberProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">{name}</CardTitle>
            <Badge variant="secondary" className="text-sm">
              {role}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-4 space-y-3">
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  {exp.position}
                </h4>
                <p className="text-foreground font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </p>
                {exp.website && (
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-block mt-1"
                  >
                    {exp.website}
                  </a>
                )}
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
