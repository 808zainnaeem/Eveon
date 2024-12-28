import React from 'react';
import { Heading, Img, Stack, Text, Button } from '@chakra-ui/react';
import battary from '../../assets/images/batteryfull.png';
import electric from '../../assets/images/electric.png';
import battaryCharge from '../../assets/images/battaryCharge.png';
import { FaMotorcycle } from 'react-icons/fa';
import Modalbtn from './Modal';
import { useNavigate } from 'react-router-dom';

const EveeC1 = () => {
  const nav = useNavigate();
  return (
    <Stack width={'100%'} py={'8%'} px={'8%'} gap={'100px'}>
      <Stack
        w={'100%'}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        gap={{ base: 10, md: 0 }}
        alignItems={'center'}
      >
        <Stack
          w={{ base: '100%', md: '25%' }}
          direction={'column'}
          gap={10}
          alignItems={{ base: 'center', md: 'start' }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight={'500'}
            color={'black'}
          >
           Eveon Pronto
          </Heading>
          <Stack lineHeight={1}>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Price
            </Text>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Rs. 199000 only!
            </Text>
            <Text fontSize={'12px'} fontWeight={'500'} color={'#000'} mt={2}>
              (Ex. factory price)
            </Text>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '50%' }}
          direction={'row'}
          gap={{ base: 1, md: 1, xl: 10 }}
        >
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battary}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                90 Kms
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                Long-Range Battery
              </Heading>
            </Stack>
          </Stack>
          <Stack w={{ base: '30%', md: '33%' }} alignItems={'center'} gap={10}>
            <Img
              src={electric}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                72 V
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                38Ah Graphene Technology
              </Heading>
            </Stack>
          </Stack>
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battaryCharge}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                12 month
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
              >
                Battery Warrenty
              </Heading>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '25%' }}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={10}
        >
          <Modalbtn />

          <Button
            size={'md'}
            color={'#fff'}
            bgColor={'#0f9363'}
            fontWeight={'400'}
            fontSize={{ base: '13px', xl: '18px' }}
            leftIcon={<FaMotorcycle size={20} />}
            w={'fit-content'}
            px={8}
            py={5}
            _hover={{
              color: '#fff',
              bgColor: '#0f9363',
            }}
            onClick={() => nav('/booking')}
          >
            Book Now
          </Button>
        </Stack>
      </Stack>
      <Stack
        w={'100%'}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        gap={{ base: 10, md: 0 }}
        alignItems={'center'}
      >
        <Stack
          w={{ base: '100%', md: '25%' }}
          direction={'column'}
          gap={10}
          alignItems={{ base: 'center', md: 'start' }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight={'500'}
            color={'black'}
          >
           Eveon JOY
          </Heading>
          <Stack lineHeight={1}>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Price
            </Text>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Rs. 175000 only!
            </Text>
            <Text fontSize={'12px'} fontWeight={'500'} color={'#000'} mt={2}>
              (Ex. factory price)
            </Text>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '50%' }}
          direction={'row'}
          gap={{ base: 1, md: 1, xl: 10 }}
        >
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battary}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                60 to 70 Kms
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                Long-Range Battery
              </Heading>
            </Stack>
          </Stack>
          <Stack w={{ base: '30%', md: '33%' }} alignItems={'center'} gap={10}>
            <Img
              src={electric}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                72 V
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                Cruise control
              </Heading>
            </Stack>
          </Stack>
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battaryCharge}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                12 month
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
              >
                Battery Warrenty
              </Heading>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '25%' }}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={10}
        >
          <Modalbtn />

          <Button
            size={'md'}
            color={'#fff'}
            bgColor={'#0f9363'}
            fontWeight={'400'}
            fontSize={{ base: '13px', xl: '18px' }}
            leftIcon={<FaMotorcycle size={20} />}
            w={'fit-content'}
            px={8}
            py={5}
            _hover={{
              color: '#fff',
              bgColor: '#0f9363',
            }}
            onClick={() => nav('/booking')}
          >
            Book Now
          </Button>
        </Stack>
      </Stack>

      <Stack
        w={'100%'}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        gap={{ base: 10, md: 0 }}
        alignItems={'center'}
      >
        <Stack
          w={{ base: '100%', md: '25%' }}
          direction={'column'}
          gap={10}
          alignItems={{ base: 'center', md: 'start' }}
        >
          <Heading
           fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight={'500'}
            color={'black'}
          >
           Eveon Leopard
          </Heading>
          <Stack lineHeight={1}>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Price
            </Text>
            <Text
              fontSize={{ base: '23px', md: '20px', lg: '25px' }}
              fontWeight={'500'}
              color={'#000'}
            >
              Rs. 260,000 only!
            </Text>
            <Text fontSize={'12px'} fontWeight={'500'} color={'#000'} mt={2}>
              (Ex. factory price)
            </Text>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '50%' }}
          direction={'row'}
          gap={{ base: 1, md: 1, xl: 10 }}
        >
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battary}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                120 Kms
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                Long-Range Battery
              </Heading>
            </Stack>
          </Stack>
          <Stack w={{ base: '30%', md: '33%' }} alignItems={'center'} gap={10}>
            <Img
              src={electric}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                72 V
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
                textAlign={'center'}
              >
                38Ah Graphene Technology
              </Heading>
            </Stack>
          </Stack>
          <Stack alignItems={'center'} gap={10}>
            <Img
              src={battaryCharge}
              h={{ base: '55px', md: '65px', lg: '75px', xl: '80px' }}
              w={{ base: '58px', md: '68px', lg: '78px', xl: '83px' }}
            />
            <Stack lineHeight={1} alignItems={'center'}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '2xl' }}
                fontWeight={'400'}
                color={'#000'}
              >
                18 month
              </Text>
              <Heading
                fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }}
                fontWeight={'700'}
                color={'black'}
              >
                Battery Warrenty
              </Heading>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          w={{ base: '100%', md: '25%' }}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={10}
        >
          <Modalbtn />

          <Button
            size={'md'}
            color={'#fff'}
            bgColor={'#0f9363'}
            fontWeight={'400'}
            fontSize={{ base: '13px', xl: '18px' }}
            leftIcon={<FaMotorcycle size={20} />}
            w={'fit-content'}
            px={8}
            py={5}
            _hover={{
              color: '#fff',
              bgColor: '#0f9363',
            }}
            onClick={() => nav('/booking')}
          >
            Book Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EveeC1;
