import * as React from "react";

type SitecoreFields = {
  label: string,
  primary: boolean
};

type Props = {
  /**
   * Authorable fields
   */
  fields: SitecoreFields;
  /**
   * Non-Authorable fields
   */
  size: "small" | "medium" | "large";
  /**
   * Handlers
   */
  onClick?: () => void;
};

type State = {};

class ButtonComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { fields } = this.props;
    const className = fields.primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";
    return (
      <React.Fragment>
        <button type="button" className={className} {...this.props}>
          {fields.label}
        </button>
      </React.Fragment>
    );
  }
}

export default ButtonComponent;
