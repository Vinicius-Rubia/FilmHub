import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./assets/styles/themes/default"
import { Router } from "./routes/router"
import { useDispatch } from "react-redux"
import { getApiConfiguration, getGenres } from "./redux/homeSlice"
import { fetchDataFromAPI } from "./services/api"
import { useEffect } from "react";

import GlobalStyle from "./assets/styles/global"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = async() => {
    const response = await fetchDataFromAPI("/configuration");
    
    const url = {
      backdrop: response.images.secure_base_url + "original",
      poster: response.images.secure_base_url + "original",
      profile: response.images.secure_base_url + "original",
    }

    dispatch(getApiConfiguration(url));
  }

  const genresCall = async () => {
    let promises: any = []; 
    let endPoints = ["tv", "movie"];
    let allGenres: any = {};

    endPoints.forEach((url: any) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((( item: any) => (allGenres[item.id] = item)));
    });

    dispatch(getGenres(allGenres));
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
