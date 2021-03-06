import types from '../actions/types'

import Frames from '../components/products/frames'
import FCs from '../components/products/fcs'
import Motors from '../components/products/motors'
import Esc from '../components/products/esc'
import Cams from '../components/products/camera'
import Vtx from '../components/products/vtx'
import Props from '../components/products/props'
import Pdb from '../components/products/pdb'
import Antenna from '../components/products/antenna'
import Receiver from '../components/products/receiver'


const initialState = {
  products: []
}

const presetMasterList = {
  'uav_futures_100': [
  'Lisam LS-210',
  'SP Racing F3',
  'LHI DX2205 2300KV',
  
  ],
  '30a_alien': [
    'ImpluseRC Alien',
    'SP Racing F3 with OSD',
    'Hyetrain 2306 2450 kv Motor'
  ]
}

const allProducts = [Frames, FCs, Motors, Esc, Cams, Vtx, Props, Pdb, Antenna, Receiver]

function selectForPreset(presetName) {
  const productList = presetMasterList[ presetName ]
  const productsSelected = []
  allProducts.forEach((productType) => {
    Object.keys(productType).forEach((productKey) => {
      const product = productType[ productKey ]
      if(productList.indexOf(product.name) !== -1) {
        productsSelected.push(product)
      }
    })
  })

  return productsSelected
}

function productsReducer(state, action) {
  if(typeof state === 'undefined') {
    return Object.assign({}, initialState)
  }
  switch (action.type) {
    case types.PRODUCT_SELECTED:
      return Object.assign({}, state, {
        products: [...state.products, action.product]
      })
    case types.PRODUCT_DESELECTED:
      const products = [...state.products]
      const index = products.findIndex((product) => {
        return product.name === action.product.name
      })
      products.splice(index, 1)
      return Object.assign({}, state, {
        products
      })
      case types.PRODUCT_PRESET:
      const selected = selectForPreset(action.name) 
      return Object.assign({}, state, {
        products: selected
      })
    default:
      return state
  }
}


export default productsReducer;