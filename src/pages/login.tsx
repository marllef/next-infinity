import { NextPage } from "next";
import { MouseEvent, useState } from "react";
import { Input } from "~/components/Input";
import { AppLayout } from "~/layouts/AppLayout";
import { getCsrfToken, signIn } from "next-auth/react";

const LoginPage: NextPage = ({ csrfToken }: any) => {
  const [items, setItems] = useState<any>({});

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: items.email,
        password: items.password,
        redirect: false,
      });
      console.log(res)
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <AppLayout withHeader={false}>
      <form className="flex flex-col space-y-2 px-10" method="post">
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
          placeholder='Senha'
          onChange={(evnt) =>
            setItems({
              ...items,
              password: evnt.target.value,
            })
          }
        />
        <button
          className="bg-violet-600 rounded px-2 py-1"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </AppLayout>
  );
};

export default LoginPage;

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
