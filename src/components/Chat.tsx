"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min_content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat Paguru Ai</CardTitle>
        <CardDescription>Pergunte ao nosso Pagurinho</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>RN</AvatarFallback>
                  <AvatarImage src="https://github.com/rafaaelnicacio.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>RN</AvatarFallback>
                  <AvatarImage src="https://github.com/Paguru.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "Pagurinho"}:
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2 " onSubmit={handleSubmit}>
          <Input
            placeholder="Como o marujinho pode te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
