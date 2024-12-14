
const FetchButton = () => {
  const handleFetch = async () => {
    try {
      const response = await fetch("http://16.170.247.41/api/web/v1/auth/send-verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "+9647809629382",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response:", data);
      alert("Verification code sent successfully!");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to send verification code.");
    }
  };

  return (
    <button
      onClick={handleFetch}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Send Verification Code
    </button>
  );
};

export default FetchButton;
