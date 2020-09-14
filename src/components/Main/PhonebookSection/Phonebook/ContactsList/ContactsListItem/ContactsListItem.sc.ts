import styled from 'styled-components';
import { SBox } from '../../../_shared/Box/Box.sc';
import { SButton } from '../../../_shared/Button/Button.sc';

export const SContactsListItem = styled(SBox)`
    flex-direction: row;
    align-items: center;

    > * {
        margin: 0;
    }
`;

export const SName = styled.span``;

export const SNumber = styled.span`
    margin-left: auto;
`;

export const SDelete = styled(SButton)`
    margin-left: auto;
`;
