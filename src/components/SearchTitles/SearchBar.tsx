import React, { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'

interface Props {
  onSearch(title: string): void
}

export const SearchBar = ({ onSearch }: Props): JSX.Element => {
  const [title, setTitle] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onInputChange = () => {
    onSearch(title)
  }
  return (
    <InputGroup className='mb-3'>
      <Form.Control
        placeholder='Search Title'
        aria-label='Search Title Here'
        aria-describedby='basic-addon1'
        onChange={handleInputChange}
      />
      <Button
        variant='outline-secondary'
        id='segmented-button-dropdown-2'
        onClick={onInputChange}
      >
        Search
      </Button>
    </InputGroup>
  )
}
