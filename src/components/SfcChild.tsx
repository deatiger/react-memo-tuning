import React, {FC} from 'react';

interface Props {
  trigger: number
}

const SfcChild: FC<Props> = ({trigger}) => {
  const startTime = performance.now()

  for (let i=0; i < 10000; i++) {
    // 16桁の文字列を乱数生成
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const N=16
    Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
  }

  const endTime = performance.now()

  console.log(`SFC: ${endTime - startTime} milliseconds`)

  return (
    <div>SFC: {trigger}</div>
  );
};

export default SfcChild;