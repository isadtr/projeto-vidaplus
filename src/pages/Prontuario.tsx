import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Pill, TestTube, Activity } from "lucide-react";

export default function Prontuario() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meu Prontuário</h1>
          <p className="text-muted-foreground">Histórico médico completo</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Paciente: João da Silva</CardTitle>
            <CardDescription>CPF: 123.456.789-00 | Data de Nascimento: 15/03/1985</CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="consultas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="consultas">Consultas</TabsTrigger>
            <TabsTrigger value="prescricoes">Prescrições</TabsTrigger>
            <TabsTrigger value="exames">Exames</TabsTrigger>
            <TabsTrigger value="anotacoes">Anotações</TabsTrigger>
          </TabsList>

          <TabsContent value="consultas" className="space-y-4">
            {[
              {
                data: "10/10/2025",
                profissional: "Dra. Maria Santos",
                especialidade: "Clínico Geral",
                diagnostico: "Gripe comum",
                observacoes: "Paciente apresentou febre e tosse. Prescritos antipiréticos.",
              },
              {
                data: "15/09/2025",
                profissional: "Dr. João Silva",
                especialidade: "Cardiologia",
                diagnostico: "Check-up de rotina",
                observacoes: "Pressão arterial dentro dos parâmetros. Continuar acompanhamento.",
              },
            ].map((consulta, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {consulta.data} - {consulta.especialidade}
                  </CardTitle>
                  <CardDescription>{consulta.profissional}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <span className="font-semibold">Diagnóstico: </span>
                    <span>{consulta.diagnostico}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Observações: </span>
                    <span>{consulta.observacoes}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="prescricoes" className="space-y-4">
            {[
              {
                data: "10/10/2025",
                medicamento: "Paracetamol 750mg",
                dosagem: "1 comprimido a cada 8 horas",
                duracao: "5 dias",
                medico: "Dra. Maria Santos",
              },
              {
                data: "15/09/2025",
                medicamento: "Atenolol 25mg",
                dosagem: "1 comprimido pela manhã",
                duracao: "Uso contínuo",
                medico: "Dr. João Silva",
              },
            ].map((prescricao, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-primary" />
                    {prescricao.medicamento}
                  </CardTitle>
                  <CardDescription>{prescricao.data} - {prescricao.medico}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <span className="font-semibold">Dosagem: </span>
                    <span>{prescricao.dosagem}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Duração: </span>
                    <span>{prescricao.duracao}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="exames" className="space-y-4">
            {[
              {
                data: "05/10/2025",
                tipo: "Hemograma Completo",
                status: "Resultado disponível",
                solicitante: "Dra. Maria Santos",
              },
              {
                data: "20/09/2025",
                tipo: "Eletrocardiograma",
                status: "Resultado disponível",
                solicitante: "Dr. João Silva",
              },
            ].map((exame, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-5 w-5 text-primary" />
                    {exame.tipo}
                  </CardTitle>
                  <CardDescription>{exame.data} - {exame.solicitante}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-success">{exame.status}</span>
                    <button className="text-sm text-primary hover:underline">
                      Ver resultado
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="anotacoes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Anotações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-semibold">Alergias:</p>
                  <p className="text-sm text-muted-foreground">Penicilina, Dipirona</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-semibold">Histórico Familiar:</p>
                  <p className="text-sm text-muted-foreground">
                    Pai: Hipertensão, Diabetes tipo 2<br />
                    Mãe: Hipotireoidismo
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-semibold">Observações Importantes:</p>
                  <p className="text-sm text-muted-foreground">
                    Paciente pratica atividades físicas regularmente. Não fumante.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
