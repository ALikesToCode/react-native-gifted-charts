import {useEffect, useRef} from 'react';
import {Dimensions, Platform} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const versionString = require('react-native/package.json').version;

const versionAr =
  typeof versionString === 'string' ? versionString.split('.') : [];
const msb = Number(versionAr[0]);
const mid = Number(versionAr[1]);
const lsb = Number(versionAr[2]);

export const rnVersion =
  (!isNaN(msb) ? msb : 0) * 1000000 +
  (!isNaN(mid) ? mid : 0) * 10000 +
  (!isNaN(lsb) ? lsb : 0);

export const screenWidth = Dimensions.get('window').width;

export function usePrevious<T>(value: T) {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export const isWebApp = Platform.OS === 'web';
export const isIos = Platform.OS === 'ios';
