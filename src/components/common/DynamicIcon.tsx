import React from 'react';
import {
  ScanLine,
  Library,
  FolderArchive,
  FileText,
  Cpu,
  CheckCheck,
  Tags,
  Sparkles,
  Network,
  RefreshCw,
  DatabaseZap,
  ShieldCheck,
  Workflow,
  GraduationCap,
  BookOpen,
  Atom,
  Building2,
  BookMarked,
  Building,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Sliders,
  Award,
  Lock,
  Search,
  FileCheck
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  ScanLine,
  Library,
  FolderArchive,
  FileText,
  Cpu,
  CheckCheck,
  Tags,
  Sparkles,
  Network,
  RefreshCw,
  DatabaseZap,
  ShieldCheck,
  Workflow,
  GraduationCap,
  BookOpen,
  Atom,
  Building2,
  BookMarked,
  Building,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Sliders,
  Award,
  Lock,
  Search,
  FileCheck
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  const IconComponent = iconMap[name] || FileText;
  return <IconComponent className={className} size={size} />;
};
