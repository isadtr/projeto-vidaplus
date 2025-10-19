import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Mic, MicOff, VideoOff, Phone } from "lucide-react";
import { useState } from "react";

export default function Teleconsulta() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [notas, setNotas] = useState("");

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Teleconsulta</h1>
          <p className="text-muted-foreground">Consulta online em andamento</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dr. João Silva - Cardiologia</CardTitle>
                <CardDescription>Consulta iniciada às 14:30</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Área de vídeo da consulta</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant={isVideoOn ? "default" : "destructive"}
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                  </Button>
                  <Button
                    size="lg"
                    variant={isAudioOn ? "default" : "destructive"}
                    onClick={() => setIsAudioOn(!isAudioOn)}
                  >
                    {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </Button>
                  <Button size="lg" variant="destructive">
                    <Phone className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Paciente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-semibold">Nome:</p>
                  <p className="text-sm text-muted-foreground">João da Silva</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Idade:</p>
                  <p className="text-sm text-muted-foreground">39 anos</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Motivo:</p>
                  <p className="text-sm text-muted-foreground">Check-up cardiológico</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Alergias:</p>
                  <p className="text-sm text-muted-foreground">Penicilina</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Anotações da Consulta</CardTitle>
                <CardDescription>Registre observações importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Digite suas anotações aqui..."
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  rows={8}
                  className="resize-none"
                />
                <Button className="mt-4 w-full">
                  Salvar Anotações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
