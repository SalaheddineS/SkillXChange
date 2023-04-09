import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,

  } from '@mantine/core';
  import { CheckIcon} from '@mantine/core';
  import image from '../../Utilities/Images/ImageCommunication.png';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: 480,
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${4} ${12}`,
    },
  }));
  
  export default function HeroBullets() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>modern</span> SkillExchange <br /> Plateform
              </Title>
              <Text color="dimmed" mt="md">
                Our skill exchange application is a platform for people to share their skills and learn new ones in a protected, secure and fun environment.
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <CheckIcon />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Open Source</b> – Our project is fully available to the public and free use
                </List.Item>
                <List.Item>
                  <b>Secured</b> – We're up to date when it comes breaches and attacks
                </List.Item>
                <List.Item>
                  <b>High quality</b> – We make sure to monitor all packages and fix bugs
                </List.Item>
              </List>
  
              <Group mt={30} >
                <Button radius="xl" size="md" className={classes.control}>
                Source code                
                </Button>
                
              </Group>
            </div>
            <Image src={image} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }