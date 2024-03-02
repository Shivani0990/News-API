import { useState, useEffect, createContext } from 'react'
import './App.css'
import { Grid, Pagination, Backdrop, CircularProgress } from '@mui/material';
import CardComponent from './Component/CardComponent.jsx';
import Header from './Component/Header.jsx';
import Category from './Component/Category.jsx';
export const LanguageContext = createContext('en')
import SortBy from './Component/SortBy.jsx'

function App() {
  const [backdrop, setBackdrop] = useState(false)
  const [language, setLanguage] = useState("en")
  const [newsList, setNewsList] = useState([true])
  const [category, setCategory] = useState("Business")
  const [shortBy, setSortBy] = useState("publishedAt")
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch(`https:newsapi.org/v2/everything?q=${category}&apiKey=18fc95f877b84bc3b5334d36c71220c1&pageSize=20&language=${language}&page=${page}&sortBy=${shortBy}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setBackdrop(false)
        return setNewsList(data.articles)
      })
  }, [language, page, category, shortBy])
  function setLanguageClick() {
    if (language === "en") {
      setBackdrop(true)
      setLanguage("es")
    }
    else {
      setLanguage("en")
    }
  }
  function handleChanagePage(event, value) {
    window.scrollTo(0, 0)
    setPage(value)
    setBackdrop(true)
  }
  function changeCategory(categorys) {
    setCategory(categorys)
    setBackdrop(true)
  }
  function handleChange(event) {
    setBackdrop(true)
    setSortBy(event.target.value);
  }


  return (
    <>
      <SortBy shortBy={shortBy} handleChange={handleChange} />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <LanguageContext.Provider value='language'>
        <Header setLanguaseClick={setLanguageClick} language={language} />
        <Category changeCategory={changeCategory} />
        <Grid container spacing={4}>
          {newsList.length && newsList.map((newsItem, index) => {
            return <Grid item xs={4} key={index}>
              <CardComponent newsItem={newsItem} />
            </Grid>
          })}
        </Grid>
      </LanguageContext.Provider >
      <Pagination count={5} shape="rounded" onChange={handleChanagePage} />
    </>
  )
}

export default App