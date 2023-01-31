import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../auth/routes/AppRoutes";
import { JournalRoute } from "../journal/routes/JournalRoute";
export const RouteApp = () => {
    return (
        <Routes>
            {/* login y registro */}
            <Route path="/auth/*" element={<AppRoutes />} />
            {/* JournalApp */}
            <Route path="/*" element={<JournalRoute />} />
            <Route />
        </Routes>
    );
};
