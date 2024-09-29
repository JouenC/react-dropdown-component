# React Dropdown Component

A simple and customizable dropdown component for React 18.3.1.

## Installation

Install the package via npm:

bash

`npm install react-dropdown-component-cj`

Or via yarn:

bash

`yarn add react-dropdown-component-cj`

## Usage

Import the Dropdown component and use it in your React application:

javascript
```
import React, { useState } from 'react';
import Dropdown from 'react-dropdown-component-cj';

const options = [
  { value: 'value1', label: 'Option 1' },
  { value: 'value2', label: 'Option 2' },
  { value: 'value3', label: 'Option 3' },
];

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <Dropdown
        id="example-dropdown"
        label="Choose an option"
        select={options}
        handleChange={handleChange}
      />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default App;
```

## Props

___________________________________________________________________________________________

Prop            Type	    Required	Description
___________________________________________________________________________________________
id              string	    Yes	        The unique identifier for the dropdown component.
___________________________________________________________________________________________

label	        string	    Yes	        The label for the dropdown.
___________________________________________________________________________________________

className	    string	    No	        Additional CSS classes for the dropdown wrapper.
___________________________________________________________________________________________

select	        array	    Yes	        An array of options to display in the dropdown.
                                        Each option should be an object with value and label.
___________________________________________________________________________________________

handleChange	function	Yes	        Function called when the dropdown value changes.
___________________________________________________________________________________________


## Example of select array

The select array contains objects with the following structure:

javascript
```
const selectOptions = [
  { value: 'value1', label: 'Option 1' },
  { value: 'value2', label: 'Option 2' },
  { value: 'value3', label: 'Option 3' },
];
```

## Default Props

You can pass additional classes to customize the dropdown appearance using className.

## Accessibility

This component is fully accessible and includes necessary aria-* attributes to ensure the dropdown is usable by screen readers.