import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  Container,
  Burger,
  Button,
  Transition,
  Paper,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import astro from "../../Utilities/SVGs/astro.svg";
import LightNdark from "../LightNdarkModes";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const HEADER_HEIGHT = 58;
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export default function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const handleDiconnect = () => {
    localStorage.setItem("logged", "false");
    localStorage.setItem("id", "null");
    localStorage.setItem("token", "null");
    navigate("/");
  };
  const items = links.map((link) => (
    <Link
      key={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      to={link.link}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} sx={{ position: "fixed", top: 0, width: "100%" }}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Image src={astro} height={50} width={50} />

        {localStorage.getItem("logged") == "false" ? (
          <Group
            spacing={19}
            className={classes.social}
            position="right"
            noWrap
          >
            <Link to={"/Authentification"}>
              <Button variant="default">Log in</Button>
            </Link>
            <Link to={"/SignUp"}>
              <Button>Sign up</Button>
            </Link>
            <LightNdark />
          </Group>
        ) : (
          <>
            <Group
              spacing={19}
              className={classes.social}
              position="right"
              noWrap
            >
              <Link to={"/Chat"}>
                <Button size="sm" color="green">
                  Go Chat!
                </Button>
              </Link>
              <Link to={"/Profile"}>
                <Button size="sm">My Profile</Button>
              </Link>
              <Button onClick={handleDiconnect} size="sm" color="red">
                Disconnect
              </Button>
              <LightNdark />
            </Group>
          </>
        )}
      </Container>
    </Header>
  );
}
