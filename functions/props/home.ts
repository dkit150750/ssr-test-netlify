import type { EdgeProps } from 'vitedge'

export default <EdgeProps>{
  async handler() {
    return {
      data: {
        server: true,
        message: await (await fetch('https://api-time.dtivt.ru/api/times')).json(),
      },
    }
  },
  options: {
    cache: {
      html: 60 * 60 * 24 * 7,
    },
  },
}
