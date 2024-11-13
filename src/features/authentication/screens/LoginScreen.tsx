import Button from '@/components/elements/Button';
import Text from '@/components/elements/Text';
import { View } from 'react-native';

export default function LoginScreen(): JSX.Element {
    return (
        <View style={{ padding: 20 }}>
            <Text size="5xl" weight="bold">
                Login
            </Text>
            <Text size="sm" weight="semibold" color="tertiary" style={{ paddingTop: 10 }}>
                Enter your credentials to continue
            </Text>

            <Button weight="bold" onPress={() => console.log('Login now')}>Login</Button>
        </View>
    );
}
