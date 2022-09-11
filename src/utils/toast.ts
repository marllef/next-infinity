import { toast } from "react-toastify";

export const showSuccess = (message: string) =>
  toast(message, {
    theme: "colored",
    toastId: "Success Toast",
    position: "bottom-center",
    type: "success",
  });

export const showError = (message: string) =>
  toast(message, {
    theme: "colored",
    toastId: "Success Toast",
    position: "bottom-center",
    type: "error",
  });
