import { indigo, violet } from '@radix-ui/colors';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  AspectRatio,
  Box,
  Flex,
  Container as ZContainer,
  styled,
  Button,
  ButtonProps,
  IconButton,
  Text as TextBase,
} from 'zerogravity-ui';
import Container from '../components/Container';
import Heading from '../components/Heading';
import AffordablePrices from '../components/icons/AffordablePrices';
import PeopleFirst from '../components/icons/PeopleFirst';
import SnappyProcess from '../components/icons/SnappyProcess';
import data from '../data/content';

const darkViolet = 'hsl(256, 26%, 20%)';

const Link = styled('a', TextBase, {
  textTransform: 'uppercase',
  py: '$2',
  px: '$6',
  boxShadow: `0 0 0 2px ${violet.violet1}`,
  color: violet.violet1,
  fontFamily: 'Karla',
  margin: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  textDecoration: 'none',
  transition: 'all .25s ease-in-out',

  '&:hover': {
    bg: violet.violet1,
    color: darkViolet,
  },
});

const Text = styled(TextBase, {
  fontFamily: 'Karla',
  color: '$loContrast',
});

const Home: NextPage = () => {
  return (
    <Container>
      <Flex
        css={{
          '@bp1': {
            flexDirection: 'column',
          },
          '@bp2': {
            flexDirection: 'row-reverse',
          },
          position: 'relative',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          css={{
            '@bp1': {
              width: 375,
              height: 500,
            },
            '@bp2': {
              width: 400,
              height: 500,
            },
            position: 'relative',
          }}
        >
          <Image
            src="/static/images/image-intro-desktop.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box css={{ width: '100%', bg: darkViolet }}>
          <ZContainer
            css={{
              '@bp1': {
                maxWidth: '$80',
                mx: 'auto',
              },
              py: '$20',
            }}
          >
            <Heading
              size={{
                '@bp1': '3xl',
                '@bp2': '4xl',
              }}
              css={{ mb: '$6', color: violet.violet1, fontWeight: '$normal' }}
            >
              Humanizing you insurance.
            </Heading>
            <Text
              css={{ color: violet.violet1, fontFamily: 'Karla', mb: '$10' }}
            >
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </Text>

            <Link href="#">View Plans</Link>
          </ZContainer>
        </Box>
        <Box css={{ my: '$40' }}>
          <Heading
            size={{
              '@bp1': '3xl',
              '@bp2': '4xl',
            }}
            css={{ mb: '$14' }}
          >{`We're different`}</Heading>
          <Flex>
            <ZContainer maxWidth="xs">
              {data.features.map((item) => (
                <Flex
                  direction="column"
                  key={item.title}
                  css={{ gap: '$6', mb: '$16', alignItems: 'center' }}
                >
                  {item.icon === SnappyProcess && <SnappyProcess />}
                  {item.icon === AffordablePrices && <AffordablePrices />}
                  {item.icon === PeopleFirst && <PeopleFirst />}
                  <Heading size="xl">{item.title}</Heading>
                  <Text>{item.description}</Text>
                </Flex>
              ))}
            </ZContainer>
          </Flex>
        </Box>
        <ZContainer
          maxWidth="xs"
          css={{
            py: '$16',
            px: '$8',
            bg: darkViolet,
            display: 'flex',
            flexDirection: 'column',
            gap: '$10',
            alignItems: 'center',
          }}
        >
          <Heading size="2xl" css={{ color: violet.violet1 }}>
            Find out more about how we work
          </Heading>
          <Link css={{ maxWidth: '$40' }} href="#">
            How We Work
          </Link>
        </ZContainer>
      </Flex>
    </Container>
  );
};

export default Home;
