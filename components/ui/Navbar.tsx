import { FC, useState, useEffect } from 'react';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from "next/image";
import NextLink from "next/link";
import { localFavorite } from "../../utils";

export const Navbar: FC = () => {

    const { theme } = useTheme();
  
    const [countPoke, setCountPoke] = useState<number[]>([]);

    useEffect(() => {
      setCountPoke(localFavorite.pokemons)
    },[])


  return (
   <div style={{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0px 20px',
    backgroundColor: theme?.colors.gray900.value
   }}>

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt="logo de la app"
            width={70}
            height={70}
        />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </Link>
      </NextLink>

        <Spacer css={{flex: 1}} />

     <NextLink href='/favorites'>
      <Link>
        <Text color="white"> <span>{ countPoke.length }</span> Favoritos</Text>
      </Link>
     </NextLink>
   </div>
  )
}
