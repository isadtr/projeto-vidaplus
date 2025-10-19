import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

export function NotificationCenter() {
  const notifications = [
    { id: 1, tipo: "consulta", mensagem: "Consulta agendada para hoje às 14:00", tempo: "5 min atrás", lida: false },
    { id: 2, tipo: "resultado", mensagem: "Resultado de exame disponível", tempo: "1 hora atrás", lida: false },
    { id: 3, tipo: "lembrete", mensagem: "Lembrete: Tomar medicação", tempo: "2 horas atrás", lida: true },
    { id: 4, tipo: "sistema", mensagem: "Atualização do prontuário concluída", tempo: "1 dia atrás", lida: true },
  ];

  const naoLidas = notifications.filter(n => !n.lida).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {naoLidas > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {naoLidas}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Notificações</h3>
            {naoLidas > 0 && (
              <Button variant="ghost" size="sm" className="text-xs">
                Marcar todas como lidas
              </Button>
            )}
          </div>
          
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    notif.lida ? 'bg-background' : 'bg-muted/50'
                  } hover:bg-muted`}
                >
                  <div className="flex items-start gap-2">
                    {!notif.lida && (
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                    )}
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{notif.mensagem}</p>
                      <p className="text-xs text-muted-foreground">{notif.tempo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <Button variant="outline" className="w-full" size="sm">
            Ver todas as notificações
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
