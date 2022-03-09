import { ProdutoModel } from '../../../models/produto'

import { Catalogo } from '..'

describe('testes do catalogo', () => {
  const data: ProdutoModel[] = [
    {
      name: 'sabao',
      sku: '30',
      marca: 'generica',
      categoria: 'limpeza',
      subcategoria: 'geral',
      industria: 'indutrial',
      tag: '52'
    },
    {
      name: 'sabao em po',
      sku: '31',
      marca: 'omo',
      categoria: 'limpeza',
      subcategoria: 'domestica',
      industria: 'produtos',
      tag: '50'
    },
    {
      name: 'sabao liquido',
      sku: '32',
      marca: 'tixan',
      categoria: 'roupas',
      subcategoria: 'pessoal',
      industria: 'nacional',
      tag: '52'
    },
    {
      name: 'detergente',
      sku: '33',
      marca: 'ype',
      categoria: 'louça',
      subcategoria: 'geral',
      industria: 'pratos',
      tag: '53'
    },
    {
      name: 'amaciante',
      sku: '32',
      marca: 'baby soft',
      categoria: 'roupas',
      subcategoria: 'pessoal',
      industria: 'nacional',
      tag: '52'
    },
    {
      name: 'desinfetante',
      sku: '34',
      marca: 'casa',
      categoria: 'limpeza',
      subcategoria: 'geral',
      industria: 'industrial',
      tag: '52'
    }
  ]
  // encontra todos os produtos com o nome de sabao
  test('filter by Name', () => {
    const result = [
      {
        name: 'sabao',
        sku: '30',
        marca: 'generica',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'indutrial',
        tag: '52'
      }
    ]
    expect(Catalogo.searchByName(data, 'sabao')).toEqual(result)
  })
  // encontra todos os produtos com o nome de detergente
  test('filter by Name', () => {
    const result = [
      {
        name: 'detergente',
        sku: '33',
        marca: 'ype',
        categoria: 'louça',
        subcategoria: 'geral',
        industria: 'pratos',
        tag: '53'
      }
    ]
    expect(Catalogo.searchByName(data, 'detergente')).toEqual(result)
  })
  // Busca vazia não retorna nada
  test('filter by Name', () => {
    const result = [
      {
        name: '',
        sku: '',
        marca: '',
        categoria: '',
        subcategoria: '',
        industria: '',
        tag: ''
      }
    ]
    expect(Catalogo.searchByName(data, '')).toEqual(result)
  })

  // Busca pela tag: encontra todos com a tag 52
  test('filter by Tag', () => {
    const result = [
      {
        name: 'desinfetante',
        sku: '34',
        marca: 'casa',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'industrial',
        tag: '52'
      }
    ]
    expect(Catalogo.filterByTag(data, '52')).toEqual(result)
  })

  // Busca pela Industria: encontra todos os produtos da mesma industria (nacional)
  test('filter by Industrias', () => {
    const result = [
      {
        name: 'sabao liquido',
        sku: '32',
        marca: 'tixan',
        categoria: 'roupas',
        subcategoria: 'pessoal',
        industria: 'nacional',
        tag: '52'
      }
    ]
    expect(Catalogo.filterByIndustrias(data, 'nacional')).toEqual(result)
  })

  // Busca pela Marca: encontra todos os produtos da mesma marca (generica)
  test('filter by Marcas', () => {
    const result = [
      {
        name: 'sabao',
        sku: '30',
        marca: 'generica',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'indutrial',
        tag: '52'
      }
    ]
    expect(Catalogo.filterByIMarcas(data, 'generica')).toEqual(result)
  })

  // Busca pela Categoria: encontra todos os produtos da mesma categoria (limpeza)
  test('filter by Categorias', () => {
    const result = [
      {
        name: 'sabao',
        sku: '30',
        marca: 'generica',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'indutrial',
        tag: '52'
      }
    ]
    expect(Catalogo.filterByCategorias(data, 'limpeza')).toEqual(result)
  })

  // Busca pela subcategoria: encontra todos os produtos da mesma subcategoria (geral)
  test('filter by SubCategorias', () => {
    const result = [
      {
        name: 'sabao',
        sku: '30',
        marca: 'generica',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'indutrial',
        tag: '52'
      }
    ]
    expect(Catalogo.filterBySubcategorias(data, 'geral')).toEqual(result)
  })
})


  // Busca vazia
  test('filter by Name', () => {
    const result = [
      {
        name: 'sabao',
        sku: '30',
        marca: 'generica',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'indutrial',
        tag: '52'
      },
      {
        name: 'sabao em po',
        sku: '31',
        marca: 'omo',
        categoria: 'limpeza',
        subcategoria: 'domestica',
        industria: 'produtos',
        tag: '50'
      },
      {
        name: 'sabao liquido',
        sku: '32',
        marca: 'tixan',
        categoria: 'roupas',
        subcategoria: 'pessoal',
        industria: 'nacional',
        tag: '52'
      },
      {
        name: 'detergente',
        sku: '33',
        marca: 'ype',
        categoria: 'louça',
        subcategoria: 'geral',
        industria: 'pratos',
        tag: '53'
      },
      {
        name: 'amaciante',
        sku: '32',
        marca: 'baby soft',
        categoria: 'roupas',
        subcategoria: 'pessoal',
        industria: 'nacional',
        tag: '52'
      },
      {
        name: 'desinfetante',
        sku: '34',
        marca: 'casa',
        categoria: 'limpeza',
        subcategoria: 'geral',
        industria: 'industrial',
        tag: '52'
      },
      {
        name: '',
        sku: '',
        marca: '',
        categoria: '',
        subcategoria: '',
        industria: '',
        tag: ''
      }
    ]
    expect(Catalogo.searchByName(data, '')).toEqual(result)
  })