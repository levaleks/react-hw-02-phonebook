import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Box } from '../../_shared/Box';
import { Input } from '../../_shared/Input';

export type ContactsFilterProps = {
    disabled?: boolean;
    onChange: (query: string) => void;
};

export const ContactsFilter: React.FC<ContactsFilterProps> = ({ disabled, onChange }) => {
    const [value, setValue] = useState('');

    const debouncedHandler = useCallback(
        debounce((e) => onChange(e.target.value.trim()), 200),
        [debounce, setValue, onChange],
    );

    const handleChange = useCallback(
        (e) => {
            e.persist();

            setValue(e.target.value.trim());

            debouncedHandler(e);
        },
        [debouncedHandler],
    );

    useEffect(() => {
        if (disabled && value) setValue('');
    }, [disabled, value, setValue]);

    return (
        <Box>
            <Input label="Find contacts by name" value={value} onChange={handleChange} disabled={disabled} />
        </Box>
    );
};
