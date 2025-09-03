import { useState } from "react";
import { Search, Mail, Users, FileText, Shield, Calendar, Database } from "lucide-react";
import PortalHeader from "@/components/PortalHeader";
import AppGrid from "@/components/AppGrid";
import { AppData } from "@/components/AppCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Application configuration - easily editable for scalability
  const applications: AppData[] = [
    {
      id: "microsoft-365",
      name: "Microsoft 365",
      description: "Access Word, Excel, PowerPoint, Teams, and more productivity tools",
      url: "https://office.com",
      icon: FileText,
      color: "#0078D4",
      category: "productivity"
    },
    {
      id: "excis-signin",
      name: "Excis Sign",
      description: "Secure single sign-on portal for all Excis applications",
      url: "https://docusign.excis.me",
      icon: Shield,
      color: "#28A745",
      category: "authentication"
    },
    {
      id: "excis-crm", 
      name: "Excis CRM",
      description: "Customer relationship management and sales pipeline tracking",
      url: "#",
      icon: Users,
      color: "#6F42C1",
      category: "business"
    },
    {
      id: "excis-hrms",
      name: "Excis HRMS",
      description: "Human resources management system for employee data and workflows",
      url: "#",
      icon: Database,
      color: "#FD7E14",
      category: "hr"
    },
    {
      id: "excis-mail",
      name: "Excis Mail",
      description: "Corporate email platform with advanced security and collaboration",
      url: "https://mail.exc1s.com/",
      icon: Mail,
      color: "#DC3545",
      category: "communication"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader onSearch={setSearchQuery} />
      <AppGrid apps={applications} searchQuery={searchQuery} />
      
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Company Portal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Need help? Contact IT Support or visit the Help Center
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
