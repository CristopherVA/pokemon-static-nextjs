import  { FC } from 'react'
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    id: number;
    name: string;
    img: string;
}

export const PokemonCard: FC<Props> = ({id, name, img}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`)
    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card onClick={ onClick } hoverable clickable>
            <Card.Body css={{p: 1}}>
            <Card.Image 
                src={img} alt={name} width='100%' height={140}
            />
            </Card.Body>
            <Card.Footer>
            <Row justify='space-between'>
                <Text transform='capitalize'>{name}</Text>
                <Text>#{id}</Text>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
