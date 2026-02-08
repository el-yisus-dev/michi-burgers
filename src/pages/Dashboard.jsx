import { useState } from "react";
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Select from "../components/Select";
import Input from "../components/Input";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 40 }}>

      {/* Botón que abre el modal */}
      <Button onClick={() => setOpen(true)}>
        Nuevo usuario
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Crear usuario"
      >
        <Card>
          <CardHeader>
            <CardTitle>Nuevo usuario</CardTitle>
            <CardDescription>
              Completa el formulario para crear un usuario
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div style={{ padding: 40, maxWidth: 400 }}>
              <Input
                label="Nombre"
                placeholder="Escribe tu nombre"
              />

              <Input
                label="Correo"
                type="email"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div style={{ padding: 40, maxWidth: 400 }}>
              <Select
                label="Tipo de usuario"
                placeholder="Selecciona un rol"
                options={[
                  { value: "admin", label: "Administrador" },
                  { value: "editor", label: "Editor" },
                  { value: "viewer", label: "Viewer" },
                ]}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button>Guardar</Button>
          </CardFooter>



        </Card>
      </Modal>
    </div>
  );
}
