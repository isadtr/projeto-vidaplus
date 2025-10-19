import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import Agendamento from "./pages/Agendamento";
import Prontuario from "./pages/Prontuario";
import Teleconsulta from "./pages/Teleconsulta";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import CadastroProfissional from "./pages/CadastroProfissional";
import ListaPacientes from "./pages/ListaPacientes";
import ListaProfissionais from "./pages/ListaProfissionais";
import AgendaProfissional from "./pages/AgendaProfissional";
import EmissaoReceita from "./pages/EmissaoReceita";
import GestaoLeitos from "./pages/GestaoLeitos";
import GestaoSuprimentos from "./pages/GestaoSuprimentos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
          <Route path="/cadastro-profissional" element={<CadastroProfissional />} />
          <Route path="/lista-pacientes" element={<ListaPacientes />} />
          <Route path="/lista-profissionais" element={<ListaProfissionais />} />
          <Route path="/agenda-profissional" element={<AgendaProfissional />} />
          <Route path="/emissao-receita" element={<EmissaoReceita />} />
          <Route path="/gestao-leitos" element={<GestaoLeitos />} />
          <Route path="/gestao-suprimentos" element={<GestaoSuprimentos />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/prontuario" element={<Prontuario />} />
          <Route path="/teleconsulta" element={<Teleconsulta />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
