import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bed, AlertCircle, CheckCircle, Clock, UserPlus } from "lucide-react";

export default function GestaoLeitos() {
  const setores = [
    { id: 1, nome: "UTI Geral", total: 20, ocupados: 18, disponiveis: 2, taxa: 90 },
    { id: 2, nome: "UTI Neonatal", total: 12, ocupados: 8, disponiveis: 4, taxa: 67 },
    { id: 3, nome: "Enfermaria Geral", total: 45, ocupados: 32, disponiveis: 13, taxa: 71 },
    { id: 4, nome: "Pediatria", total: 20, ocupados: 15, disponiveis: 5, taxa: 75 },
    { id: 5, nome: "Maternidade", total: 15, ocupados: 10, disponiveis: 5, taxa: 67 },
  ];

  const internacoes = [
    { id: 1, paciente: "João Silva", setor: "UTI Geral", leito: "101-A", entrada: "20/03/2024", status: "Crítico", dias: 3 },
    { id: 2, paciente: "Maria Santos", setor: "Enfermaria", leito: "205-B", entrada: "22/03/2024", status: "Estável", dias: 1 },
    { id: 3, paciente: "Pedro Costa", setor: "UTI Neonatal", leito: "301-C", entrada: "15/03/2024", status: "Estável", dias: 8 },
    { id: 4, paciente: "Ana Oliveira", setor: "Pediatria", leito: "402-A", entrada: "23/03/2024", status: "Recuperação", dias: 0 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Crítico": return "destructive";
      case "Estável": return "default";
      case "Recuperação": return "secondary";
      default: return "outline";
    }
  };

  const getTaxaColor = (taxa: number) => {
    if (taxa >= 90) return "bg-destructive";
    if (taxa >= 75) return "bg-yellow-500";
    return "bg-primary";
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestão de Leitos</h1>
            <p className="text-muted-foreground">Controle de ocupação e internações hospitalares</p>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Nova Internação
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Leitos</CardDescription>
              <CardTitle className="text-3xl">112</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Ocupados</CardDescription>
              <CardTitle className="text-3xl text-destructive">83</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Disponíveis</CardDescription>
              <CardTitle className="text-3xl text-primary">29</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Taxa de Ocupação</CardDescription>
              <CardTitle className="text-3xl">74%</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ocupação por Setor</CardTitle>
            <CardDescription>Acompanhamento em tempo real da disponibilidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {setores.map((setor) => (
                <div key={setor.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bed className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">{setor.nome}</h3>
                        <p className="text-sm text-muted-foreground">
                          {setor.ocupados}/{setor.total} leitos ocupados
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={setor.disponiveis <= 2 ? "destructive" : "secondary"}>
                        {setor.disponiveis} disponíveis
                      </Badge>
                      <span className="text-sm font-semibold">{setor.taxa}%</span>
                    </div>
                  </div>
                  <Progress value={setor.taxa} className={getTaxaColor(setor.taxa)} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Internações Ativas</CardTitle>
            <CardDescription>Pacientes internados atualmente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {internacoes.map((internacao) => (
                <div
                  key={internacao.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <Bed className="h-5 w-5 text-muted-foreground mb-1" />
                      <span className="font-semibold text-sm">{internacao.leito}</span>
                    </div>
                    
                    <div className="h-12 w-px bg-border" />
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{internacao.paciente}</span>
                        <Badge variant={getStatusColor(internacao.status)}>
                          {internacao.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{internacao.setor}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {internacao.dias} {internacao.dias === 1 ? 'dia' : 'dias'}
                        </div>
                        <span>•</span>
                        <span>Entrada: {internacao.entrada}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Ver Prontuário</Button>
                    <Button variant="outline" size="sm">Alta</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
