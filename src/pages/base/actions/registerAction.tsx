import { AxiosError } from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { publicApi } from "../../../api/axios";

export default async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log({ data, act: "Register Action" });

  try {
    await publicApi.post("/auth/sign-up", data);
    return redirect("/account/activate", 201);
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response!.data };
    }

    return { error };
  }
}