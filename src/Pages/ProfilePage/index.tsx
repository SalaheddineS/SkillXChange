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
    NativeSelect,
  } from "@mantine/core";
  import { createStyles, SegmentedControl, Text } from "@mantine/core";
  import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
  import axios from "axios";
  import { useState, useEffect } from "react";


  
  
  interface Credentials {
    name: string;
    lastname: string;
    email: string;
    password: string;
  
    city: string;
    gender: string;
    phone: number;
    address: string;
  }
  
  export default function GetInTouchSimple() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const email=localStorage.getItem("email")
        const id = localStorage.getItem("id")
      fetch("http://localhost:8081/getSkills")
        .then((response) => response.json())
        .then((data) => {
          const newSkills = data.map((skill: any) => ({
            label: skill.skill,
            value: skill.skill,
          }));
          setSkills(newSkills);
        }).then(()=>{
        axios.post("http://localhost:8083/cloudinary/retrieveImages",{email:email})
        .then((res)=>{
            setImageURL(res.data)
        })
        }).then(()=>{
            axios.get("http://localhost:8080/getUserById/"+id).then((res)=>{
                res.data.password="";
                setCredentials(res.data)
            })
        }).then(
            ()=>{axios.post("http://localhost:8082/getSingleAssociation",{email:email}).then((res)=>{
                console.log(res.data)
            })}
        )


        .then(() => setLoading(false));
    }, []);
  
    const [mySkills, setMySkills] = useState<any>([]);
    const [wantedSkills, setWantedSkills] = useState<any>([]);
    const [skills, setSkills] = useState<any>([]);
    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({
      name: "",
      lastname: "",
      email: "",
      password: "",
      city: "CASABLANCA",
      phone: 0,
      gender: "",
      address: "",
    });
    const [gender, setGender] = useState<string>("Male");
  
    const cities = [
      "CASABLANCA",
      "RABAT",
      "FES",
      "MARRAKESH",
      "TANGIER",
      "AGADIR",
      "OUARZAZATE",
      "ESSAOUIRA",
      "TETOUAN",
      "MEKNES",
      "NADOR",
      "EL_JADIDA",
      "KENITRA",
      "TAZA",
      "SAFI",
      "OUDJA",
      "BERKANE",
      "TAROUDANT",
      "BENI_MELLAL",
      "KHOURIBGA",
      "TAOUNATE",
      "TAOURIRT",
      "ZAGORA",
      "SKHIRAT",
      "BOUJDOUR",
      "ASILAH",
      "ZOUAGHA_MYAL",
      "KHENIFRA",
      "TIFLET",
      "SIDI_KACEM",
      "KHEMISSET",
      "CHEFCHAOUEN",
      "SIDI_IFNI",
      "TAN_TAN",
      "TIZNIT",
    ];
    const handleChange = (e: any) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: any) => {
      e.preventDefault();
      credentials.email=credentials.email.toUpperCase();
      credentials.gender=gender;
      console.log(credentials);
      
      axios
        .post("http://localhost:8080/addUser", credentials)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }).then(()=>{
          mySkills.map((skill: any) => {
            console.log(skill);
            console.log(credentials.email);
            axios
              .post("http://localhost:8082/addAssociation", {
                skill: skill,
                email: credentials.email.toUpperCase(),
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }).then(()=>{
          wantedSkills.map((skill: any) => {
            axios
              .post("http://localhost:8082/addAssociationneeds", {
                skill: skill,
                email: credentials.email.toUpperCase(),
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }).then(
          ()=>{
            if (image) {
              const formData = new FormData();
              formData.append("Image", image);
              formData.append("fileName", credentials.email.toUpperCase());
              axios
                .post("http://localhost:8083/cloudinary/upload", formData)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }
        )
      
    };
    if (loading) return <div>Loading...</div>;
    return (
        
      <Container size={1040}>
        <form>
        <Flex align="stretch" justify={"center"} >
 
            <Avatar
              mt="xl"
              ml="xl"
              size={350}
              src={image ? URL.createObjectURL(image) : imageURL}
            />
                       <Dropzone
              mt="xl"
              onDrop={(files) => {
                setImage(files[0]);
              }}
              accept={IMAGE_MIME_TYPE}
              sx={(theme) => ({
                width: 60,
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
              <Text align="center">Edit</Text>
            </Dropzone>
          </Flex>
          <Title
            order={2}
            size="h1"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
            weight={900}
            align="center"
            onClick={() => {
              console.log(credentials);
            }}
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
            radius="md"
            size="sm"
            data={["Male", "Female"]}
            name="gender"
            mt="lg"
            sx={{ width: "100%" }}
            onChange={(e) => setGender(e)}
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
              onChange={handleChange}
            />
            <TextInput
              label="LastName"
              placeholder="Your LastName"
              name="lastname"
              variant="filled"
              onChange={handleChange}
            />
          </SimpleGrid>
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            mt="md"
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            placeholder="Your password"
            name="password"
            variant="filled"
            mt="md"
            onChange={handleChange}
          />
          <TextInput
            label="Confirm Password"
            placeholder="confirm your password"
            name="cpassword"
            variant="filled"
            mt="md"
            onChange={handleChange}
          />
  
          <NativeSelect
            mt={"md"}
            data={cities}
            label="City"
            radius="xs"
            name="city"
            onChange={handleChange}
          />
          <TextInput
            label="Address"
            placeholder="Address"
            mt="md"
            name="address"
            variant="filled"
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            placeholder="Your phone number"
            mt="md"
            name="phone"
            variant="filled"
            onChange={handleChange}
          />
          <MultiSelect
            sx={{ marginTop: 10 }}
            label="Skills that you have"
            placeholder="Select skills"
            data={skills}
            onChange={(value) => {
              setMySkills(value);
            }}
          />
          <MultiSelect
            sx={{ marginTop: 10 }}
            label="Skills that you want to learn from others"
            placeholder="Select skills"
            data={skills}
            onChange={(value) => {
              setWantedSkills(value);
            }}
          />
      
  
          <Group position="center" mt="xl">
            <Button  size="md" color={"gray"} onClick={handleSubmit}>
              Sign Up
            </Button>
          </Group>
        </form>
      </Container>
    );
  }
  