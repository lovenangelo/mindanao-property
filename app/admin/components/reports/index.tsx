import {Button, Input, Text} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {DotsIcon} from '../icons/accounts/dots-icon';
import {ExportIcon} from '../icons/accounts/export-icon';
import {InfoIcon} from '../icons/accounts/info-icon';
import {TrashIcon} from '../icons/accounts/trash-icon';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {Flex} from '../styles/flex';
import {AccountsTableWrapper} from '../table/accounts/account.table';


import {Box} from '../styles/box';
import dynamic from 'next/dynamic';
import {CardNewUser} from './reports.card-newusers';
import {CardBalance2} from './reports.card-activelisting';
import {CardBalance3} from './reports.card-subcriptionrevenue';
import {CardAgents} from './reports.card-latestsubs';
import {CardTransactions} from './reports.card-transactions';
import NextLink from 'next/link';

const Chart = dynamic(
    () => import('../charts/steam').then((mod) => mod.Steam),
    {
       ssr: false,
    }
 );


export const Reports = () => {
   return (

       <Box css={{overflow: 'hidden', height: '100%'}}>
              <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/admin'}>
                  <CrumbLink href="/admin">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>
            <Crumb>
               <UsersIcon />
               <CrumbLink href="#">Reports</CrumbLink>
               <Text>/</Text>
            </Crumb>
         </Breadcrumbs>

         <Text h3>Reports</Text>
      </Flex>
      {/* Export button */}
      <Flex
            css={{gap: '$8'}}
            justify={'end'}
            wrap={'wrap'}
         >
           
            <Flex direction={'row'} css={{mr: '$12'}} wrap={'wrap'}>
               <Button auto iconRight={<ExportIcon />}>
                  Export to CSV
               </Button>
            </Flex>
         </Flex>
       <Flex
          css={{
             'gap': '$8',
             'pt': '$5',
             'height': 'fit-content',
             'flexWrap': 'wrap',
             '@lg': {
                flexWrap: 'nowrap',
             },
             '@sm': {
                pt: '$10',
             },
          }}
          justify={'center'}
       >
          <Flex
             css={{
                'px': '$12',
                'mt': '$8',
                '@xsMax': {px: '$10'},
                'gap': '$12',
             }}
             direction={'column'}
          >
             {/* Card Section Top */}
             <Box>
               
                <Text
                   h3
                   css={{
                      'textAlign': 'center',
                      '@sm': {
                         textAlign: 'inherit',
                      },
                   }}
                >
                   Reports for the Month of June
                </Text>
                <Flex
                   css={{
                      'gap': '$10',
                      'flexWrap': 'wrap',
                      'justifyContent': 'center',
                      '@sm': {
                         flexWrap: 'nowrap',
                      },
                   }}
                   direction={'row'}
                >
                   <CardNewUser />
                   <CardBalance2 />
                   <CardBalance3 />
                </Flex>
             </Box>
 
             {/* Chart */}
             <Box>
                <Text
                   h3
                   css={{
                      'textAlign': 'center',
                      '@lg': {
                         textAlign: 'inherit',
                      },
                   }}
                >
                   Statistics
                </Text>
                <Box
                   css={{
                      width: '100%',
                      backgroundColor: '$accents0',
                      boxShadow: '$lg',
                      borderRadius: '$2xl',
                      px: '$10',
                      py: '$10',
                   }}
                >
                   <Chart />
                </Box>
             </Box>
          </Flex>
 
          {/* Left Section */}
          <Box
             css={{
                'px': '$12',
                'mt': '$8',
                'height': 'fit-content',
                '@xsMax': {px: '$10'},
                'gap': '$6',
                'overflow': 'hidden',
             }}
          >
             <Text
                h3
                css={{
                   'textAlign': 'center',
                   '@lg': {
                      textAlign: 'inherit',
                   },
                }}
             >
                Section
             </Text>
             <Flex
                direction={'column'}
                justify={'center'}
                css={{
                   'gap': '$8',
                   'flexDirection': 'row',
                   'flexWrap': 'wrap',
                   '@sm': {
                      flexWrap: 'nowrap',
                   },
                   '@lg': {
                      flexWrap: 'nowrap',
                      flexDirection: 'column',
                   },
                }}
             >
                <CardAgents />
                <CardTransactions />
             </Flex>
          </Box>
       </Flex>
 
       {/* Table Latest Users */}
       <Flex
          direction={'column'}
          justify={'center'}
          css={{
             'width': '100%',
             'py': '$10',
             'px': '$10',
             'mt': '$8',
             '@sm': {px: '$20'},
          }}
       >
          {/* <Flex justify={'between'} wrap={'wrap'}>
             <Text
                h3
                css={{
                   'textAlign': 'center',
                   '@lg': {
                      textAlign: 'inherit',
                   },
                }}
             >
                Latest Users
             </Text>
             <NextLink href="/admin/accounts">
               <Link
                  block
                  color="primary"
                  css={{
                     'textAlign': 'center',
                     '@lg': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  View All
               </Link>
            </NextLink>
          </Flex> */}
          {/* <AccountsTableWrapper /> */}
       </Flex>
    </Box>
   );
};
