import React, { ChangeEvent, useCallback, useState } from 'react';
import { Box } from '../../_shared/Box';
import { Input } from '../../_shared/Input';
import { Button } from '../../_shared/Button';

export type CreateContactProps = {
    onContactCreate: (data: { name: string; number: string; clearForm: () => void }) => void;
};

export const CreateContact: React.FC<CreateContactProps> = ({ onContactCreate }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value.trim()), [
        setName,
    ]);

    const handleNumberChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => setNumber(e.target.value.trim()),
        [setNumber],
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            onContactCreate({
                name: e.target.name.value.trim(),
                number: e.target.number.value.trim(),
                clearForm: () => {
                    setName('');
                    setNumber('');
                },
            });
        },
        [onContactCreate],
    );

    return (
        <Box tag="form" autoComplete="off" onSubmit={handleSubmit}>
            <Input label="Name" name="name" value={name} onChange={handleNameChange} />
            <Input label="Number" name="number" value={number} onChange={handleNumberChange} />
            <Button disabled={!name || !number}>Add contact</Button>
        </Box>
    );
};
