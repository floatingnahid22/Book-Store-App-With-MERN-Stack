import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          About me
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }}>
          Md. Nahid Hossain
        </Typography>
        <Typography sx={{ fontSize: "medium" }}>
          <LocationOnIcon /> Dhaka, Bangladesh.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Hi, I am a javascript developer who has been working for the last few
          months having knowledge in full-stack development. I prefer to work
          with proper guidelines and practices. I worked with JavaScript stack
          i.e., Node.js, React.js. I love to build full-stack applications for
          any sort of business need like listing web applications.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
