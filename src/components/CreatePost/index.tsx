import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useSession } from "next-auth/react";
import { FormEvent, MouseEvent, useState } from "react";
import { InternalError } from "~/utils/helpers/InternalError";
import { api } from "~/utils/http";
import { showError } from "~/utils/toast";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import colors from "tailwindcss/colors";

export const CreatePost = () => {
  const [itens, setItens] = useState<any>({});
  const [open, setOpen] = useState(false);
  const session = useSession();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log(itens);
    try {
      if (!itens.title) throw new Error("Informe um título para a publicação.");

      const response = await api.post("/posts", { ...itens });

      handleCancel();
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

  if (session.status === "unauthenticated") return null;

  return (
    <div
      className={`flex w-full mx-auto flex-col px-4  space-y-2 ${
        open ? "pb-3" : ""
      } `}
    >
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
        <>
          <Button className="hidden sm:block" onClick={handleOpen}>
            Nova Postagem
          </Button>
          <div className="sm:hidden">
            <Fab
              onClick={handleOpen}
              variant="circular"
              color="primary"
              sx={{
                position: "absolute",
                bottom: 50,
                right: 16,
                bgcolor: colors.violet[500],
                "&:hover": {
                  bgcolor: colors.violet[600],
                },
              }}
            >
              <Add />
            </Fab>
          </div>
        </>
      )}
    </div>
  );
};
