import { ApiInstance } from "@/utils";
import { AccountManager, Advertiser, FieldAuditor } from "@/types";
import useCredentials from "./useCredentials";

export default function useUserManagement() {
	const { accessToken } = useCredentials();

	const createUser = async (
		data: AccountManager | FieldAuditor | Advertiser
	) => {
		try {
			const response = await ApiInstance.post("/users/create", data, {
				headers: {
					"auth-token": accessToken,
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const getUsers = async () => {
		try {
			const response = await ApiInstance.get("/users", {
				headers: {
					"auth-token": accessToken,
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const updateUser = async (
		userId: number,
		data: AccountManager | FieldAuditor | Advertiser
	) => {
		try {
			const response = await ApiInstance.put("/api/users/" + userId, data, {
				headers: {
					"auth-token": accessToken,
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	return { createUser, getUsers, updateUser };
}
