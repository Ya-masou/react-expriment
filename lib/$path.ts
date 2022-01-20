/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  hooks: {
    useeffect: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/useeffect' as const, hash: url?.hash })
    },
    usememo: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/usememo' as const, hash: url?.hash })
    },
    usestate: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/usestate' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
