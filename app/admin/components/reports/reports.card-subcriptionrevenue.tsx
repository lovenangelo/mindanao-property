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
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     Subcription Revenue
                  </Text>
                  <Text span css={{color: 'white'}} size={'$xs'}>
                     1311 Accounts
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4', px: '$12'}} align={'center'}>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  $3,910
               </Text>
               <Text span css={{color: '$red600'}} size={'$xs'}>
                  - 4.5%
               </Text>
            </Flex>
            <Flex css={{gap: '$10'}} align={'center'}>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     100,930 <br/> Elite
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'↑'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     54,120 <br/>Pro
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'↑'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     125 <br/> Ultimate
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
