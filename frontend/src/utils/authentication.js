import { useEffect } from "react";

function AuthenticatedApp() {
 const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = async () => await cookieStore.get("token");

  useEffect(() => {
    token().then((token) => {
      if (!token) {
        // window.location.href = "/login";
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    });
  });

  return isAuthenticated
}