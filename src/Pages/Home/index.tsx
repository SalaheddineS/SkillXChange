import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Divider,
    Flex,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
  import Carousel from '../../SingleComponents/Carousel'
  import UserCard from '../../SingleComponents/UserCard'
  import HeroHeader from '../../SingleComponents/HeroHeader'
  import HeroHeader2 from '../../SingleComponents/HeroHeader2'
  const mockdata = [
    {
      title: 'Extreme performance',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
      icon: IconGauge,
    },
    {
      title: 'Privacy focused',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
      icon: IconUser,
    },
    {
      title: 'No third parties',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
      icon: IconCookie,
    },
  ];
  const userinfo1={
    image: "https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271__480.jpg",
    avatar: "https://media.licdn.com/dms/image/D4E03AQGmtJUqmCtGnA/profile-displayphoto-shrink_800_800/0/1664536367171?e=1686787200&v=beta&t=kXWxWB5AJz1KPqcTMo00ssD2L63ik2xSfzerJmj_KuA",
    name: "Dahibi Kenza",
    job: "Fullstack engineer",
    stats: [
      {
        value: "34K",
        label: "Followers"
      },
      {
        value: "187",
        label: "Follows"
      },
      {
        value: "1.6K",
        label: "Posts"
      }
    ]
  }
  const userinfo2={
    image: "https://e0.pxfuel.com/wallpapers/61/216/desktop-wallpaper-futuristic-city-anime-futuristic-city.jpg",
    avatar: "https://media.licdn.com/dms/image/C4E03AQFi0BqRyls7JA/profile-displayphoto-shrink_800_800/0/1658003345705?e=1686787200&v=beta&t=4PyOHFVMRnrRs7nsXBpE4sDA4_3mVM2XhkDKBsv2aJA",
    name: "Morchid Salaheddine",
    job: "Backend Engineer",
    stats: [
      {
        value: "34K",
        label: "Followers"
      },
      {
        value: "187",
        label: "Follows"
      },
      {
        value: "1.6K",
        label: "Posts"
      }
    ]
  }
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export default function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
    return (
      <div style={{marginTop:'-7%'}}>
    <HeroHeader />
      <Container size="lg" py="xl">
        
        <Group position="center">
          <Badge variant="filled" size="lg">
            SkillXChange
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} align="center" mt="sm">
          Trade skills effortlessly
        </Title>
  
        <Text color="dimmed" className={classes.description} align="center" mt="md">
          Don't be shy , our app if fully open source , and the people are friendly here , get out your comfort zone and try it out !
        </Text>
  
        <SimpleGrid cols={3} spacing="md" mt={20} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
        <SimpleGrid cols={3} spacing="md" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
        <Divider size={10} mt={30}/>
        <Carousel />
        <Divider size={10} mt={30} mb={30}/>
        <HeroHeader2/>
        <Title order={2} className={classes.title} align="center" mt="sm" mb='md'>
          /Devs:
        </Title>
        <Flex align={'center'} justify={'space-evenly'}>
        <UserCard image={userinfo1.image} avatar={userinfo1.avatar} name={userinfo1.name} job={userinfo1.job} stats={userinfo1.stats}  />
        <UserCard image={userinfo2.image} avatar={userinfo2.avatar} name={userinfo2.name} job={userinfo2.job} stats={userinfo2.stats}  />
        </Flex>
      </Container>
      </div>
    );
  }