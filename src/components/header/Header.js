import React from 'react';
import {
  Stack,
  Link,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Text,
} from '@chakra-ui/react';
import logo from '../../assets/images/EVEE-Logo.png';
import { useNavigate } from 'react-router-dom';
import Drawer from './Drawer';

const Header = () => {
  const nav = useNavigate();

  const getuser = sessionStorage.getItem('user')

  const Logout = () => {
    sessionStorage.removeItem('user');  // Clear session storage or handle logout logic
    nav('/')
    window.location.reload()

  }


  return (
    <>
      <Stack
        width={"100%"}
        direction={{ base: "row", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        background={"linear-gradient(to right,#442e82 ,  #0ad035)"}
      >
        <Img
          src={logo}
          w={"120px"}
          cursor={"pointer"}
          onClick={() => nav("/")}
        />
        <Drawer />
        <Stack
          display={{ base: "none", md: "none", lg: "inherit" }}
          px={10}
          py={2}
          direction={"row"}
          gap={{ base: "20px", lg: "80px", xl: 12 }}
        >
          <Menu isLazy>
            <MenuButton
              _hover={
                {
                  // color: 'black',
                }
              }
              color={"white"}
              fontWeight={"600"}
              fontSize={{ base: 12, lg: 16 }}
            >
              Models
            </MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem onClick={() => nav("/eveon-leopard-pro")}>
                Leopard Pro
              </MenuItem>
              <MenuItem onClick={() => nav("/eveon-leopard")}>
                <Flex>
                  <Text>Leopard</Text>
                </Flex>
              </MenuItem>
              <MenuItem onClick={() => nav("/eveon-pronto")}>Pronto</MenuItem>
              <MenuItem onClick={() => nav("/eveon-joy")}>JOY</MenuItem>
              <MenuItem onClick={() => nav("/eveon-zippy")}>Zippy</MenuItem>
              <MenuItem onClick={() => nav("/eveon-flora")}>Flora</MenuItem>

            </MenuList>
          </Menu>
          <Link
            onClick={() => nav("/about")}
            fontWeight={"600"}
            fontSize={{ base: 12, lg: 16 }}
            color={"white"}
            _hover={{
              textDecoration: "none",
              // color: 'black',
            }}
          >
            About us
          </Link>
          <Link
            onClick={() => nav("/contact")}
            fontWeight={"600"}
            fontSize={{ base: 12, lg: 16 }}
            color={"white"}
            _hover={{
              textDecoration: "none",
              // color: 'black',
            }}
          >
            Contact Us
          </Link>
          <Link
            onClick={() => nav("/Shop")}
            fontWeight={"600"}
            fontSize={{ base: 12, lg: 16 }}
            color={"white"}
            _hover={{
              textDecoration: "none",
              // color: 'black',
            }}
          >
            Book Now
          </Link>
          {getuser ? (
            <Link
              onClick={Logout}
              fontWeight={"600"}
              fontSize={{ base: 12, lg: 16 }}
              color={"white"}
              _hover={{
                textDecoration: "none",
                // color: 'black',
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              onClick={() => nav("/login")}
              fontWeight={"600"}
              fontSize={{ base: 12, lg: 16 }}
              color={"white"}
              _hover={{
                textDecoration: "none",
                // color: 'black',
              }}
            >
              Login
            </Link>
          )}
          {getuser && (
            <Link
              onClick={() => nav("/admin")}
              fontWeight={"600"}
              fontSize={{ base: 12, lg: 16 }}
              color={"white"}
              _hover={{
                textDecoration: "none",
                // color: 'black',
              }}
            >
              Admin
            </Link>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
