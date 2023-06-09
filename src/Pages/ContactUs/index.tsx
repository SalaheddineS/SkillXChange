import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
export default function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container  mt={150} >
      <Paper shadow="sm" radius="xl" p="xl" withBorder
       sx={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)' }}
      >
    <form onSubmit={form.onSubmit(() => {
      axios.post('http://localhost:8084/addcontactus', form.values)
      .then(res => {console.log(res);})
    })}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Get in touch with us
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
    </Paper>
    </Container>
  );
}