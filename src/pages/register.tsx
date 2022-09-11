import { NextPage } from "next";
import { MouseEvent, useState } from "react";
import { Input } from "~/components/Input";
import { AppLayout } from "~/layouts/AppLayout";
import { Button } from "~/components/Button";
import { api } from "~/utils/http";

const RegisterPage: NextPage = () => {
  const [items, setItems] = useState<any>({});
  const [error, setError] = useState("");

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/users", items);

      console.log(res.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AppLayout withHeader={false}>
      <form className="flex flex-col space-y-2 px-10" method="post">
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
        <h3 className="text-slate-50 text-xs text-center">{error}</h3>
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </AppLayout>
  );
};

export default RegisterPage;
