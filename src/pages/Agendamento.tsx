import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Video } from "lucide-react";

export default function Agendamento() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [especialidade, setEspecialidade] = useState("");
  const [profissional, setProfissional] = useState("");
  const [horario, setHorario] = useState("");
  const [tipo, setTipo] = useState("presencial");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consulta agendada com sucesso!",
      description: `${tipo === "presencial" ? "Consulta presencial" : "Teleconsulta"} marcada para ${date?.toLocaleDateString()}`,
    });
  };

  const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Nova Consulta</h1>
          <p className="text-muted-foreground">Agende sua consulta médica</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Selecione a Data</CardTitle>
              <CardDescription>Escolha o dia da sua consulta</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tipo de Consulta</CardTitle>
                <CardDescription>Presencial ou online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={tipo === "presencial" ? "default" : "outline"}
                    onClick={() => setTipo("presencial")}
                    className="h-20 flex-col gap-2"
                  >
                    <MapPin className="h-6 w-6" />
                    Presencial
                  </Button>
                  <Button
                    type="button"
                    variant={tipo === "teleconsulta" ? "default" : "outline"}
                    onClick={() => setTipo("teleconsulta")}
                    className="h-20 flex-col gap-2"
                  >
                    <Video className="h-6 w-6" />
                    Teleconsulta
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dados da Consulta</CardTitle>
                <CardDescription>Escolha o profissional e horário</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="especialidade">Especialidade</Label>
                  <Select value={especialidade} onValueChange={setEspecialidade}>
                    <SelectTrigger id="especialidade">
                      <SelectValue placeholder="Selecione a especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiologia">Cardiologia</SelectItem>
                      <SelectItem value="clinico-geral">Clínico Geral</SelectItem>
                      <SelectItem value="ortopedia">Ortopedia</SelectItem>
                      <SelectItem value="pediatria">Pediatria</SelectItem>
                      <SelectItem value="ginecologia">Ginecologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profissional">Profissional</Label>
                  <Select value={profissional} onValueChange={setProfissional}>
                    <SelectTrigger id="profissional">
                      <SelectValue placeholder="Selecione o profissional" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-joao">Dr. João Silva</SelectItem>
                      <SelectItem value="dra-maria">Dra. Maria Santos</SelectItem>
                      <SelectItem value="dr-pedro">Dr. Pedro Costa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario">Horário</Label>
                  <Select value={horario} onValueChange={setHorario}>
                    <SelectTrigger id="horario">
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {horariosDisponiveis.map((h) => (
                        <SelectItem key={h} value={h}>
                          {h}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  Confirmar Agendamento
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </Layout>
  );
}
