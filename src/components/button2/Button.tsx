import * as React from "react";

type SitecoreFields = {
    label: {
        value?: string;
        editable?: string;
    };
    primary: {
        value?: boolean;
        editable?: string;
    };
};

type Props = {
    ///**
    // * Authorable fields
    // */
    //fields: SitecoreFields;
    ///**
    // * Non-Authorable fields
    // */
    //size: "small" | "medium" | "large";
    ///**
    // * Handlers
    // */
    //onClick?: () => void;
};

type State = {};

class ButtonComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <button type="button">
                    Button
                </button>
            </React.Fragment>
        );
    }
}

export default ButtonComponent;
