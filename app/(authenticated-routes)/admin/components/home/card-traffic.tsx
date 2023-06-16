import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
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
                     Traffic & Engagement
                  </Text>
                  {/* <Text span css={{color: 'white'}} size={'$xs'}>
                     Total Visits:
                  </Text> */}
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4', pl: '$12'}} align={'center'}>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  <Text span css={{color: 'white', mr: '$6'}} size={'$xs'}>
                     Total Visits:
                  </Text>
                 1.2M
               </Text>
               <Text span css={{color: '$green600'}} size={'$xs'}>
                  + 4.5%
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
                     12.06% <br/> Last Month Change
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
                  <Text span size={'$xs'} css={{color: '$white'}}>
                  00:05:32 <br/>Avg Visit Duration
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {/* {'⭐'} */}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     5.16 <br/> Pages per Visit
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
