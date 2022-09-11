import { NextPage } from "next";
import { MouseEvent, useState } from "react";
import { Input } from "~/components/Input";
import { AppLayout } from "~/layouts/AppLayout";
import { Button } from "~/components/Button";
import { api } from "~/utils/http";
import { showError, showSuccess } from "~/utils/toast";
import { InternalError } from "~/utils/helpers/InternalError";
import { useRouter } from "next/router";
import { AuthLogo } from "~/components/AuthLogo";

const RegisterPage: NextPage = () => {
  const [items, setItems] = useState<any>({});
  const router = useRouter();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (items.password === items.confirmPassword) {
        const res = await api.post("/users", items);

        if (res.status === 201) showSuccess(res.data.message);

        setItems({});

        return await router.push("/login");
      }
      throw new InternalError("As senhas não coincidem.");
    } catch (err: any) {
      const error = new InternalError(err);
      showError(error.message);
    }
  };

  return (
    <AppLayout withHeader={false}>
      <form
        className="flex h-full flex-col max-w-md mx-auto space-y-3 px-10"
        method="post"
      >
        <AuthLogo />
        <div className="w-full text-center text-3xl pb-4 uppercase">
          Criar Conta
        </div>
        <Input
          name="name"
          placeholder="Nome"
          value={items?.name || ""}
          onChange={(evnt) =>
            setItems({
              ...items,
              name: evnt.target.value,
            })
          }
        />
        <Input
          name="email"
          placeholder="Email"
          type={"email"}
          value={items?.email || ""}
          onChange={(evnt) =>
            setItems({
              ...items,
              email: evnt.target.value,
            })
          }
        />
        <Input
          name="password"
          value={items?.password || ""}
          type={"password"}
          placeholder="Senha"
          onChange={(evnt) =>
            setItems({
              ...items,
              password: evnt.target.value,
            })
          }
        />
        <Input
          name="confirm_password"
          value={items?.confirmPassword || ""}
          type={"password"}
          placeholder="Confirmar Senha"
          onChange={(evnt) =>
            setItems({
              ...items,
              confirmPassword: evnt.target.value,
            })
          }
        />
        <Button type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </form>
    </AppLayout>
  );
};

export default RegisterPage;
