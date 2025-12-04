import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToaster = () => {
  const showToast = (type = "success", message) => {
    const options = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };

    if (type === "success") toast.success(message, options);
    else if (type === "error") toast.error(message, options);
    else if (type === "info") toast.info(message, options);
    else if (type === "warning") toast.warn(message, options);
  };
  return { showToast };
};

export default useToaster;