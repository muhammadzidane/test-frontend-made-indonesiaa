// React Router DOM
import { Outlet } from "react-router-dom";

const Content: React.FC = () => (
  <div className="flex-1 bg-secondary">
    <Outlet />
  </div>
);

export default Content;
