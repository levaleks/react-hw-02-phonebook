import styled from 'styled-components';

export const SBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.75);
    border-radius: 2px;
    background: white;

    > * {
        margin-top: 10px;

        &:first-child {
            margin-top: 0;
        }
    }
`;
