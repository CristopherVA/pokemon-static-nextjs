import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorite, FavoritePokemon } from '../../components/ui'
import localPokemon from '../../utils/localPokemon'

const Favorites = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemon(localPokemon.pokemons)
  }, [])

  return (
    <Layout title="Pokemons - Favorites">
      {
        favoritePokemon.length === 0
          ? ( <NoFavorite /> )
          : ( <FavoritePokemon pokemons={favoritePokemon} /> )
      }
    </Layout>
  )
}

export default Favorites