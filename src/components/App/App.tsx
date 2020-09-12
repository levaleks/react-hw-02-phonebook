import React from 'react';
import { PhonebookSection } from '../Main/PhonebookSection';
import { Main, MainHeading } from '../Main';

export const App: React.FC = () => {
    return (
        <Main>
            <MainHeading>Homework 02 – Ex. 02</MainHeading>
            <PhonebookSection />
        </Main>
    );
};
