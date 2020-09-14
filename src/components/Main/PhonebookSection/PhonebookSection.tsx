import React from 'react';
import { Phonebook } from './Phonebook';
import { SMainSection, SMainSectionContent, SMainSectionHeading } from '../Main.sc';

export const PhonebookSection: React.FC = () => {
    return (
        <SMainSection>
            <SMainSectionHeading>Telephone book</SMainSectionHeading>

            <SMainSectionContent bg="skyblue">
                <Phonebook />
            </SMainSectionContent>
        </SMainSection>
    );
};
