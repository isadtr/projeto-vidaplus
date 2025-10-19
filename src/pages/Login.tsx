import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/vidaplus-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRecovery, setIsRecovery] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login
    navigate("/dashboard");
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de recuperação de senha
    alert("Link de recuperação enviado para seu email!");
    setIsRecovery(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <img src={logo} alt="VidaPlus Logo" className="h-40 w-auto" />
          </div>
          <CardTitle className="text-2xl">
            {isRecovery ? "Recuperar Senha" : "Bem-vindo!"}
          </CardTitle>
          <CardDescription>
            {isRecovery
              ? "Digite seu email para receber o link de recuperação"
              : "Entre com suas credenciais para acessar o sistema"}
          </CardDescription>
        </CardHeader>

        <form onSubmit={isRecovery ? handleRecovery : handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {!isRecovery && (
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              {isRecovery ? "Enviar Link de Recuperação" : "Entrar"}
            </Button>

            <button
              type="button"
              onClick={() => setIsRecovery(!isRecovery)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isRecovery ? "Voltar para login" : "Esqueci minha senha"}
            </button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
