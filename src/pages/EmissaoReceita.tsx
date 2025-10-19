import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Printer, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function EmissaoReceita() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    paciente: "",
    medicamento: "",
    dosagem: "",
    frequencia: "",
    duracao: "",
    quantidade: "",
    observacoes: "",
    tipoReceita: "simples",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Receita emitida!",
      description: "A receita digital foi gerada com sucesso.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Emissão de Receita Digital</h1>
          <p className="text-muted-foreground">Crie receitas médicas digitais com assinatura eletrônica</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Dados da Receita</CardTitle>
                  <CardDescription>Preencha as informações da prescrição</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="paciente">Paciente*</Label>
                    <Select value={formData.paciente} onValueChange={(value) => handleChange("paciente", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o paciente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="joao">João da Silva</SelectItem>
                        <SelectItem value="maria">Maria Santos</SelectItem>
                        <SelectItem value="pedro">Pedro Costa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tipoReceita">Tipo de Receita*</Label>
                    <Select value={formData.tipoReceita} onValueChange={(value) => handleChange("tipoReceita", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simples">Receita Simples</SelectItem>
                        <SelectItem value="especial">Receita Especial (Controlados)</SelectItem>
                        <SelectItem value="antimicrobiano">Receita Antimicrobiano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="medicamento">Medicamento*</Label>
                      <Input
                        id="medicamento"
                        placeholder="Ex: Dipirona"
                        value={formData.medicamento}
                        onChange={(e) => handleChange("medicamento", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dosagem">Dosagem*</Label>
                      <Input
                        id="dosagem"
                        placeholder="Ex: 500mg"
                        value={formData.dosagem}
                        onChange={(e) => handleChange("dosagem", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="frequencia">Frequência*</Label>
                      <Input
                        id="frequencia"
                        placeholder="Ex: 8 em 8 horas"
                        value={formData.frequencia}
                        onChange={(e) => handleChange("frequencia", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duracao">Duração*</Label>
                      <Input
                        id="duracao"
                        placeholder="Ex: 5 dias"
                        value={formData.duracao}
                        onChange={(e) => handleChange("duracao", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantidade">Quantidade*</Label>
                    <Input
                      id="quantidade"
                      placeholder="Ex: 15 comprimidos"
                      value={formData.quantidade}
                      onChange={(e) => handleChange("quantidade", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observacoes">Observações</Label>
                    <Textarea
                      id="observacoes"
                      placeholder="Instruções adicionais para o paciente..."
                      value={formData.observacoes}
                      onChange={(e) => handleChange("observacoes", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Salvar Rascunho
                    </Button>
                    <Button type="submit">
                      <Send className="h-4 w-4 mr-2" />
                      Emitir Receita
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pré-visualização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <div className="text-center border-b pb-3">
                    <h3 className="font-bold">VidaPlus</h3>
                    <p className="text-sm text-muted-foreground">Receita Médica Digital</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>Paciente:</strong> {formData.paciente || "---"}</p>
                    <p><strong>Medicamento:</strong> {formData.medicamento || "---"}</p>
                    <p><strong>Dosagem:</strong> {formData.dosagem || "---"}</p>
                    <p><strong>Frequência:</strong> {formData.frequencia || "---"}</p>
                    <p><strong>Duração:</strong> {formData.duracao || "---"}</p>
                    <p><strong>Quantidade:</strong> {formData.quantidade || "---"}</p>
                  </div>

                  {formData.observacoes && (
                    <div className="pt-3 border-t">
                      <p className="text-sm"><strong>Observações:</strong></p>
                      <p className="text-sm text-muted-foreground">{formData.observacoes}</p>
                    </div>
                  )}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  <Printer className="h-4 w-4 mr-2" />
                  Imprimir Receita
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Receitas Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div>
                      <p className="font-medium text-sm">João da Silva</p>
                      <p className="text-xs text-muted-foreground">Amoxicilina 500mg</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Hoje</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div>
                      <p className="font-medium text-sm">Maria Santos</p>
                      <p className="text-xs text-muted-foreground">Dipirona 500mg</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Ontem</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
