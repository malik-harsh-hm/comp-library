import * as React from 'react';
import './button.css';

type SitecoreFields = {
  label: { value: string };
  primary: { value: boolean };
};

type Props = {
  /**
   * Authorable fields
   */
  fields: SitecoreFields;
  /**
   * Non-Authorable fields
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Handlers
   */
  onClick?: () => void;
};

const ButtonComponent = (props: Props): JSX.Element => {
  console.log('buttonprops', props);
  return (
    <React.Fragment>
      <button
        type="button"
        className={
          props.fields.primary.value ? 'storybook-button--primary' : 'storybook-button--secondary'
        }
        {...props}
      >
        {props.fields.label.value}
      </button>
    </React.Fragment>
  );
};

export default ButtonComponent;
