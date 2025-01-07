import { LoginData } from "@/types";
import { ApiInstance } from "@/utils";
import { AxiosError } from "axios";
export default function useAuth() {
	const login = async (data: LoginData) => {
		try {
			const response = await ApiInstance.post("/login", data);
			return response.data;
		} catch (error) {
			const err = error as AxiosError;
			throw err;
		}
	};

	return { login };
}
