/* eslint-disable react/prop-types */

const Button = ({ loading = false, type = "submit", handleClick = () => {}}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={loading}
      className={`w-full py-3 rounded-md transition-colors flex justify-center items-center gap-2 ${
        loading
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-700 text-white"
      }`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
};

export default Button;
