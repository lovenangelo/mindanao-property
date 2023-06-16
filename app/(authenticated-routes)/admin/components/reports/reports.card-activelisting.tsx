import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance2 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$accents0',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community color={'$accents9'} />
               <Flex direction={'column'}>
                  <Text span css={{color: ''}}>
                     Active Listing
                  </Text>
                  {/* <Text span size={'$xs'}>
                     +2400 People
                  </Text> */}
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4',  px: '$14'}} align={'center'}>
               <Text span css={{fontSize: '2rem'}} weight={'semibold'}>
                 102
               </Text>
               {/* <Text span css={{color: '$green600'}} size={'$xs'}>
                  + 4.5%
               </Text> */}
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               {/* <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'}>
                     11,930 USD
                  </Text>
               </Box> */}
               <Box>
                  {/* <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↑'}
                  </Text> */}
                  <Text span css={{color: '$green600', mr: '$2'}} size={'$xs'}>
                     + 4.5%
                  </Text>
                  <Text span size={'$xs'}>
                     Last Month Change
                  </Text>
               </Box>
               {/* <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'⭐'}
                  </Text>
                  <Text span size={'$xs'}>
                     150 VIP
                  </Text>
               </Box> */}
            </Flex>
         </Card.Body>
      </Card>
   );
};
