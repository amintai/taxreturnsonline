// hooks/useEmailJS.js
import { useState } from "react";
import emailjs from "@emailjs/browser";

const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

  const sendEmail = (formRef) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    return emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
          return result;
        },
        (err) => {
          setError(err);
          setLoading(false);
          throw err;
        }
      );
  };

  return { loading, error, success, sendEmail };
};

export default useEmailJS;
