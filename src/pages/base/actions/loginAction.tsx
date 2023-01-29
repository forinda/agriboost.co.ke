import { ActionFunctionArgs } from "react-router-dom";

export default function loginAction ({ request }: ActionFunctionArgs) {
    return {
        title: 'Login',
    };
}
