import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  ButtonProps,
  Divider,
} from "@mantine/core";
import { IconBrandGoogle } from  "@tabler/icons";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import axios from "axios";
export function GoogleButton(props: ButtonProps) {
  return <Button leftIcon={<IconBrandGoogle />} variant="default" color="gray" {...props} />;
}
interface Credentials {
  email: string;
  password: string;
}




export default function AuthenticationTitle() {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const navigate = useNavigate();
  const HandleSubmit=()=>{
    credentials.email=credentials.email.toUpperCase();
      axios.post('http://localhost:8080/authenticate',credentials)
      .then((response)=>{
        localStorage.setItem('token', response.headers.token);
        localStorage.setItem('email', response.headers.email);
        localStorage.setItem('id', response.headers.id);
        localStorage.setItem("logged", "true");
        if(response.status===200){navigate("/")}
      })
      .catch(()=>{
         alert("User does not exist.");
      })
  }
  

  const HandleChange=(event:any)=>{
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }
  
  return (
    <Container size={840} my={40} sx={{width:620}} >
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor<"a">
          href="#"
          size="sm"
          onClick={(event) => event.preventDefault()}
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md"  sx={{ width: "100%" }} >
        <GoogleButton fullWidth>Sign in with Google</GoogleButton>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <TextInput label="Email" name="email" placeholder="you@mailProv.com" required  onChange={HandleChange} />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          name="password"
          required
          mt="md"
          
          onChange={HandleChange}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
          <Anchor<"a">
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={HandleSubmit}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
