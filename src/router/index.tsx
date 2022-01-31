import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import DashboardScreen from "screens/dashboard";
import LoginScreen from "screens/login";
import LoggedInTemplate from "screens/loggedInTemplate";
import ProjectsScreen from "screens/projects";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={(
                    <LoggedInTemplate>
                        <DashboardScreen />
                    </LoggedInTemplate>
                )} />
                <Route path="/projects" element={(
                    <LoggedInTemplate>
                        <ProjectsScreen />
                    </LoggedInTemplate>
                )} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<Navigate to="/" replace/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;