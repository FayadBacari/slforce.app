// import all dependencies
import { LOGO } from '@/shared/constants/images';
import { Image, View } from 'react-native';

// import styles
import { styles } from './logo.styles';

type LogoProps = {
  size?: number;
};

// Image size ratio (110/120 ≈ 0.92)
const IMAGE_RATIO = 0.92;


export default function Logo({ size = 120 }: LogoProps) {
  const imageSize = Math.round(size * IMAGE_RATIO);

  return (
    <View style={[styles.logo, { width: size, height: size }]}>
      <Image
        source={LOGO}
        style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }}
      />
    </View>
  );
}
