import {
	Alert,
	useRootStore,
} from "@/components/shared/providers/RootProvider";

let timeoutID: any;
export default function useAlert() {
	const { alert, setAlert } = useRootStore();
	const isError = alert.type === "error";

	const dismissAlert = () => {
		setAlert({ ...alert, show: false });
	};

	const showAlert = ({ message, type }: Alert) => {
		setAlert({ show: true, message, type });
	};

	const showAndHideAlert = ({ message, type }: Alert) => {
		clearTimeout(timeoutID);
		showAlert({ message, type });
		timeoutID = setTimeout(() => {
			dismissAlert();
		}, 5000);
	};

	return { isError, dismissAlert, showAndHideAlert, showAlert, alert };
}
