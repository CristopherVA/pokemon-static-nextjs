import React, { FC } from 'react';
import { Card, Grid } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
    pokeId: number;
}

export const PokemonCardFavorite:FC<Props> = ({ pokeId }) => {
  return (
    <Grid xs={6} md={2} lg={1} key={pokeId}>
    <Link href={`/pokemon/${pokeId}`} passHref>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
          width="100%"
          height={140}
        />
      </Card></Link>
  </Grid>
  )
}
