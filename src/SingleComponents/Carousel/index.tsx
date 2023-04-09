import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, Overlay } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 320,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
   
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    backgroundColor:'rgba(0, 0, 0, 0.23)',
    borderRadius : 10,
    padding: 10,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
        
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`,marginTop:30 }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs" >
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
     
    </Paper>
  );
}

const data = [
  {
    image:'https://img.freepik.com/free-vector/cute-astronaut-floating-with-planet-balloon-space-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3850.jpg',
        title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/cute-astronaut-with-finger-love-pose-cartoon-icon-vector-illustration-design-isolated-yellow-flat-cartoon-style_422763-284.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://img.freepik.com/free-vector/cute-astronaut-feeding-alien-cartoon-vector-icon-illustration-science-technology-icon-isolated-flat_138676-5413.jpg',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/cute-astronaut-talking-alien-with-megaphone-cartoon-vector-icon-illustration-science-technology_138676-7271.jpg',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/cute-astronaut-holding-rocket-moon-space-cartoon-vector-icon-illustration-science-technology_138676-6405.jpg',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/cute-astronaut-out-phone-space-with-moon-cartoon-vector-icon-illustration-science-technology-icon_138676-6869.jpg',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item}
      
      />
      
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}