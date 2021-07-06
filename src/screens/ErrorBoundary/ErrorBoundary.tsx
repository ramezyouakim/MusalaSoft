import React, { PureComponent, ErrorInfo, ReactNode } from "react";
import { Text } from "react-native";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends PureComponent<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <Text>Sorry.. there was an error</Text>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;