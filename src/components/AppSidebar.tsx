import { Home, Calendar, User, FileText, Video, LayoutDashboard, Menu, Users, Stethoscope, CalendarDays, FilePlus, Bed, Package } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import logo from "@/assets/vidaplus-logo.png";

const patientItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Nova Consulta", url: "/agendamento", icon: Calendar },
  { title: "Prontuário", url: "/prontuario", icon: FileText },
  { title: "Teleconsulta", url: "/teleconsulta", icon: Video },
];

const professionalItems = [
  { title: "Minha Agenda", url: "/agenda-profissional", icon: CalendarDays },
  { title: "Emitir Receita", url: "/emissao-receita", icon: FilePlus },
  { title: "Lista de Pacientes", url: "/lista-pacientes", icon: Users },
];

const adminItems = [
  { title: "Dashboard Admin", url: "/admin", icon: LayoutDashboard },
  { title: "Gestão de Leitos", url: "/gestao-leitos", icon: Bed },
  { title: "Suprimentos", url: "/gestao-suprimentos", icon: Package },
  { title: "Cadastro Paciente", url: "/cadastro-paciente", icon: User },
  { title: "Cadastro Profissional", url: "/cadastro-profissional", icon: Stethoscope },
  { title: "Lista Pacientes", url: "/lista-pacientes", icon: Users },
  { title: "Lista Profissionais", url: "/lista-profissionais", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-primary font-medium"
      : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="bg-sidebar">
        <div className={`flex items-center gap-3 p-6 ${isCollapsed ? "justify-center" : ""}`}>
          <img 
            src={logo} 
            alt="VidaPlus Logo" 
            className={`${isCollapsed ? "h-8 w-8" : "h-10 w-auto"} transition-all`}
          />
          {!isCollapsed && (
            <span className="text-xl font-bold text-sidebar-foreground">
              VidaPlus
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Paciente
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {patientItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Profissional
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {professionalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Administração
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
