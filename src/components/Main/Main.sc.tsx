import styled from 'styled-components';

export const MainHeading = styled.h1`
    margin: 0;
    font-size: 24px;
`;

export const MainSection = styled.section``;

export const Main = styled.main`
    min-width: 400px;
    max-width: 768px;
    margin: 0 auto;
    padding: 60px 20px 60px;

    > ${MainSection} {
        margin-top: 50px;

        & + & {
            margin-top: 40px;
        }

        &:first-child {
            margin-top: 0;
        }
    }
`;

export const MainSectionHeading = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const MainSectionContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: ${({ bg }): string => bg || '#ffffff'};
`;
