import { ApiInstance } from "@/utils";
import { AccountManager, Advertiser, Client, FieldAuditor } from "@/types";
import useCredentials from "./useCredentials";

export default function useUserManagement() {
	const { accessToken } = useCredentials();

	const createUser = async (data: AccountManager | FieldAuditor | Client) => {
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

	const getUsers = async (page: number) => {
		try {
			const response = await ApiInstance.get(`/users?page=${page}`, {
				headers: {
					"auth-token": accessToken,
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const getClients = async (page: number, search: string) => {
		try {
			const response = await ApiInstance.get(
				`/users/clients?page=${page}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const getAccountManagers = async (page: number, search: string) => {
		try {
			const response = await ApiInstance.get(
				`/users/account-managers?page=${page}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const getFieldAuditors = async (page: number, search: string) => {
		try {
			const response = await ApiInstance.get(
				`/users/field-auditors?page=${page}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	const updateUser = async (
		userId: number,
		data: AccountManager | FieldAuditor | Client
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

	return {
		createUser,
		getUsers,
		updateUser,
		getClients,
		getAccountManagers,
		getFieldAuditors,
	};
}
