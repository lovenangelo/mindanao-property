import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance3 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$green600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                    Properties
                  </Text>
                  {/* <Text span css={{color: 'white'}} size={'$xs'}>
                     1311 Cars
                  </Text> */}
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4', pl: '$12'}} align={'center'}>
            <Text span css={{color: 'white', mr: '$6'}} size={'$xs'}>
                     Total Listings:
                  </Text>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  233,910
               </Text>
               {/* <Text span css={{color: '$red600'}} size={'$xs'}>
                  + 4.5%
               </Text> */}
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {/* {'↓'} */}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white', fontSize: '1rem'}}>
                     100,930 Rent
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {/* {'↑'} */}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white', fontSize: '1rem'}}>
                     54,120 Buy
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
                  <Text span size={'$xs'} css={{color: '$white', fontSize: '1rem'}}>
                     125 VIP
                  </Text>
               </Box> */}
            </Flex>
         </Card.Body>
      </Card>
   );
};
