import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Edit, Trash2, Plus, Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function ListaProfissionais() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const profissionais = [
    { id: 1, nome: "Dr. João Silva", crm: "CRM 12345-SP", especialidade: "Cardiologia", status: "Ativo", consultas: 15 },
    { id: 2, nome: "Dra. Maria Santos", crm: "CRM 67890-SP", especialidade: "Pediatria", status: "Ativo", consultas: 22 },
    { id: 3, nome: "Dr. Pedro Costa", crm: "CRM 11223-SP", especialidade: "Ortopedia", status: "Férias", consultas: 8 },
  ];

  const handleDelete = (id: number, nome: string) => {
    toast({
      title: "Profissional excluído",
      description: `${nome} foi removido do sistema.`,
      variant: "destructive",
    });
  };

  const filteredProfissionais = profissionais.filter(p =>
    p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.crm.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gerenciar Profissionais</h1>
            <p className="text-muted-foreground">Visualize e gerencie profissionais de saúde</p>
          </div>
          <Button onClick={() => navigate("/cadastro-profissional")}>
            <Plus className="h-4 w-4 mr-2" />
            Novo Profissional
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Profissionais</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-2 mt-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, CRM ou especialidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CRM</TableHead>
                  <TableHead>Especialidade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Consultas (mês)</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProfissionais.map((prof) => (
                  <TableRow key={prof.id}>
                    <TableCell className="font-medium">{prof.nome}</TableCell>
                    <TableCell>{prof.crm}</TableCell>
                    <TableCell>{prof.especialidade}</TableCell>
                    <TableCell>
                      <Badge variant={prof.status === "Ativo" ? "default" : "secondary"}>
                        {prof.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{prof.consultas}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate("/agenda-profissional")}
                        >
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate("/cadastro-profissional")}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(prof.id, prof.nome)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
