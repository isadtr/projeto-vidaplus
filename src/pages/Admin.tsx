import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bed, Calendar, Activity, TrendingUp, FileText } from "lucide-react";

export default function Admin() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Administrativo</h1>
          <p className="text-muted-foreground">Visão geral da gestão hospitalar</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pacientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-success flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leitos Disponíveis</CardTitle>
              <Bed className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45/120</div>
              <p className="text-xs text-muted-foreground">
                Taxa de ocupação: 62.5%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">
                23 pendentes, 66 concluídas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Satisfação</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.5%</div>
              <p className="text-xs text-success flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +2.1% este mês
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ocupação de Leitos por Setor</CardTitle>
              <CardDescription>Status atual dos leitos hospitalares</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { setor: "UTI", total: 20, ocupados: 18 },
                  { setor: "Emergência", total: 30, ocupados: 22 },
                  { setor: "Pediatria", total: 25, ocupados: 15 },
                  { setor: "Clínica Geral", total: 45, ocupados: 35 },
                ].map((item) => (
                  <div key={item.setor} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.setor}</span>
                      <span className="text-muted-foreground">
                        {item.ocupados}/{item.total}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${(item.ocupados / item.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas de Atendimento</CardTitle>
              <CardDescription>Resumo dos últimos 7 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { dia: "Segunda", consultas: 142 },
                  { dia: "Terça", consultas: 156 },
                  { dia: "Quarta", consultas: 138 },
                  { dia: "Quinta", consultas: 165 },
                  { dia: "Sexta", consultas: 149 },
                  { dia: "Sábado", consultas: 98 },
                  { dia: "Domingo", consultas: 67 },
                ].map((item) => (
                  <div key={item.dia} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.dia}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${(item.consultas / 165) * 100}px` }}
                      />
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {item.consultas}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Relatórios Disponíveis
            </CardTitle>
            <CardDescription>Documentos e análises geradas pelo sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Relatório Mensal de Atendimentos",
                "Análise de Ocupação de Leitos",
                "Indicadores de Qualidade",
                "Relatório Financeiro",
                "Gestão de Estoque",
                "Satisfação dos Pacientes",
              ].map((relatorio) => (
                <button
                  key={relatorio}
                  className="flex items-center gap-3 rounded-lg border p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{relatorio}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
