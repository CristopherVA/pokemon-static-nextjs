import React from 'react'
import { Grid } from '@nextui-org/react'
import { NextPage } from 'next';
import { PokemonCardFavorite } from './PokemonCardFavorite';

interface Props {
    pokemons: number[];
}

export const FavoritePokemon: NextPage<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start" >
            {
                pokemons.map(id => (
                    <PokemonCardFavorite key={id} pokeId={id}/>
                ))
            }
        </Grid.Container>
    )
}
