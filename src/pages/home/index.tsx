import { Stack } from "@mui/material";
import NavBar from "@/common/components/navbar/navbar";
import Profile from "../profile";

const Home = () => {
  return (
    <Stack>
        <NavBar>
          <Profile />
        </NavBar>
    </Stack>
  )
}

export default Home;