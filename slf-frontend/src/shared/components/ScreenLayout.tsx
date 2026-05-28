// import all dependencies
import { ReactNode } from 'react';
import { Platform, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import styles
import { styles } from './screen-layout.styles';

type ScreenLayoutProps = {
  children: ReactNode;
  scroll?: boolean;
  centered?: boolean;
};


export default function ScreenLayout({
  children,
  scroll = true,
  centered = false,
}: ScreenLayoutProps) {
  return (
    <SafeAreaView style={styles.layout}>
      <KeyboardAvoidingView
        style={styles.layout__keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {scroll ? (
          <ScrollView
            contentContainerStyle={[
              styles.layout__scroll,
              centered && styles['layout__scroll--centered'],
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={styles.layout__content}>
            {children}
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
