import {
  TextInput,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  NumberInput,
  MultiSelect,
  Avatar,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { createStyles, SegmentedControl, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  active: {
    backgroundImage: "gray",
  },

  control: {
    border: "0 !important",
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));
export default function GetInTouchSimple() {
  const [ownSkills, setOwnSkills] = useState<string[]>([]);
  const [wantedSkills, setWantedSkills] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      lastname: "",
      address: "",
      message: "",
      city: "",
      phone: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      lastname: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      address: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size={1040} my={5}>
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          SkillXChange
        </Title>
        <Title
          order={2}
          size="h2"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          Sign Up
        </Title>

        <SegmentedControl
          color="gray"
          radius="md"
          size="sm"
          data={["Male", "Female"]}
          classNames={classes}
          mt="lg"
          sx={{ width: "100%" }}
        />
        <SimpleGrid
          cols={2}
          mt="sm"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="LastName"
            placeholder="Your LastName"
            name="lastname"
            variant="filled"
            {...form.getInputProps("lastname")}
          />
        </SimpleGrid>
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="City"
          placeholder="Your city"
          mt="md"
          name="city"
          variant="filled"
          {...form.getInputProps("city")}
        />
        <TextInput
          label="Address"
          placeholder="Address"
          mt="md"
          name="address"
          variant="filled"
          {...form.getInputProps("address")}
        />
        <NumberInput
          label="Phone"
          placeholder="Your phone number"
          mt="md"
          name="phone"
          variant="filled"
          {...form.getInputProps("phone")}
          hideControls
          minLength={10}
          maxLength={10}
        />
        <MultiSelect
          sx={{ marginTop: 10 }}
          label="Skills that you have"
          placeholder="Select skills"
          data={["React", "Angular", "Vue", "Svelte", "Ember", "Backbone"]}
          onChange={(value) => setOwnSkills(value)}
        />
        <MultiSelect
          sx={{ marginTop: 10 }}
          label="Skills that you want to learn from others"
          placeholder="Select skills"
          data={["React", "Angular", "Vue", "Svelte", "Ember", "Backbone"]}
          onChange={(value) => setWantedSkills(value)}
        />
      <Flex align="center">
  <Dropzone
    mt="xl"
    onDrop={(files) => {
      console.log(files);
      setImage(files[0])}}
    accept={IMAGE_MIME_TYPE}
    sx={(theme) => ({
      width: 700,
      minHeight: 110,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 0,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      "&[data-accept]": {
        color: theme.white,
        backgroundColor: theme.colors.blue[6],
      },

      "&[data-reject]": {
        color: theme.white,
        backgroundColor: theme.colors.red[6],
      },
    })}
  >
    <Text align="center">Profile Picture</Text>
  </Dropzone>
  <Avatar
    mt="xl"
    ml="xl"
    size={200}
    src={image ? URL.createObjectURL(image) : undefined}
  />
</Flex>

        <Group position="center" mt="xl">
          <Button
            type="submit"
            size="md"
            color={"gray"}
            onClick={() => {
              console.log(ownSkills);
            }}
          >
            Sign Up
          </Button>
        </Group>
      </form>
    </Container>
  );
}
