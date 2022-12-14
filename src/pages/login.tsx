import { GetServerSideProps, NextPage } from "next";
import { MouseEvent, useEffect, useState } from "react";
import { Input } from "~/components/Input";
import { AppLayout } from "~/layouts/AppLayout";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]";
import { InternalError } from "~/utils/helpers/InternalError";
import { showError, showSuccess } from "~/utils/toast";
import { useRouter } from "next/router";
import { AuthLogo } from "~/components/AuthLogo";
import { Button } from "~/components/Button";
import { getToken } from "next-auth/jwt";

const LoginPage: NextPage = () => {
  const [items, setItems] = useState<any>({});
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") router.push("/");
  }, [session]);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      if (!items.email || !items.password)
        throw new Error("Informe email e senha");

      const res = await signIn("credentials", {
        email: items.email,
        password: items.password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) throw new Error(res?.error);

      showSuccess("Autenticado com sucesso!");

      router.push("/");
    } catch (err: any) {
      const error = new InternalError(err);
      showError(error.message);
    }
  };

  return (
    <AppLayout pageTitle="Infinity | Login">
      <form
        className="flex h-full flex-col max-w-md mx-auto space-y-3 px-10"
        method="post"
      >
        <AuthLogo />

        <div className="w-full text-center text-3xl pb-4 uppercase">
          Fazer Login
        </div>
        <Input
          name="email"
          placeholder="Email"
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
        <Button type="submit" onClick={handleSubmit}>
          Entrar
        </Button>
      </form>
    </AppLayout>
  );
};

export default LoginPage;
