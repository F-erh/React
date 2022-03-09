import { createSelector } from '@reduxjs/toolkit'
import { Catalogo } from 'business/domain/entity/catalogo'

import { State } from '..'

export const getRoot = (state: State) => {
  return state.produtos
}

export const getProdutos = createSelector([getRoot], state => {
  return state.produtos
})

export const getFilteredProdutosbyName = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.searchByName(produtos, state.term)
  }
)
export const getFilteredProdutosbyTag = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.filterByTag(produtos, state.term)
  }
)
export const getFilteredProdutosbyIndustrias = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.filterByIndustrias(produtos, state.term)
  }
)
export const getFilteredProdutosbyMarcas = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.filterByIMarcas(produtos, state.term)
  }
)
export const getFilteredProdutosbyCategorias = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.filterByCategorias(produtos, state.term)
  }
)
export const getFilteredProdutosbySubcategorias = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return Catalogo.filterBySubcategorias(produtos, state.term)
  }
)

export const getPaginatedProdutos = createSelector(
  [getRoot, getFilteredProdutos],
  (state, produtos) => {
    return produtos.slice(0, state.offset)
  }
)

export const getHasNextPage = createSelector(
  [getRoot, getFilteredProdutos],
  (state, produtos) => {
    return produtos.length > state.offset
  }
)
