import { useState, useEffect } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Jobs from "./components/Jobs";
import AllPosts from "./components/AllPosts";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handlePage() {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    const controller = new AbortController();
    async function fetchJobs() {
      const url = `https://jsearch.p.rapidapi.com/search?query=${search}&page=${page}&num_pages=10`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${API_KEY}`,
          // "X-RapidAPI-Key": `${"random"}`,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        signal: controller.signal,
      };
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data[1]);
        setJobs(result.data);
      } catch (error) {
        setError("Error fetching jobs❗❗");
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (search.length > 2) fetchJobs();

    return () => controller.abort();
  }, [search, page]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main className="homeSection">
                <Nav search={search} handleSearch={handleSearch} />
                <AllPosts />
              </main>
            }
          />
          <Route
            path="/jobs"
            element={
              <main className="jobSection">
                <Nav search={search} handleSearch={handleSearch} />
                <Jobs
                  jobs={jobs}
                  error={error}
                  loading={loading}
                  page={page}
                  handlePage={handlePage}
                />
              </main>
            }
          />
          <Route path="/:id" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
