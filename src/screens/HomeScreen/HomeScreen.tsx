import React from 'react';
import { Text } from 'react-native';

interface homeProps {
    route: any
}

interface homeState {

}

class HomeScreen extends React.PureComponent<homeProps, homeState> {

    constructor(props: homeProps) {
        super(props);

    }

    render() {
        const { route } = this.props;

        return (
            <Text>ddddd</Text>
        )
    };

}
export default HomeScreen