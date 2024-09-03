import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import {Header,Footer,About,Contact,FAQ,VideoSection,QRSection,Photography,Loading,AdminContacts,AdminUpdate,AdminLayout,AdminUsers,Test,Register,Login,Logout,Home,Service,Error,
} from "./pages/index.js"
const CardSection = lazy((e) => import("./pages/CardSection"));

export const ThemeContext = createContext("light");
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/photography"
            element={
              <Suspense fallback={<Loading />}>
                <Photography />
              </Suspense>
            }
          />
          <Route
            path="/videos"
            element={
              <Suspense fallback={<Loading />}>
                <VideoSection />
              </Suspense>
            }
          />
          <Route
            path="/cards"
            element={
              <Suspense fallback={<Loading />}>
                <CardSection />
              </Suspense>
            }
          />
          <Route
            path="/qr"
            element={
              <Suspense fallback={<Loading />}>
                <QRSection />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
