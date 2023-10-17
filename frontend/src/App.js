import { Routes, Route } from "react-router-dom";

// layouts
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserLayout from "./layouts/UserLayout";

// pages
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import NewNote from "./components/forms/NewNote";
import NoteView from "./components/NoteView";
import Dashboard from "./components/Dashboard";
import AuthCheck from "./components/AuthCheck";

const PageNotFound = () => {
    return <div>PageNotFound</div>;
};

const App = () => {
    return (
        <Routes>
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="admin" element={<AppLayout />}>
                <Route index element={<AuthCheck />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="notes">
                    <Route index element={<NoteView />} />
                    <Route path="add" element={<NewNote />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route path="/" element={<UserLayout />}>
                <Route index element={<NoteView />} />
            </Route>
        </Routes>
    );
};

export default App;
