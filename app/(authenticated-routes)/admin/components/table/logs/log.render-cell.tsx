import {Col, Row, User, Text, Tooltip} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../../icons/table/delete-icon';
import {EditIcon} from '../../icons/table/edit-icon';
import {EyeIcon} from '../../icons/table/eye-icon';
import {users} from './log.data';
import {IconButton, StyledBadge} from './log.table.styled';

interface Props {
   user: typeof users[number];
   columnKey: string | React.Key;
}

export const RenderCell = ({user, columnKey}: Props) => {
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'name':
         return (
            <User squared src={user.avatar} name={cellValue} css={{p: 0}}>
               {user.email}
            </User>
         );
      case 'actions':
         return (
            <Col>
                <Row
               justify="center"
               align="center"
               css={{'gap': '$5', '@md': {gap: 0}}}
               >
                  <Text size={14}  css={{ width: '30rem', whiteSpace: 'normal' }}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>
               </Row>
            </Col>
         );
         case 'dateandtime':
            return (
               <Col>
                  <Row>
                     <Text >  
                        10/12/2023 12:00:00am
                     </Text>
                  </Row>
               </Col>
            
            );
      default:
         return cellValue;
   }
};
