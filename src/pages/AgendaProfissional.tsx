import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Video, MapPin } from "lucide-react";

export default function AgendaProfissional() {
  const agendamentos = [
    { id: 1, horario: "08:00", paciente: "João da Silva", tipo: "Presencial", status: "Confirmado", duracao: "30min" },
    { id: 2, horario: "09:00", paciente: "Maria Santos", tipo: "Teleconsulta", status: "Confirmado", duracao: "30min" },
    { id: 3, horario: "10:30", paciente: "Pedro Costa", tipo: "Presencial", status: "Aguardando", duracao: "45min" },
    { id: 4, horario: "14:00", paciente: "Ana Oliveira", tipo: "Teleconsulta", status: "Confirmado", duracao: "30min" },
    { id: 5, horario: "15:00", paciente: "Carlos Lima", tipo: "Presencial", status: "Cancelado", duracao: "30min" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Confirmado": return "default";
      case "Aguardando": return "secondary";
      case "Cancelado": return "destructive";
      default: return "outline";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Minha Agenda</h1>
            <p className="text-muted-foreground">Gerenciamento de consultas e horários</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Configurar Disponibilidade
            </Button>
            <Button>Bloquear Horário</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Consultas Hoje</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Confirmadas</CardDescription>
              <CardTitle className="text-3xl text-primary">3</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Aguardando</CardDescription>
              <CardTitle className="text-3xl text-secondary">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Canceladas</CardDescription>
              <CardTitle className="text-3xl text-destructive">1</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Agenda do Dia - Segunda, 25 de Março de 2024</CardTitle>
            <CardDescription>Visualize e gerencie suas consultas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agendamentos.map((agendamento) => (
                <div
                  key={agendamento.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                      <span className="font-semibold">{agendamento.horario}</span>
                      <span className="text-xs text-muted-foreground">{agendamento.duracao}</span>
                    </div>
                    
                    <div className="h-12 w-px bg-border" />
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{agendamento.paciente}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {agendamento.tipo === "Teleconsulta" ? (
                          <>
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Teleconsulta</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Consultório - Sala 3</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant={getStatusVariant(agendamento.status)}>
                      {agendamento.status}
                    </Badge>
                    
                    {agendamento.status === "Confirmado" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Ver Prontuário</Button>
                        {agendamento.tipo === "Teleconsulta" && (
                          <Button size="sm">
                            <Video className="h-4 w-4 mr-2" />
                            Iniciar
                          </Button>
                        )}
                        {agendamento.tipo === "Presencial" && (
                          <Button size="sm">Atender</Button>
                        )}
                      </div>
                    )}
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
