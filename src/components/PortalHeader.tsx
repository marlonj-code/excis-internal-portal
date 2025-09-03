import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PortalHeaderProps {
  onSearch?: (query: string) => void;
}

const PortalHeader = ({ onSearch }: PortalHeaderProps) => {
  return (
    <header className="bg-gradient-hero shadow-elevated">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Company Portal
          </h1>
          <p className="text-blue-100 text-lg">
            Access all your workplace applications in one place
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search applications, documents, or people..."
              className="pl-12 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-card focus:shadow-card-hover transition-shadow duration-300"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortalHeader;