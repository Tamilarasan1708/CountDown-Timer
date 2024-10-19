import Swal from "sweetalert2";
import "../Css/alert.css";

const Alert = ({ title, icon }) => {
	Swal.fire({
		toast: true,
		position: "top",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		icon: icon,
		title: title,
		iconColor: "#ffffff",
		customClass: {
			container: "sweet-alert",
		},
	});
};

export default Alert;
