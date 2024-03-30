import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Article {
  url: string
  summary: string
}

export interface ArticleState {
  articles: Article[]
}

const initialState: ArticleState = {
  articles: [],
}

const localStorageData = localStorage.getItem('articles')
if (localStorageData) {
  try {
    const parsedData = JSON.parse(localStorageData)
    if (Array.isArray(parsedData)) {
      initialState.articles = parsedData
    } else {
      console.error('Data in localStorage is not an array.')
    }
  } catch (error) {
    console.error('Error parsing data from localStorage:', error)
  }
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles = [action.payload, ...state.articles]
      localStorage.setItem('articles', JSON.stringify(state.articles))
    },
    removeArticle: (state, action: PayloadAction<number>) => {
      state.articles = state.articles.filter((_, index) => index !== action.payload)
      localStorage.setItem('articles', JSON.stringify(state.articles))
    },
    clearArticles: (state) => {
      state.articles = []
      localStorage.setItem('articles', JSON.stringify(state.articles))
    },
    syncWithLocalStorage: (state) => {
      const localStorageArticles = JSON.parse(localStorage.getItem('articles') || '[]')
      state.articles = localStorageArticles
    },
  },
})

export const { addArticle, removeArticle, clearArticles, syncWithLocalStorage } =
  articleSlice.actions

export default articleSlice.reducer
