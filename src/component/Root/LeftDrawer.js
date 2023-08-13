import React from "react";
import styled from "@emotion/styled";
import color from "../../config/color";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import SailingIcon from "@mui/icons-material/Sailing";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const PageArray = [
  {
    name: "飛航船票",
    icon: <DirectionsBoatIcon sx={{ color: "#fff" }} />,
    linkTo: "ferry",
    childen: [
      { name: "購票", icon: <ConfirmationNumberIcon /> },
      { name: "船期表", icon: <CalendarTodayIcon /> },
    ],
  },
  {
    name: "跨境車",
    icon: <DriveEtaIcon sx={{ color: "#fff" }} />,
    linkTo: "limo",
  },
  {
    name: "澳門澳上遊",
    icon: <SailingIcon sx={{ color: "#fff" }} />,
    linkTo: "macauCruise",
  },
  {
    name: "機場巴士",
    icon: <AirplanemodeActiveIcon sx={{ color: "#fff" }} />,
    linkTo: "airportBus",
  },
];

const DrawerIconButtonSection = ({ href }) => {
  let { icon, name, linkTo } = href;
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      paddingLeft={5}
      //sx={{ borderBottom: "1px solid #d70000" }}
    >
      <Box>
        <IconButton>{icon}</IconButton>
      </Box>
      <Box>
        <Typography color="#fff" variant="h6">
          {name}
        </Typography>
      </Box>
    </Stack>
  );
};

const DrawerAccordion = ({ href }) => {
  let { icon, name, linkTo, childen } = href;

  return (
    <Accordion disableGutters sx={{ backgroundColor: color.primary }}>
      <AccordionSummary
        expandIcon={childen ? <ExpandMoreIcon sx={{ color: "#fff" }} /> : false}
        sx={{ pointerEvents: childen ? "all" : "none" }}
      >
        <Stack alignItems={"center"} direction={"row"}>
          <Box>
            <IconButton>{icon}</IconButton>
          </Box>
          <Box>
            <Typography color="#fff" variant="h6">
              {name}
            </Typography>
          </Box>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {childen &&
        childen.map((ch, index) => (
          <DrawerIconButtonSection index={index} href={ch}/>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default function LeftDrawer() {
  return (
    <DrawerContainer>
      <MemberSection>
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
          mt={2}
          mb={2}
        >
          <Box>
            <IconButton>
              <AccountCircleIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="h6" color={"#FFF"}>
              會員登入
            </Typography>
          </Box>
        </Stack>
      </MemberSection>

      <PageSection>
        {
          /*
                    PageArray.map((href, index) => (
                        <DrawerIconButtonSection href={href} />
                    ))*/
          PageArray.map((href, index) => (
            <DrawerAccordion href={href} />
          ))
        }
      </PageSection>
      <SettingSection>
        <DrawerIconButtonSection
          href={{
            icon: <SettingsIcon sx={{ color: "#fff" }} fontSize="large" />,
            name: "設定 Setting",
          }}
        />
      </SettingSection>
    </DrawerContainer>
  );
}

const DrawerContainer = styled.div`
  height: 100%;
  width: 280px;
  background-color: ${color.primary};
  box-shadow: 5px -1px 15px 0px rgba(89, 89, 89, 0.49);
  display: flex;
  flex-direction: column;
`;

const MemberSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #d70000;
`;

const PageSection = styled.div`
  flex: 1;
`;

const SettingSection = styled.div`
  border-top: 1px solid #d70000;
`;
