import * as React from 'react';
import Button from '@mui/material/Button';

function MUIButton(props) {
  return (
      <Button variant={props.buttonVariant} 
          color={props.buttonColor}
      >
      {props.buttonText}
      </Button>
  );
}

export default MUIButton;