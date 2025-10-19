import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, AlertTriangle, TrendingDown, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function GestaoSuprimentos() {
  const [searchTerm, setSearchTerm] = useState("");

  const suprimentos = [
    { id: 1, nome: "Luvas Cirúrgicas", categoria: "Equipamento", estoque: 150, minimo: 200, unidade: "caixas", status: "Baixo" },
    { id: 2, nome: "Máscaras N95", categoria: "EPI", estoque: 500, minimo: 300, unidade: "unidades", status: "OK" },
    { id: 3, nome: "Soro Fisiológico 500ml", categoria: "Medicamento", estoque: 80, minimo: 150, unidade: "frascos", status: "Crítico" },
    { id: 4, nome: "Seringas 10ml", categoria: "Equipamento", estoque: 1200, minimo: 500, unidade: "unidades", status: "OK" },
    { id: 5, nome: "Gaze Estéril", categoria: "Material", estoque: 300, minimo: 250, unidade: "pacotes", status: "OK" },
    { id: 6, nome: "Dipirona 500mg", categoria: "Medicamento", estoque: 50, minimo: 100, unidade: "caixas", status: "Baixo" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Crítico": return <Badge variant="destructive">Crítico</Badge>;
      case "Baixo": return <Badge variant="secondary">Baixo</Badge>;
      case "OK": return <Badge variant="default">OK</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getProgressColor = (atual: number, minimo: number) => {
    const percentual = (atual / minimo) * 100;
    if (percentual < 50) return "bg-destructive";
    if (percentual < 100) return "bg-yellow-500";
    return "bg-primary";
  };

  const filteredSuprimentos = suprimentos.filter(s =>
    s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const criticos = suprimentos.filter(s => s.status === "Crítico").length;
  const baixos = suprimentos.filter(s => s.status === "Baixo").length;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestão de Suprimentos</h1>
            <p className="text-muted-foreground">Controle de estoque e materiais hospitalares</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Item
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Itens</CardDescription>
              <CardTitle className="text-3xl">{suprimentos.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Estoque Crítico</CardDescription>
              <CardTitle className="text-3xl text-destructive">{criticos}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Estoque Baixo</CardDescription>
              <CardTitle className="text-3xl text-secondary">{baixos}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Valor Total</CardDescription>
              <CardTitle className="text-3xl">R$ 85.4k</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {(criticos > 0 || baixos > 0) && (
          <Card className="border-destructive">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <CardTitle className="text-destructive">Alertas de Estoque</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {criticos > 0 && (
                  <p className="text-sm">
                    <strong>{criticos}</strong> {criticos === 1 ? 'item está' : 'itens estão'} em nível crítico e precisam de reposição imediata.
                  </p>
                )}
                {baixos > 0 && (
                  <p className="text-sm">
                    <strong>{baixos}</strong> {baixos === 1 ? 'item está' : 'itens estão'} com estoque baixo.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Inventário de Suprimentos</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-2 mt-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome ou categoria..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredSuprimentos.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{item.nome}</h3>
                          <p className="text-sm text-muted-foreground">{item.categoria}</p>
                        </div>
                        {getStatusBadge(item.status)}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Estoque: <strong>{item.estoque}</strong> {item.unidade}
                          </span>
                          <span className="text-muted-foreground">
                            Mínimo: {item.minimo} {item.unidade}
                          </span>
                        </div>
                        <Progress 
                          value={(item.estoque / item.minimo) * 100} 
                          className={getProgressColor(item.estoque, item.minimo)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">Repor</Button>
                    <Button variant="outline" size="sm">Histórico</Button>
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
