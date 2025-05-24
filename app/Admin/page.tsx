"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Archive, MessageSquare, Mail, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock data for messages
const mockMessages = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@example.com",
    subject: "Consulta sobre servicios web",
    message:
      "Me gustaría recibir información sobre sus servicios de desarrollo web.",
    date: "2023-05-15T10:30:00",
    read: true,
  },
  {
    id: 2,
    name: "Ana García",
    email: "ana@example.com",
    subject: "Presupuesto para campaña",
    message:
      "Necesito un presupuesto para una campaña en redes sociales para mi empresa.",
    date: "2023-05-14T15:45:00",
    read: false,
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos@example.com",
    subject: "Colaboración en proyecto",
    message:
      "Me gustaría hablar sobre una posible colaboración en un proyecto de e-commerce.",
    date: "2023-05-13T09:15:00",
    read: false,
  },
];

// Mock data for portfolio items
const mockPortfolioItems = [
  {
    id: 1,
    title: "Rediseño E-commerce",
    client: "Moda Express",
    category: "Web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    visible: true,
  },
  {
    id: 2,
    title: "Campaña Social Media",
    client: "Café Orígenes",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    visible: true,
  },
  {
    id: 3,
    title: "Identidad Corporativa",
    client: "TechStart",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    visible: false,
  },
];

// Mock data for blog entries
const mockBlogEntries = [
  {
    id: 1,
    title: "10 tendencias de diseño web para 2023",
    excerpt:
      "Descubre las tendencias más importantes en diseño web para este año...",
    date: "2023-04-20T12:00:00",
    status: "published",
  },
  {
    id: 2,
    title: "Cómo mejorar el SEO de tu sitio web",
    excerpt:
      "Guía práctica para optimizar el posicionamiento de tu web en buscadores...",
    date: "2023-04-10T14:30:00",
    status: "draft",
  },
];

const Admin = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState(mockMessages);
  const [portfolioItems, setPortfolioItems] = useState(mockPortfolioItems);
  const [blogEntries /*,setBlogEntries*/] = useState(mockBlogEntries);
  const router = useRouter();

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Function to mark message as read
  const markAsRead = (id: number) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
    toast({
      title: "Mensaje marcado como leído",
      description: "El mensaje ha sido marcado como leído.",
    });
  };

  // Function to delete message
  const deleteMessage = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    toast({
      title: "Mensaje eliminado",
      description: "El mensaje ha sido eliminado correctamente.",
    });
  };

  // Function to forward message to email
  const forwardToEmail = (email: string, subject: string) => {
    // This would be integrated with a real email service
    console.log(`Forwarding message to: ${email}, Subject: ${subject}`);
    toast({
      title: "Mensaje reenviado",
      description: "El mensaje ha sido reenviado al correo de información.",
    });
  };

  // Function to toggle portfolio item visibility
  const togglePortfolioVisibility = (id: number) => {
    setPortfolioItems(
      portfolioItems.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
    toast({
      title: "Visibilidad actualizada",
      description: "La visibilidad del proyecto ha sido actualizada.",
    });
  };

  // Function to delete portfolio item
  const deletePortfolioItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id));
    toast({
      title: "Proyecto eliminado",
      description: "El proyecto ha sido eliminado del portafolio.",
    });
  };

  return (
    <div className="pt-28 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-dlab-dark-blue">
            Panel de Administración
          </h1>
          <Button onClick={() => router.push("/")} variant="outline">
            Volver al sitio
          </Button>
        </div>

        <Tabs defaultValue="messages">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare size={16} /> Mensajes
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <Edit size={16} /> Portafolio
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <Archive size={16} /> Blog
            </TabsTrigger>
          </TabsList>

          {/* Mensajes Tab */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare size={18} /> Mensajes de Usuarios
                </CardTitle>
                <CardDescription>
                  Gestiona los mensajes recibidos a través del formulario de
                  contacto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Estado</TableHead>
                        <TableHead>Remitente</TableHead>
                        <TableHead>Asunto</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Fecha
                        </TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((message) => (
                        <TableRow
                          key={message.id}
                          className={!message.read ? "bg-muted/20" : ""}
                        >
                          <TableCell>
                            <span
                              className={`inline-block h-2 w-2 rounded-full ${
                                message.read ? "bg-gray-300" : "bg-dlab-orange"
                              }`}
                            ></span>
                          </TableCell>
                          <TableCell className="font-medium">
                            {message.name}
                          </TableCell>
                          <TableCell>{message.subject}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {formatDate(message.date)}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {!message.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(message.id)}
                                  title="Marcar como leído"
                                >
                                  <MessageSquare size={16} />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  forwardToEmail(message.email, message.subject)
                                }
                                title="Reenviar por correo"
                              >
                                <Mail size={16} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteMessage(message.id)}
                                title="Eliminar mensaje"
                              >
                                <Trash2 size={16} className="text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portafolio Tab */}
          <TabsContent value="portfolio">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Edit size={18} /> Gestión de Portafolio
                  </CardTitle>
                  <CardDescription>
                    Administra los proyectos que se muestran en la sección de
                    portafolio.
                  </CardDescription>
                </div>
                <Button className="bg-dlab-blue hover:bg-dlab-blue/90">
                  Nuevo Proyecto
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Proyecto</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Cliente
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Categoría
                        </TableHead>
                        <TableHead>Visible</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portfolioItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">
                            {item.title}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.client}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.category}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded ${
                                item.visible
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {item.visible ? "Visible" : "Oculto"}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  togglePortfolioVisibility(item.id)
                                }
                                title={item.visible ? "Ocultar" : "Mostrar"}
                              >
                                {item.visible ? "Ocultar" : "Mostrar"}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                title="Editar proyecto"
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deletePortfolioItem(item.id)}
                                title="Eliminar proyecto"
                              >
                                <Trash2 size={16} className="text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Archive size={18} /> Entradas del Blog
                  </CardTitle>
                  <CardDescription>
                    Gestiona las entradas del blog de la empresa.
                  </CardDescription>
                </div>
                <Button className="bg-dlab-blue hover:bg-dlab-blue/90">
                  Nueva Entrada
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Fecha
                        </TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogEntries.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell className="font-medium">
                            {entry.title}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {formatDate(entry.date)}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded ${
                                entry.status === "published"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {entry.status === "published"
                                ? "Publicado"
                                : "Borrador"}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                title="Editar entrada"
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                title="Eliminar entrada"
                              >
                                <Trash2 size={16} className="text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
