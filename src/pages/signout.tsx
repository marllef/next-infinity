import { NextPage } from "next";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignoutPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const sair = async () =>
      await signOut({
        redirect: false,
      });

    sair()
      .then(() => router.push("/"))
      .catch(console.error);
  }, []);

  return <div>Saindo</div>;
};

export default SignoutPage;
