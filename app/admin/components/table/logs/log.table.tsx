import {Table, useAsyncList} from '@nextui-org/react';
import React from 'react';
import {Box} from '../../styles/box';
import {columns, users} from './log.data';
import {RenderCell} from './log.render-cell';



export const LogsTableWrapper = () => {

   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
               border: 'none',
            },
         }}
      >
         <Table
            lined
            shadow={false}
            aria-label="Example table with custom cells"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
         
         >
            <Table.Header columns={columns}>
               {(column) => (
                  <Table.Column
                     key={column.uid}
                     align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body 
            items={users}>
               {(item) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {RenderCell({user: item, columnKey: columnKey})}
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
            <Table.Pagination
               shadow
               noMargin
               align="center"
               rowsPerPage={8}
               onPageChange={(page) => console.log({page})}
            />
         </Table>
      </Box>
   );
};
