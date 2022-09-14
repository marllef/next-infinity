import { FormEvent, MouseEvent, useState } from "react";
import { InternalError } from "~/utils/helpers/InternalError";
import { api } from "~/utils/http";
import { showError } from "~/utils/toast";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

export const CreatePost = () => {
  const [itens, setItens] = useState<any>({});
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log(itens);
    try {
      const response = await api.post("/posts", { ...itens });
      console.log(response.data);
    } catch (err: any) {
      const error = new InternalError(err);
      showError(error.message);
    }
  };

  const handleCancel = () => {
    setItens({});
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex w-full flex-col space-y-2 max-w-lg pb-4">
      {open ? (
        <>
          <Input
            className="w-full"
            value={itens.title || ""}
            label="Título"
            placeholder="Título"
            onChange={(event) =>
              setItens({ ...itens, title: event.target.value })
            }
          />
          <TextArea
            label="Descrição"
            value={itens.description || ""}
            placeholder="Escreva aqui..."
            onChange={(event) =>
              setItens({ ...itens, description: event.target.value })
            }
          />
          <div className="flex w-full space-x-3 justify-end">
            <Button className=" bg-red-600 w-full" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button className="bg-emerald-600 w-full" onClick={handleSubmit}>
              Publicar
            </Button>
          </div>
        </>
      ) : (
        <Button onClick={handleOpen}>Nova Postagem</Button>
      )}
    </div>
  );
};
