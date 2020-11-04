import React, {FC} from 'react';

interface Props {
  trigger: number
}

const MemoChild: FC<Props> = React.memo(({trigger}) => {

  const startTime = performance.now()

  for (let i=0; i < 10000; i++) {
    // 16桁の文字列を乱数生成
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const N=16
    Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
  }

  const endTime = performance.now()

  console.log(`Memo: ${endTime - startTime} milliseconds`)

  return (
    <div>Memo Component: {trigger}</div>
  )
})

export default MemoChild;