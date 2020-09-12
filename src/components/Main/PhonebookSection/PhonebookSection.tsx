import React from 'react';
import { Phonebook } from './Phonebook';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const PhonebookSection: React.FC = () => {
    return (
        <MainSection>
            <MainSectionHeading>Phonebook</MainSectionHeading>

            <MainSectionContent bg="lightslategray">
                <Phonebook />
            </MainSectionContent>
        </MainSection>
    );
};
