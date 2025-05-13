
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="text-center max-w-md">
        <Eye className="w-16 h-16 text-amber-500 mx-auto mb-6 eye-glow" />
        <h1 className="text-5xl font-bold mb-4 text-slate-200">404</h1>
        <p className="text-xl text-slate-400 mb-6">
          The Eye of Odin cannot see the page you're looking for
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all"
        >
          Return to the Watchful Eye
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
