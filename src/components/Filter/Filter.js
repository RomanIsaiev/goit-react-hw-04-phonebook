import { nanoid } from 'nanoid';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onUpdateName }) => {
  const filterInput = nanoid();
  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterInput}>
        Find contacts by name:
        <FilterInput
          type="text"
          id={filterInput}
          value={filter}
          onChange={event => onUpdateName(event.target.value)}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
